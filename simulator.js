// ============================================================
// MarketSimulator — Powers 3 interactive trading minigames
// with canvas-rendered candlestick charts.
// ============================================================

class MarketSimulator {
  constructor() {
    this.predictionState = null;
    this.patternState = null;
    this.riskState = null;
    this._timeouts = [];
    this._animationFrames = [];
    this._canvasRefs = new Map();

    this.PATTERNS = [
      'head-and-shoulders',
      'inverse-head-and-shoulders',
      'double-top',
      'double-bottom',
      'ascending-triangle',
      'descending-triangle',
      'bull-flag',
      'bear-flag',
      'cup-and-handle',
      'rising-wedge',
      'falling-wedge'
    ];

    this.PATTERN_DISPLAY_NAMES = {
      'head-and-shoulders': 'Head & Shoulders',
      'inverse-head-and-shoulders': 'Inverse Head & Shoulders',
      'double-top': 'Double Top',
      'double-bottom': 'Double Bottom',
      'ascending-triangle': 'Ascending Triangle',
      'descending-triangle': 'Descending Triangle',
      'bull-flag': 'Bull Flag',
      'bear-flag': 'Bear Flag',
      'cup-and-handle': 'Cup & Handle',
      'rising-wedge': 'Rising Wedge',
      'falling-wedge': 'Falling Wedge'
    };

    this.PATTERN_EXPLANATIONS = {
      'head-and-shoulders': 'A bearish reversal pattern with three peaks — the middle peak (head) is the highest, flanked by two lower peaks (shoulders). A break below the neckline confirms the reversal.',
      'inverse-head-and-shoulders': 'A bullish reversal pattern with three troughs — the middle trough (head) is the lowest, flanked by two higher troughs (shoulders). A break above the neckline confirms the reversal.',
      'double-top': 'A bearish reversal pattern where price reaches the same resistance level twice and fails to break through, forming an "M" shape.',
      'double-bottom': 'A bullish reversal pattern where price reaches the same support level twice and bounces, forming a "W" shape.',
      'ascending-triangle': 'A bullish continuation pattern with a flat resistance line and rising support (higher lows). A breakout above resistance confirms the pattern.',
      'descending-triangle': 'A bearish continuation pattern with a flat support line and falling resistance (lower highs). A breakdown below support confirms the pattern.',
      'bull-flag': 'A bullish continuation pattern — a strong upward move (pole) followed by a tight downward-sloping consolidation (flag). Expect a breakout upward.',
      'bear-flag': 'A bearish continuation pattern — a strong downward move (pole) followed by a tight upward-sloping consolidation (flag). Expect a breakdown.',
      'cup-and-handle': 'A bullish continuation pattern resembling a teacup — a rounded bottom (cup) followed by a small pullback (handle). Breakout above the handle confirms.',
      'rising-wedge': 'A bearish pattern where both support and resistance lines converge upward. Despite higher highs and higher lows, momentum weakens. Expect a breakdown.',
      'falling-wedge': 'A bullish pattern where both support and resistance lines converge downward. Despite lower highs and lower lows, selling pressure weakens. Expect a breakout upward.'
    };
  }

  // ============================================
  // RANDOM HELPERS
  // ============================================

  _rand(min, max) {
    return Math.random() * (max - min) + min;
  }

  _randInt(min, max) {
    return Math.floor(this._rand(min, max + 1));
  }

  _gaussianRandom() {
    // Box-Muller transform for more natural distributions
    let u = 0, v = 0;
    while (u === 0) u = Math.random();
    while (v === 0) v = Math.random();
    return Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
  }

  _setTimeout(fn, delay) {
    const id = setTimeout(fn, delay);
    this._timeouts.push(id);
    return id;
  }

  _requestAnimationFrame(fn) {
    const id = requestAnimationFrame(fn);
    this._animationFrames.push(id);
    return id;
  }

  // ============================================
  // CANDLESTICK GENERATION
  // ============================================

  generateCandles(count, options = {}) {
    const volatility = options.volatility || 0.02;
    const trend = options.trend || 'sideways';
    let price = options.startPrice || 100;
    const candles = [];
    let momentum = 0;
    const baseVolume = this._rand(500000, 2000000);

    let trendBias = 0;
    if (trend === 'up') trendBias = this._rand(0.001, 0.003);
    else if (trend === 'down') trendBias = this._rand(-0.003, -0.001);

    const startTime = Date.now() - count * 60000;

    for (let i = 0; i < count; i++) {
      // Mean reversion factor
      const distFromStart = (price - (options.startPrice || 100)) / (options.startPrice || 100);
      const meanReversion = -distFromStart * 0.01;

      // Momentum with decay
      momentum = momentum * 0.7 + (trendBias + meanReversion) * 0.3;

      // Random noise with occasional large moves
      let noise = this._gaussianRandom() * volatility;
      if (Math.random() < 0.05) {
        noise *= this._rand(2, 3.5); // occasional large candle
      }

      const changePercent = momentum + noise;
      const open = price;
      const close = open * (1 + changePercent);

      // Generate realistic wicks
      const bodySize = Math.abs(close - open);
      const high = Math.max(open, close) + Math.abs(this._gaussianRandom()) * bodySize * this._rand(0.1, 1.5);
      const low = Math.min(open, close) - Math.abs(this._gaussianRandom()) * bodySize * this._rand(0.1, 1.5);

      // Volume correlates loosely with price movement
      const moveSize = Math.abs(changePercent) / volatility;
      const volume = Math.max(
        100000,
        baseVolume * (1 + moveSize * this._rand(0.3, 1.2) + this._gaussianRandom() * 0.3)
      );

      candles.push({
        open: parseFloat(open.toFixed(2)),
        high: parseFloat(high.toFixed(2)),
        low: parseFloat(low.toFixed(2)),
        close: parseFloat(close.toFixed(2)),
        volume: Math.round(volume),
        timestamp: startTime + i * 60000
      });

      price = close;
    }

    return candles;
  }

  generateTrendingCandles(count, direction) {
    const candles = [];
    let price = this._rand(50, 200);
    const baseVolume = this._rand(500000, 2000000);
    const startTime = Date.now() - count * 60000;
    const volatility = 0.015;

    const trendBias = direction === 'up' ? this._rand(0.002, 0.004) : this._rand(-0.004, -0.002);
    let momentum = 0;

    for (let i = 0; i < count; i++) {
      momentum = momentum * 0.6 + trendBias * 0.4;

      // Add pullbacks — roughly 20-30% of candles go against the trend
      let noise = this._gaussianRandom() * volatility;
      const pullbackChance = 0.25;
      if (Math.random() < pullbackChance) {
        noise = -Math.sign(trendBias) * Math.abs(noise) * this._rand(0.5, 1.2);
      }

      const changePercent = momentum + noise;
      const open = price;
      const close = open * (1 + changePercent);

      const bodySize = Math.abs(close - open) || price * 0.001;
      const high = Math.max(open, close) + Math.abs(this._gaussianRandom()) * bodySize * this._rand(0.2, 1.2);
      const low = Math.min(open, close) - Math.abs(this._gaussianRandom()) * bodySize * this._rand(0.2, 1.2);

      const moveSize = Math.abs(changePercent) / volatility;
      const volume = Math.max(
        100000,
        baseVolume * (1 + moveSize * this._rand(0.3, 1.0) + this._gaussianRandom() * 0.2)
      );

      candles.push({
        open: parseFloat(open.toFixed(2)),
        high: parseFloat(high.toFixed(2)),
        low: parseFloat(low.toFixed(2)),
        close: parseFloat(close.toFixed(2)),
        volume: Math.round(volume),
        timestamp: startTime + i * 60000
      });

      price = close;
    }

    return candles;
  }

  generatePatternCandles(patternType) {
    switch (patternType) {
      case 'head-and-shoulders': return this._genHeadAndShoulders(false);
      case 'inverse-head-and-shoulders': return this._genHeadAndShoulders(true);
      case 'double-top': return this._genDoubleTopBottom(false);
      case 'double-bottom': return this._genDoubleTopBottom(true);
      case 'ascending-triangle': return this._genTriangle('ascending');
      case 'descending-triangle': return this._genTriangle('descending');
      case 'bull-flag': return this._genFlag('bull');
      case 'bear-flag': return this._genFlag('bear');
      case 'cup-and-handle': return this._genCupAndHandle();
      case 'rising-wedge': return this._genWedge('rising');
      case 'falling-wedge': return this._genWedge('falling');
      default: return this.generateCandles(40);
    }
  }

  _buildCandlesFromPrices(prices) {
    const candles = [];
    const baseVolume = this._rand(500000, 2000000);
    const startTime = Date.now() - prices.length * 60000;

    for (let i = 0; i < prices.length; i++) {
      const targetClose = prices[i];
      const open = i === 0 ? targetClose * (1 + this._rand(-0.005, 0.005)) : candles[i - 1].close;
      const close = targetClose;

      const bodySize = Math.abs(close - open) || Math.abs(close) * 0.002;
      const high = Math.max(open, close) + Math.abs(this._gaussianRandom()) * bodySize * this._rand(0.1, 0.8);
      const low = Math.min(open, close) - Math.abs(this._gaussianRandom()) * bodySize * this._rand(0.1, 0.8);

      const moveSize = Math.abs(close - open) / (Math.abs(open) * 0.01 || 1);
      const volume = Math.max(
        100000,
        baseVolume * (1 + moveSize * this._rand(0.2, 0.8) + this._gaussianRandom() * 0.2)
      );

      candles.push({
        open: parseFloat(open.toFixed(2)),
        high: parseFloat(Math.max(high, open, close).toFixed(2)),
        low: parseFloat(Math.min(low, open, close).toFixed(2)),
        close: parseFloat(close.toFixed(2)),
        volume: Math.round(volume),
        timestamp: startTime + i * 60000
      });
    }

    return candles;
  }

  _addNoiseToPrices(prices, noiseFactor = 0.003) {
    return prices.map(p => p * (1 + this._gaussianRandom() * noiseFactor));
  }

  _genLeadIn(startPrice, count) {
    // Generate some random candles as lead-in
    const prices = [];
    let p = startPrice;
    for (let i = 0; i < count; i++) {
      p *= (1 + this._gaussianRandom() * 0.008);
      prices.push(p);
    }
    return prices;
  }

  _genHeadAndShoulders(inverted) {
    const basePrice = this._rand(80, 150);
    const dir = inverted ? -1 : 1;
    const neckline = basePrice;
    const shoulderHeight = basePrice * this._rand(0.06, 0.1) * dir;
    const headHeight = shoulderHeight * this._rand(1.4, 1.8);
    const prices = [];

    // Lead-in: 5-8 candles approaching
    const leadIn = this._genLeadIn(basePrice * (1 - dir * 0.05), this._randInt(5, 8));
    prices.push(...leadIn);

    // Left shoulder up (4-5 candles)
    const lsSteps = this._randInt(4, 5);
    for (let i = 0; i < lsSteps; i++) {
      prices.push(neckline + shoulderHeight * ((i + 1) / lsSteps));
    }

    // Back to neckline (3-4 candles)
    const lsDown = this._randInt(3, 4);
    for (let i = 0; i < lsDown; i++) {
      prices.push(neckline + shoulderHeight * (1 - (i + 1) / lsDown));
    }

    // Head up (5-6 candles)
    const headUp = this._randInt(5, 6);
    for (let i = 0; i < headUp; i++) {
      prices.push(neckline + headHeight * ((i + 1) / headUp));
    }

    // Back to neckline (4-5 candles)
    const headDown = this._randInt(4, 5);
    for (let i = 0; i < headDown; i++) {
      prices.push(neckline + headHeight * (1 - (i + 1) / headDown));
    }

    // Right shoulder up (4-5 candles)
    const rsUp = this._randInt(4, 5);
    const rightShoulderHeight = shoulderHeight * this._rand(0.85, 1.0);
    for (let i = 0; i < rsUp; i++) {
      prices.push(neckline + rightShoulderHeight * ((i + 1) / rsUp));
    }

    // Back to neckline and break (4-5 candles)
    const rsDown = this._randInt(4, 5);
    for (let i = 0; i < rsDown; i++) {
      const t = (i + 1) / rsDown;
      prices.push(neckline + rightShoulderHeight * (1 - t) - (dir * basePrice * 0.02 * Math.max(0, t - 0.7)));
    }

    // Breakdown / breakout (3 candles)
    for (let i = 0; i < 3; i++) {
      prices.push(neckline - dir * basePrice * 0.015 * (i + 1));
    }

    return this._buildCandlesFromPrices(this._addNoiseToPrices(prices));
  }

  _genDoubleTopBottom(isBottom) {
    const basePrice = this._rand(80, 150);
    const dir = isBottom ? -1 : 1;
    const extremeLevel = basePrice + dir * basePrice * this._rand(0.08, 0.14);
    const prices = [];

    // Lead-in
    const leadIn = this._genLeadIn(basePrice - dir * basePrice * 0.03, this._randInt(4, 6));
    prices.push(...leadIn);

    // First peak/trough (5-6 candles up)
    const firstMove = this._randInt(5, 6);
    for (let i = 0; i < firstMove; i++) {
      prices.push(basePrice + (extremeLevel - basePrice) * ((i + 1) / firstMove));
    }

    // Pullback to base (4-5 candles)
    const pullback1 = this._randInt(4, 5);
    for (let i = 0; i < pullback1; i++) {
      prices.push(extremeLevel + (basePrice - extremeLevel) * ((i + 1) / pullback1) * this._rand(0.85, 1.0));
    }

    // Second peak/trough — nearly same level (5-6 candles)
    const secondLevel = extremeLevel * (1 + this._rand(-0.01, 0.01));
    const secondMove = this._randInt(5, 6);
    for (let i = 0; i < secondMove; i++) {
      const lastPrice = prices[prices.length - 1];
      prices.push(lastPrice + (secondLevel - lastPrice) * ((i + 1) / secondMove));
    }

    // Rejection + break (5-6 candles)
    const breakdown = this._randInt(5, 6);
    for (let i = 0; i < breakdown; i++) {
      const t = (i + 1) / breakdown;
      prices.push(secondLevel + (basePrice - secondLevel) * t - dir * basePrice * 0.02 * Math.max(0, t - 0.5));
    }

    return this._buildCandlesFromPrices(this._addNoiseToPrices(prices));
  }

  _genTriangle(type) {
    const basePrice = this._rand(80, 150);
    const prices = [];
    const oscillations = this._randInt(4, 5);

    // Lead-in
    const leadIn = this._genLeadIn(basePrice, this._randInt(3, 5));
    prices.push(...leadIn);

    const resistance = basePrice * 1.06;
    const support = basePrice * 0.94;
    let currentHigh, currentLow;

    if (type === 'ascending') {
      // Flat resistance, rising support
      currentHigh = resistance;
      currentLow = support;
      for (let osc = 0; osc < oscillations; osc++) {
        const t = osc / oscillations;
        const thisLow = support + (resistance - support) * t * 0.6;
        const thisHigh = resistance * (1 + this._rand(-0.005, 0.005));

        // Move to low
        const downSteps = this._randInt(2, 4);
        const prevPrice = prices.length > 0 ? prices[prices.length - 1] : basePrice;
        for (let i = 0; i < downSteps; i++) {
          prices.push(prevPrice + (thisLow - prevPrice) * ((i + 1) / downSteps));
        }

        // Move to high
        const upSteps = this._randInt(2, 4);
        for (let i = 0; i < upSteps; i++) {
          prices.push(thisLow + (thisHigh - thisLow) * ((i + 1) / upSteps));
        }
      }

      // Breakout above
      const last = prices[prices.length - 1];
      for (let i = 0; i < 3; i++) {
        prices.push(last + (resistance * 0.04) * (i + 1));
      }
    } else {
      // Flat support, falling resistance
      currentHigh = resistance;
      currentLow = support;
      for (let osc = 0; osc < oscillations; osc++) {
        const t = osc / oscillations;
        const thisHigh = resistance - (resistance - support) * t * 0.6;
        const thisLow = support * (1 + this._rand(-0.005, 0.005));

        // Move to high
        const upSteps = this._randInt(2, 4);
        const prevPrice = prices.length > 0 ? prices[prices.length - 1] : basePrice;
        for (let i = 0; i < upSteps; i++) {
          prices.push(prevPrice + (thisHigh - prevPrice) * ((i + 1) / upSteps));
        }

        // Move to low
        const downSteps = this._randInt(2, 4);
        for (let i = 0; i < downSteps; i++) {
          prices.push(thisHigh + (thisLow - thisHigh) * ((i + 1) / downSteps));
        }
      }

      // Breakdown below
      const last = prices[prices.length - 1];
      for (let i = 0; i < 3; i++) {
        prices.push(last - (support * 0.04) * (i + 1));
      }
    }

    return this._buildCandlesFromPrices(this._addNoiseToPrices(prices));
  }

  _genFlag(type) {
    const basePrice = this._rand(60, 120);
    const prices = [];
    const dir = type === 'bull' ? 1 : -1;

    // Lead-in
    const leadIn = this._genLeadIn(basePrice, this._randInt(3, 5));
    prices.push(...leadIn);

    // Pole — strong move (5-7 candles)
    const poleSteps = this._randInt(5, 7);
    const poleHeight = basePrice * this._rand(0.1, 0.18) * dir;
    let p = prices[prices.length - 1];
    for (let i = 0; i < poleSteps; i++) {
      p += (poleHeight / poleSteps) * this._rand(0.7, 1.3);
      prices.push(p);
    }

    const poleTop = p;

    // Flag — consolidation drifting slightly against the trend (8-12 candles)
    const flagSteps = this._randInt(8, 12);
    const flagDrift = poleHeight * this._rand(-0.25, -0.15); // drift against trend
    for (let i = 0; i < flagSteps; i++) {
      const t = i / flagSteps;
      const drift = flagDrift * t;
      const oscillation = Math.sin(t * Math.PI * this._rand(2.5, 4)) * Math.abs(poleHeight) * 0.03;
      prices.push(poleTop + drift + oscillation);
    }

    // Breakout in trend direction (3-4 candles)
    const breakout = this._randInt(3, 4);
    const lastFlagPrice = prices[prices.length - 1];
    for (let i = 0; i < breakout; i++) {
      prices.push(lastFlagPrice + dir * basePrice * 0.02 * (i + 1));
    }

    return this._buildCandlesFromPrices(this._addNoiseToPrices(prices));
  }

  _genCupAndHandle() {
    const basePrice = this._rand(80, 150);
    const prices = [];

    // Lead-in
    const leadIn = this._genLeadIn(basePrice * 1.02, this._randInt(3, 5));
    prices.push(...leadIn);

    const rimPrice = basePrice;
    const cupDepth = basePrice * this._rand(0.08, 0.14);
    const cupBottom = rimPrice - cupDepth;

    // Left side of cup — decline (6-8 candles)
    const leftSteps = this._randInt(6, 8);
    for (let i = 0; i < leftSteps; i++) {
      const t = (i + 1) / leftSteps;
      prices.push(rimPrice - cupDepth * Math.sin(t * Math.PI / 2));
    }

    // Bottom of cup — rounded (4-6 candles)
    const bottomSteps = this._randInt(4, 6);
    for (let i = 0; i < bottomSteps; i++) {
      const t = i / (bottomSteps - 1);
      prices.push(cupBottom + cupDepth * 0.05 * Math.sin(t * Math.PI) + this._gaussianRandom() * cupDepth * 0.02);
    }

    // Right side of cup — rise (6-8 candles)
    const rightSteps = this._randInt(6, 8);
    for (let i = 0; i < rightSteps; i++) {
      const t = (i + 1) / rightSteps;
      prices.push(cupBottom + cupDepth * Math.sin(t * Math.PI / 2));
    }

    // Handle — slight pullback (4-6 candles)
    const handleSteps = this._randInt(4, 6);
    const handleDepth = cupDepth * this._rand(0.2, 0.35);
    for (let i = 0; i < handleSteps; i++) {
      const t = i / (handleSteps - 1);
      prices.push(rimPrice - handleDepth * Math.sin(t * Math.PI));
    }

    // Breakout above (3 candles)
    for (let i = 0; i < 3; i++) {
      prices.push(rimPrice + basePrice * 0.015 * (i + 1));
    }

    return this._buildCandlesFromPrices(this._addNoiseToPrices(prices));
  }

  _genWedge(type) {
    const basePrice = this._rand(80, 150);
    const prices = [];
    const dir = type === 'rising' ? 1 : -1;
    const oscillations = this._randInt(4, 5);

    // Lead-in
    const leadIn = this._genLeadIn(basePrice, this._randInt(3, 5));
    prices.push(...leadIn);

    // Both lines converge in the direction
    const startHigh = basePrice * (1 + dir * 0.02);
    const startLow = basePrice * (1 - dir * 0.02);
    const endHigh = basePrice * (1 + dir * 0.10);
    const endLow = basePrice * (1 + dir * 0.06);

    for (let osc = 0; osc < oscillations; osc++) {
      const t = osc / oscillations;
      const currentHighBound = startHigh + (endHigh - startHigh) * t;
      const currentLowBound = startLow + (endLow - startLow) * t;

      // Move to low bound
      const downSteps = this._randInt(2, 3);
      const prevPrice = prices.length > 0 ? prices[prices.length - 1] : basePrice;
      for (let i = 0; i < downSteps; i++) {
        prices.push(prevPrice + (currentLowBound - prevPrice) * ((i + 1) / downSteps));
      }

      // Move to high bound
      const upSteps = this._randInt(2, 3);
      for (let i = 0; i < upSteps; i++) {
        prices.push(currentLowBound + (currentHighBound - currentLowBound) * ((i + 1) / upSteps));
      }
    }

    // Breakout against the wedge direction
    const last = prices[prices.length - 1];
    const breakDir = type === 'rising' ? -1 : 1;
    for (let i = 0; i < 4; i++) {
      prices.push(last + breakDir * basePrice * 0.02 * (i + 1));
    }

    return this._buildCandlesFromPrices(this._addNoiseToPrices(prices));
  }

  // ============================================
  // CANVAS CHART RENDERING
  // ============================================

  drawChart(canvasId, candles, options = {}) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return null;

    const showVolume = options.showVolume !== false;
    const showGrid = options.showGrid !== false;
    const highlightLast = options.highlightLast || false;
    const highlightCount = options.highlightCount || 0;
    const animate = options.animate || false;
    const priceLabels = options.priceLabels !== false;
    const annotations = options.annotations || [];

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    const cssWidth = rect.width || canvas.clientWidth || 600;
    const cssHeight = rect.height || canvas.clientHeight || 400;

    canvas.width = cssWidth * dpr;
    canvas.height = cssHeight * dpr;
    canvas.style.width = cssWidth + 'px';
    canvas.style.height = cssHeight + 'px';

    const ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);

    // Store ref
    this._canvasRefs.set(canvasId, { canvas, ctx, candles, options, dpr, cssWidth, cssHeight });

    const padding = { top: 15, right: priceLabels ? 58 : 10, bottom: 10, left: 10 };
    const chartWidth = cssWidth - padding.left - padding.right;
    const volumeHeight = showVolume ? cssHeight * 0.18 : 0;
    const chartHeight = cssHeight - padding.top - padding.bottom - volumeHeight;

    // Calculate price range
    let minPrice = Infinity, maxPrice = -Infinity, maxVolume = 0;
    for (const c of candles) {
      if (c.low < minPrice) minPrice = c.low;
      if (c.high > maxPrice) maxPrice = c.high;
      if (c.volume > maxVolume) maxVolume = c.volume;
    }
    const priceRange = maxPrice - minPrice || 1;
    const pricePadding = priceRange * 0.08;
    minPrice -= pricePadding;
    maxPrice += pricePadding;
    const totalPriceRange = maxPrice - minPrice;

    const candleCount = candles.length;
    const gap = Math.max(1, Math.min(3, chartWidth / candleCount * 0.15));
    const candleWidth = Math.max(2, (chartWidth / candleCount) - gap);

    const priceToY = (price) => {
      return padding.top + chartHeight * (1 - (price - minPrice) / totalPriceRange);
    };

    const indexToX = (i) => {
      return padding.left + i * (candleWidth + gap) + gap / 2;
    };

    const drawCandlesRange = (start, end) => {
      // Clear
      ctx.clearRect(0, 0, cssWidth, cssHeight);

      // Grid
      if (showGrid) {
        ctx.strokeStyle = 'rgba(255,255,255,0.05)';
        ctx.lineWidth = 1;

        // Horizontal grid lines (price levels)
        const gridLines = 6;
        for (let i = 0; i <= gridLines; i++) {
          const price = minPrice + (totalPriceRange * i) / gridLines;
          const y = priceToY(price);
          ctx.beginPath();
          ctx.moveTo(padding.left, y);
          ctx.lineTo(cssWidth - padding.right, y);
          ctx.stroke();
        }

        // Vertical grid lines
        const vLines = Math.min(8, Math.floor(candleCount / 5));
        for (let i = 1; i <= vLines; i++) {
          const x = padding.left + (chartWidth * i) / (vLines + 1);
          ctx.beginPath();
          ctx.moveTo(x, padding.top);
          ctx.lineTo(x, padding.top + chartHeight);
          ctx.stroke();
        }
      }

      // Volume bars
      if (showVolume && maxVolume > 0) {
        const volBaseY = cssHeight - padding.bottom;
        for (let i = start; i < end; i++) {
          const c = candles[i];
          const isBull = c.close >= c.open;
          const x = indexToX(i);
          const volHeight = (c.volume / maxVolume) * volumeHeight;

          ctx.fillStyle = isBull ? 'rgba(16,185,129,0.18)' : 'rgba(239,68,68,0.18)';
          ctx.fillRect(x, volBaseY - volHeight, candleWidth, volHeight);
        }
      }

      // Candle bodies and wicks
      for (let i = start; i < end; i++) {
        const c = candles[i];
        const isBull = c.close >= c.open;
        const color = isBull ? '#10b981' : '#ef4444';

        const x = indexToX(i);
        const centerX = x + candleWidth / 2;

        // Highlight background for highlighted candles
        if (highlightLast && i >= candleCount - highlightCount) {
          ctx.fillStyle = 'rgba(59,130,246,0.08)';
          ctx.fillRect(x - gap / 2, padding.top, candleWidth + gap, chartHeight);
        }

        // Wick
        const wickTop = priceToY(c.high);
        const wickBottom = priceToY(c.low);
        ctx.strokeStyle = color;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(centerX, wickTop);
        ctx.lineTo(centerX, wickBottom);
        ctx.stroke();

        // Body
        const bodyTop = priceToY(Math.max(c.open, c.close));
        const bodyBottom = priceToY(Math.min(c.open, c.close));
        const bodyHeight = Math.max(1, bodyBottom - bodyTop);

        ctx.fillStyle = color;
        ctx.fillRect(x, bodyTop, candleWidth, bodyHeight);
      }

      // Price labels on right axis
      if (priceLabels) {
        const labelCount = 6;
        ctx.fillStyle = 'rgba(255,255,255,0.5)';
        ctx.font = '10px monospace';
        ctx.textAlign = 'left';
        ctx.textBaseline = 'middle';
        for (let i = 0; i <= labelCount; i++) {
          const price = minPrice + (totalPriceRange * i) / labelCount;
          const y = priceToY(price);
          const formatted = price >= 1000 ? price.toFixed(0) : price.toFixed(2);
          ctx.fillText(formatted, cssWidth - padding.right + 5, y);
        }
      }

      // Annotations
      for (const ann of annotations) {
        ctx.fillStyle = ann.color || '#ffffff';
        ctx.font = ann.font || 'bold 11px sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'bottom';
        ctx.fillText(ann.text, ann.x, ann.y);
      }
    };

    if (animate) {
      let currentEnd = 1;
      const step = () => {
        if (currentEnd <= candles.length) {
          drawCandlesRange(0, currentEnd);
          currentEnd++;
          this._setTimeout(() => {
            this._requestAnimationFrame(step);
          }, 50);
        }
      };
      this._requestAnimationFrame(step);
    } else {
      drawCandlesRange(0, candles.length);
    }

    return { canvasId, candles, options };
  }

  drawPriceLine(canvasId, price, color, label) {
    const ref = this._canvasRefs.get(canvasId);
    if (!ref) return;

    const { ctx, candles, cssWidth, cssHeight } = ref;
    const padding = { top: 15, right: ref.options.priceLabels !== false ? 58 : 10, bottom: 10, left: 10 };
    const volumeHeight = ref.options.showVolume !== false ? cssHeight * 0.18 : 0;
    const chartHeight = cssHeight - padding.top - padding.bottom - volumeHeight;

    let minPrice = Infinity, maxPrice = -Infinity;
    for (const c of candles) {
      if (c.low < minPrice) minPrice = c.low;
      if (c.high > maxPrice) maxPrice = c.high;
    }
    const priceRange = maxPrice - minPrice || 1;
    const pricePadding = priceRange * 0.08;
    minPrice -= pricePadding;
    maxPrice += pricePadding;
    const totalPriceRange = maxPrice - minPrice;

    const y = padding.top + chartHeight * (1 - (price - minPrice) / totalPriceRange);

    ctx.save();
    ctx.strokeStyle = color;
    ctx.lineWidth = 1;
    ctx.setLineDash([5, 4]);
    ctx.beginPath();
    ctx.moveTo(padding.left, y);
    ctx.lineTo(cssWidth - padding.right, y);
    ctx.stroke();
    ctx.setLineDash([]);

    if (label) {
      ctx.fillStyle = color;
      ctx.font = 'bold 10px sans-serif';
      ctx.textAlign = 'right';
      ctx.textBaseline = 'bottom';
      ctx.fillText(label, cssWidth - padding.right - 4, y - 3);
    }
    ctx.restore();
  }

  clearCanvas(canvasId) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    ctx.save();
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.restore();
    this._canvasRefs.delete(canvasId);
  }

  // ============================================
  // GAME 1: BULL OR BEAR (Prediction Game)
  // ============================================

  startPredictionGame(canvasId) {
    this.predictionState = {
      round: 1,
      totalRounds: 10,
      score: 0,
      streak: 0,
      bestStreak: 0,
      results: [],
      canvasId: canvasId,
      currentHistorical: null,
      currentFuture: null,
      futureDirection: null,
      awaitingAnswer: false
    };
    return this.loadPredictionRound(canvasId);
  }

  loadPredictionRound(canvasId) {
    const state = this.predictionState;
    if (!state) return;

    // Pick a random trend for the historical data
    const trends = ['up', 'down', 'sideways'];
    const trend = trends[this._randInt(0, 2)];
    const historicalCount = this._randInt(20, 30);
    const startPrice = this._rand(50, 200);

    const historical = this.generateCandles(historicalCount, {
      trend: trend,
      startPrice: startPrice,
      volatility: 0.018
    });

    // Generate future candles
    const lastPrice = historical[historical.length - 1].close;
    const continuesTrend = Math.random() < 0.6;

    let futureTrend;
    if (continuesTrend) {
      futureTrend = trend === 'sideways' ? (Math.random() < 0.5 ? 'up' : 'down') : trend;
    } else {
      if (trend === 'up') futureTrend = 'down';
      else if (trend === 'down') futureTrend = 'up';
      else futureTrend = Math.random() < 0.5 ? 'up' : 'down';
    }

    const future = this.generateCandles(5, {
      trend: futureTrend,
      startPrice: lastPrice,
      volatility: 0.02
    });
    // Fix the open of the first future candle to match the last historical close
    future[0].open = historical[historical.length - 1].close;

    const netChange = future[future.length - 1].close - historical[historical.length - 1].close;
    const direction = netChange >= 0 ? 'bull' : 'bear';

    state.currentHistorical = historical;
    state.currentFuture = future;
    state.futureDirection = direction;
    state.futurePriceChange = netChange;
    state.awaitingAnswer = true;

    // Draw only historical candles
    this.drawChart(canvasId, historical, {
      showVolume: true,
      showGrid: true,
      animate: false,
      priceLabels: true
    });

    return { round: state.round, totalRounds: state.totalRounds };
  }

  submitPrediction(canvasId, prediction) {
    const state = this.predictionState;
    if (!state || !state.awaitingAnswer) {
      return Promise.resolve(null);
    }

    state.awaitingAnswer = false;
    const correct = prediction === state.futureDirection;

    if (correct) {
      state.score += 1;
      state.streak += 1;
      if (state.streak > state.bestStreak) state.bestStreak = state.streak;
    } else {
      state.streak = 0;
    }

    state.results.push({
      round: state.round,
      prediction: prediction,
      actual: state.futureDirection,
      correct: correct,
      priceChange: state.futurePriceChange
    });

    // Animate future candles revealing
    const allCandles = state.currentHistorical.concat(state.currentFuture);

    return new Promise((resolve) => {
      // First, redraw chart with all candles but highlight the future ones
      this.drawChart(canvasId, allCandles, {
        showVolume: true,
        showGrid: true,
        highlightLast: true,
        highlightCount: state.currentFuture.length,
        animate: false,
        priceLabels: true
      });

      // Draw result indicator
      const ref = this._canvasRefs.get(canvasId);
      if (ref) {
        const { ctx, cssWidth, cssHeight } = ref;
        const indicatorColor = correct ? '#10b981' : '#ef4444';
        const indicatorText = correct ? (state.futureDirection === 'bull' ? '\u25B2 BULL' : '\u25BC BEAR') :
                                        (state.futureDirection === 'bull' ? '\u25B2 Was BULL' : '\u25BC Was BEAR');

        // Draw a result badge
        ctx.save();
        const badgeX = cssWidth / 2;
        const badgeY = cssHeight * 0.15;
        const badgeText = correct ? 'CORRECT!' : 'WRONG';

        ctx.fillStyle = indicatorColor;
        ctx.globalAlpha = 0.9;
        ctx.font = 'bold 18px sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        // Badge background
        const metrics = ctx.measureText(badgeText);
        const bw = metrics.width + 24;
        const bh = 32;
        ctx.beginPath();
        ctx.roundRect(badgeX - bw / 2, badgeY - bh / 2, bw, bh, 6);
        ctx.fill();

        ctx.fillStyle = '#ffffff';
        ctx.globalAlpha = 1;
        ctx.fillText(badgeText, badgeX, badgeY);

        // Direction indicator
        ctx.fillStyle = indicatorColor;
        ctx.font = 'bold 13px sans-serif';
        ctx.fillText(indicatorText, badgeX, badgeY + 24);
        ctx.restore();
      }

      // Dispatch game-result event
      document.dispatchEvent(new CustomEvent('game-result', {
        detail: {
          game: 'prediction',
          correct: correct,
          score: state.score
        }
      }));

      const result = {
        correct: correct,
        actualDirection: state.futureDirection,
        priceChange: parseFloat(state.futurePriceChange.toFixed(2))
      };

      // After delay, advance or end
      this._setTimeout(() => {
        state.round++;
        if (state.round > state.totalRounds) {
          this.endGame('prediction');
        } else {
          this.loadPredictionRound(canvasId);
        }
        resolve(result);
      }, 1800);
    });
  }

  // ============================================
  // GAME 2: PATTERN SPOTTER
  // ============================================

  startPatternGame(canvasId) {
    this.patternState = {
      round: 1,
      totalRounds: 10,
      score: 0,
      results: [],
      canvasId: canvasId,
      currentPattern: null,
      currentOptions: null,
      correctIndex: null,
      awaitingAnswer: false
    };
    return this.loadPatternRound(canvasId);
  }

  loadPatternRound(canvasId) {
    const state = this.patternState;
    if (!state) return null;

    // Pick a random pattern
    const patternIndex = this._randInt(0, this.PATTERNS.length - 1);
    const correctPattern = this.PATTERNS[patternIndex];

    // Generate candles
    const candles = this.generatePatternCandles(correctPattern);

    // Generate 4 options: 1 correct + 3 distractors
    const distractors = this.PATTERNS.filter(p => p !== correctPattern);
    // Shuffle and pick 3
    for (let i = distractors.length - 1; i > 0; i--) {
      const j = this._randInt(0, i);
      [distractors[i], distractors[j]] = [distractors[j], distractors[i]];
    }
    const wrongOptions = distractors.slice(0, 3);

    // Create options array with correct answer in random position
    const optionsRaw = [...wrongOptions];
    const correctPos = this._randInt(0, 3);
    optionsRaw.splice(correctPos, 0, correctPattern);

    // Convert to display names
    const options = optionsRaw.map(p => this.PATTERN_DISPLAY_NAMES[p] || p);

    state.currentPattern = correctPattern;
    state.currentOptions = optionsRaw;
    state.correctIndex = correctPos;
    state.awaitingAnswer = true;

    // Draw chart
    this.drawChart(canvasId, candles, {
      showVolume: true,
      showGrid: true,
      animate: false,
      priceLabels: true
    });

    return {
      options: options,
      correctIndex: correctPos,
      round: state.round,
      totalRounds: state.totalRounds
    };
  }

  submitPatternAnswer(canvasId, selectedIndex) {
    const state = this.patternState;
    if (!state || !state.awaitingAnswer) return null;

    state.awaitingAnswer = false;
    const correct = selectedIndex === state.correctIndex;

    if (correct) {
      state.score += 1;
    }

    state.results.push({
      round: state.round,
      pattern: state.currentPattern,
      selectedIndex: selectedIndex,
      correct: correct
    });

    // Show correct answer annotation on chart
    const ref = this._canvasRefs.get(canvasId);
    if (ref) {
      const { ctx, cssWidth, cssHeight } = ref;
      ctx.save();

      const patternName = this.PATTERN_DISPLAY_NAMES[state.currentPattern];
      const badgeColor = correct ? '#10b981' : '#ef4444';
      const badgeText = correct ? 'CORRECT!' : 'WRONG';

      // Badge background
      ctx.fillStyle = badgeColor;
      ctx.globalAlpha = 0.9;
      ctx.font = 'bold 16px sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      const badgeX = cssWidth / 2;
      const badgeY = cssHeight * 0.12;
      const metrics = ctx.measureText(badgeText);
      const bw = metrics.width + 24;
      const bh = 28;
      ctx.beginPath();
      ctx.roundRect(badgeX - bw / 2, badgeY - bh / 2, bw, bh, 6);
      ctx.fill();

      ctx.fillStyle = '#ffffff';
      ctx.globalAlpha = 1;
      ctx.fillText(badgeText, badgeX, badgeY);

      // Pattern name
      ctx.fillStyle = '#94a3b8';
      ctx.font = '12px sans-serif';
      ctx.fillText('Pattern: ' + patternName, badgeX, badgeY + 22);

      ctx.restore();
    }

    const explanation = this.PATTERN_EXPLANATIONS[state.currentPattern] || '';

    // Dispatch game-result event
    document.dispatchEvent(new CustomEvent('game-result', {
      detail: {
        game: 'pattern',
        correct: correct,
        score: state.score
      }
    }));

    const result = {
      correct: correct,
      correctPattern: this.PATTERN_DISPLAY_NAMES[state.currentPattern],
      explanation: explanation
    };

    // Advance after delay
    this._setTimeout(() => {
      state.round++;
      if (state.round > state.totalRounds) {
        this.endGame('pattern');
      } else {
        this.loadPatternRound(canvasId);
      }
    }, 2200);

    return result;
  }

  // ============================================
  // GAME 3: RISK MANAGER
  // ============================================

  startRiskGame(canvasId) {
    this.riskState = {
      round: 1,
      totalRounds: 10,
      score: 0,
      results: [],
      canvasId: canvasId,
      currentScenario: null,
      awaitingAnswer: false
    };
    return this.loadRiskRound(canvasId);
  }

  loadRiskRound(canvasId) {
    const state = this.riskState;
    if (!state) return null;

    // Generate scenario
    const accountSize = this._randInt(1, 10) * 10000; // $10k - $100k
    const stockPrice = parseFloat(this._rand(10, 500).toFixed(2));
    const direction = Math.random() < 0.5 ? 'long' : 'short';
    const maxRiskPercent = Math.random() < 0.5 ? 1 : 2;

    // Generate chart with a setup
    const trend = direction === 'long' ? 'up' : 'down';
    const candles = this.generateCandles(30, {
      trend: trend,
      startPrice: stockPrice * (direction === 'long' ? 0.9 : 1.1),
      volatility: 0.015
    });

    // The last candle's close is our entry price
    const entryPrice = candles[candles.length - 1].close;

    // Calculate ideal stop loss based on recent price action
    let recentLow = Infinity, recentHigh = -Infinity;
    const lookback = Math.min(10, candles.length);
    for (let i = candles.length - lookback; i < candles.length; i++) {
      if (candles[i].low < recentLow) recentLow = candles[i].low;
      if (candles[i].high > recentHigh) recentHigh = candles[i].high;
    }

    let idealStopLoss, idealTarget;
    if (direction === 'long') {
      idealStopLoss = parseFloat((recentLow * 0.995).toFixed(2)); // Just below recent lows
      const riskPerShare = entryPrice - idealStopLoss;
      idealTarget = parseFloat((entryPrice + riskPerShare * 3).toFixed(2)); // 3:1 R/R
    } else {
      idealStopLoss = parseFloat((recentHigh * 1.005).toFixed(2)); // Just above recent highs
      const riskPerShare = idealStopLoss - entryPrice;
      idealTarget = parseFloat((entryPrice - riskPerShare * 3).toFixed(2)); // 3:1 R/R
    }

    const scenario = {
      accountSize: accountSize,
      stockPrice: parseFloat(entryPrice.toFixed(2)),
      direction: direction,
      maxRiskPercent: maxRiskPercent,
      idealStopLoss: idealStopLoss,
      idealTarget: idealTarget,
      entryPrice: parseFloat(entryPrice.toFixed(2)),
      recentHigh: parseFloat(recentHigh.toFixed(2)),
      recentLow: parseFloat(recentLow.toFixed(2))
    };

    state.currentScenario = scenario;
    state.awaitingAnswer = true;

    // Draw chart
    this.drawChart(canvasId, candles, {
      showVolume: true,
      showGrid: true,
      animate: false,
      priceLabels: true
    });

    // Draw entry price line
    this.drawPriceLine(canvasId, entryPrice, '#3b82f6', 'Entry: $' + entryPrice.toFixed(2));

    return {
      accountSize: scenario.accountSize,
      stockPrice: scenario.stockPrice,
      direction: scenario.direction,
      maxRiskPercent: scenario.maxRiskPercent,
      entryPrice: scenario.entryPrice,
      round: state.round,
      totalRounds: state.totalRounds
    };
  }

  submitRiskAnswer(positionSize, stopLoss, takeProfit) {
    const state = this.riskState;
    if (!state || !state.awaitingAnswer) return null;

    state.awaitingAnswer = false;
    const scenario = state.currentScenario;

    positionSize = parseFloat(positionSize);
    stopLoss = parseFloat(stopLoss);
    takeProfit = parseFloat(takeProfit);

    // Calculate actual risk
    const riskPerShare = Math.abs(scenario.entryPrice - stopLoss);
    const riskAmount = positionSize * riskPerShare;
    const riskPercent = (riskAmount / scenario.accountSize) * 100;

    // Calculate R:R ratio
    const rewardPerShare = Math.abs(takeProfit - scenario.entryPrice);
    const rrRatio = riskPerShare > 0 ? rewardPerShare / riskPerShare : 0;

    // Ideal risk amount
    const idealRiskAmount = scenario.accountSize * (scenario.maxRiskPercent / 100);
    const idealPositionSize = Math.floor(idealRiskAmount / Math.abs(scenario.entryPrice - scenario.idealStopLoss));

    // Scoring
    let scoreBreakdown = { riskScore: 0, rrScore: 0, stopScore: 0 };
    let totalScore = 0;

    // 1. Risk within limits (+40 points)
    if (riskPercent <= scenario.maxRiskPercent * 1.05) {
      // Within limits (5% tolerance)
      scoreBreakdown.riskScore = 40;
    } else if (riskPercent <= scenario.maxRiskPercent * 1.25) {
      // Slightly over
      scoreBreakdown.riskScore = 25;
    } else if (riskPercent <= scenario.maxRiskPercent * 1.5) {
      scoreBreakdown.riskScore = 10;
    } else {
      scoreBreakdown.riskScore = 0;
    }

    // 2. R:R ratio (+30 points)
    if (rrRatio >= 3) {
      scoreBreakdown.rrScore = 30;
    } else if (rrRatio >= 2.5) {
      scoreBreakdown.rrScore = 25;
    } else if (rrRatio >= 2) {
      scoreBreakdown.rrScore = 20;
    } else if (rrRatio >= 1.5) {
      scoreBreakdown.rrScore = 10;
    } else {
      scoreBreakdown.rrScore = 0;
    }

    // 3. Stop loss placement quality (+30 points)
    const idealStopDist = Math.abs(scenario.entryPrice - scenario.idealStopLoss);
    const actualStopDist = Math.abs(scenario.entryPrice - stopLoss);
    const stopQuality = idealStopDist > 0 ? 1 - Math.min(1, Math.abs(actualStopDist - idealStopDist) / idealStopDist) : 0;

    // Check stop is on the correct side
    let correctSide = false;
    if (scenario.direction === 'long') {
      correctSide = stopLoss < scenario.entryPrice;
    } else {
      correctSide = stopLoss > scenario.entryPrice;
    }

    // Check take profit is on the correct side
    let correctTPSide = false;
    if (scenario.direction === 'long') {
      correctTPSide = takeProfit > scenario.entryPrice;
    } else {
      correctTPSide = takeProfit < scenario.entryPrice;
    }

    if (!correctSide || !correctTPSide) {
      scoreBreakdown.stopScore = 0;
      if (!correctSide) scoreBreakdown.rrScore = 0;
    } else {
      scoreBreakdown.stopScore = Math.round(stopQuality * 30);
    }

    totalScore = scoreBreakdown.riskScore + scoreBreakdown.rrScore + scoreBreakdown.stopScore;
    state.score += totalScore;

    state.results.push({
      round: state.round,
      score: totalScore,
      riskPercent: riskPercent,
      rrRatio: rrRatio
    });

    // Build feedback
    const feedbackParts = [];

    if (scoreBreakdown.riskScore >= 35) {
      feedbackParts.push('Excellent risk management! You kept risk within the ' + scenario.maxRiskPercent + '% limit.');
    } else if (scoreBreakdown.riskScore >= 20) {
      feedbackParts.push('Risk was slightly over the ' + scenario.maxRiskPercent + '% limit at ' + riskPercent.toFixed(1) + '%.');
    } else {
      feedbackParts.push('Risk too high at ' + riskPercent.toFixed(1) + '% — the limit was ' + scenario.maxRiskPercent + '%.');
    }

    if (rrRatio >= 3) {
      feedbackParts.push('Great R:R ratio of ' + rrRatio.toFixed(1) + ':1!');
    } else if (rrRatio >= 2) {
      feedbackParts.push('Acceptable R:R ratio of ' + rrRatio.toFixed(1) + ':1. Aim for 3:1.');
    } else {
      feedbackParts.push('R:R ratio of ' + rrRatio.toFixed(1) + ':1 is too low. Minimum should be 2:1.');
    }

    if (!correctSide) {
      feedbackParts.push('Stop loss is on the wrong side of the entry!');
    } else if (!correctTPSide) {
      feedbackParts.push('Take profit is on the wrong side of the entry!');
    } else if (scoreBreakdown.stopScore >= 20) {
      feedbackParts.push('Good stop placement near key levels.');
    } else {
      feedbackParts.push('Stop could be placed closer to recent support/resistance.');
    }

    const feedback = feedbackParts.join(' ');

    // Draw stop and target lines on chart
    const canvasId = state.canvasId;
    this.drawPriceLine(canvasId, stopLoss, '#ef4444', 'Stop: $' + stopLoss.toFixed(2));
    this.drawPriceLine(canvasId, takeProfit, '#10b981', 'Target: $' + takeProfit.toFixed(2));

    // Draw ideal levels faintly
    this.drawPriceLine(canvasId, scenario.idealStopLoss, 'rgba(239,68,68,0.35)', 'Ideal Stop');
    this.drawPriceLine(canvasId, scenario.idealTarget, 'rgba(16,185,129,0.35)', 'Ideal Target');

    // Draw score badge
    const ref = this._canvasRefs.get(canvasId);
    if (ref) {
      const { ctx, cssWidth, cssHeight } = ref;
      ctx.save();

      const badgeColor = totalScore >= 70 ? '#10b981' : totalScore >= 40 ? '#f59e0b' : '#ef4444';
      const badgeText = totalScore + '/100';

      ctx.fillStyle = badgeColor;
      ctx.globalAlpha = 0.9;
      ctx.font = 'bold 16px sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      const badgeX = cssWidth / 2;
      const badgeY = cssHeight * 0.10;
      const metrics = ctx.measureText(badgeText);
      const bw = metrics.width + 24;
      const bh = 28;
      ctx.beginPath();
      ctx.roundRect(badgeX - bw / 2, badgeY - bh / 2, bw, bh, 6);
      ctx.fill();

      ctx.fillStyle = '#ffffff';
      ctx.globalAlpha = 1;
      ctx.fillText(badgeText, badgeX, badgeY);
      ctx.restore();
    }

    // Dispatch game-result event
    document.dispatchEvent(new CustomEvent('game-result', {
      detail: {
        game: 'risk',
        correct: totalScore >= 60,
        score: totalScore
      }
    }));

    const result = {
      score: totalScore,
      feedback: feedback,
      details: {
        riskAmount: parseFloat(riskAmount.toFixed(2)),
        riskPercent: parseFloat(riskPercent.toFixed(2)),
        rrRatio: parseFloat(rrRatio.toFixed(2)),
        idealRisk: parseFloat(idealRiskAmount.toFixed(2)),
        idealPositionSize: idealPositionSize,
        idealStopLoss: scenario.idealStopLoss,
        idealTarget: scenario.idealTarget,
        scoreBreakdown: scoreBreakdown
      }
    };

    // Advance after delay
    this._setTimeout(() => {
      state.round++;
      if (state.round > state.totalRounds) {
        this.endGame('risk');
      } else {
        this.loadRiskRound(canvasId);
      }
    }, 3000);

    return result;
  }

  // ============================================
  // GAME COMPLETION
  // ============================================

  endGame(game) {
    let finalStats = null;

    if (game === 'prediction' && this.predictionState) {
      const s = this.predictionState;
      finalStats = {
        game: 'prediction',
        finalScore: s.score,
        totalRounds: s.totalRounds,
        correctRounds: s.score,
        bestStreak: s.bestStreak,
        results: s.results
      };
      this.predictionState = null;
    } else if (game === 'pattern' && this.patternState) {
      const s = this.patternState;
      finalStats = {
        game: 'pattern',
        finalScore: s.score,
        totalRounds: s.totalRounds,
        correctRounds: s.score,
        results: s.results
      };
      this.patternState = null;
    } else if (game === 'risk' && this.riskState) {
      const s = this.riskState;
      const avgScore = s.results.length > 0
        ? Math.round(s.results.reduce((sum, r) => sum + r.score, 0) / s.results.length)
        : 0;
      finalStats = {
        game: 'risk',
        finalScore: s.score,
        totalRounds: s.totalRounds,
        correctRounds: s.results.filter(r => r.score >= 60).length,
        averageScore: avgScore,
        results: s.results
      };
      this.riskState = null;
    }

    if (finalStats) {
      document.dispatchEvent(new CustomEvent('game-over', {
        detail: finalStats
      }));
    }

    return finalStats;
  }

  // ============================================
  // UTILITIES
  // ============================================

  destroy() {
    // Clear all timeouts
    for (const id of this._timeouts) {
      clearTimeout(id);
    }
    this._timeouts = [];

    // Cancel all animation frames
    for (const id of this._animationFrames) {
      cancelAnimationFrame(id);
    }
    this._animationFrames = [];

    // Clear canvas refs
    this._canvasRefs.clear();

    // Reset game states
    this.predictionState = null;
    this.patternState = null;
    this.riskState = null;
  }
}

window.MarketSimulator = MarketSimulator;
