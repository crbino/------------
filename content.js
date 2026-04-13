// ============================================================
// Educational Content — 4 levels, 40 in-depth lessons
// ============================================================
window.CONTENT = [

// ████████████████████████████████████████████████████████████
//  LEVEL 1 — BEGINNER
// ████████████████████████████████████████████████████████████
{
  id: 'beginner',
  name: 'Beginner',
  subtitle: 'Master the Fundamentals',
  description: 'Build a rock-solid foundation. Learn what day trading actually is, how markets work, the terminology every trader must know, and the essential rules that keep you in the game.',
  color: '#10b981',
  accentColor: '#059669',
  lessons: [

// ── B1: What is Day Trading? ──
{
  id: 'what-is-day-trading',
  title: 'What is Day Trading?',
  subtitle: 'Understand the profession before you enter it',
  duration: '12 min',
  sections: [
    {
      title: 'Day Trading Defined',
      type: 'text',
      content: '<p>Day trading is the practice of buying and selling financial instruments — stocks, options, futures, or currencies — within the <strong>same trading day</strong>. Every position is opened and closed before the market closes so that no capital is exposed to overnight risk.</p>' +
        '<p>Unlike investing, where you hold assets for months or years, day trading focuses on profiting from <strong>short-term price fluctuations</strong> that occur throughout the trading session. A day trader might hold a position for seconds (scalping), minutes, or hours, but never overnight.</p>' +
        '<p>The U.S. stock market is open from <strong>9:30 AM to 4:00 PM Eastern Time</strong>, Monday through Friday. Most day trading activity — and the best opportunities — occur in the first and last hours of the session, known as the <strong>opening range</strong> and the <strong>power hour</strong>.</p>'
    },
    {
      title: 'Day Trading vs. Other Styles',
      type: 'key-points',
      content: '<ul>' +
        '<li><strong>Scalping</strong> — Holding for seconds to a few minutes. Targets tiny moves (a few cents per share) but takes many trades per day. Requires lightning-fast execution and tight spreads.</li>' +
        '<li><strong>Day Trading</strong> — Holding for minutes to hours. Targets intraday moves of 1-5%. Closes all positions by end of day.</li>' +
        '<li><strong>Swing Trading</strong> — Holding for days to weeks. Targets multi-day trends. Accepts overnight risk.</li>' +
        '<li><strong>Position Trading</strong> — Holding for weeks to months. Based on fundamental analysis and longer-term trends.</li>' +
        '<li><strong>Investing</strong> — Holding for months to years. Focused on company growth, dividends, and long-term wealth building.</li>' +
        '</ul>' +
        '<p>Day trading is unique because it eliminates overnight gap risk, but it demands the most active screen time and mental energy during market hours.</p>'
    },
    {
      title: 'Who Day Trades?',
      type: 'text',
      content: '<p>Day traders range from individual retail traders working from home to professionals at proprietary trading firms. Successful day traders typically share several traits:</p>' +
        '<ul><li><strong>Discipline</strong> — They follow their trading plan even when emotions run high.</li>' +
        '<li><strong>Risk awareness</strong> — They know their maximum loss before entering any trade.</li>' +
        '<li><strong>Continuous learning</strong> — Markets evolve, and traders must adapt.</li>' +
        '<li><strong>Emotional control</strong> — They do not chase losses or let wins turn into greed.</li></ul>' +
        '<p>According to various studies, roughly <strong>80-90% of day traders lose money</strong>, especially in their first year. This is not meant to discourage you — it is meant to set realistic expectations. The traders who survive and thrive are the ones who treat it as a serious business, not a gamble.</p>'
    },
    {
      title: 'The Pattern Day Trader Rule',
      type: 'warning',
      content: '<p>In the United States, FINRA enforces the <strong>Pattern Day Trader (PDT) rule</strong>. If you execute <strong>4 or more day trades within 5 business days</strong> in a margin account, you are classified as a pattern day trader and must maintain a minimum account balance of <strong>$25,000</strong>.</p>' +
        '<p>If your account drops below $25,000, you will receive a margin call and be restricted from day trading until the balance is restored.</p>' +
        '<p><strong>Ways to work around the PDT rule:</strong></p>' +
        '<ul><li>Fund your account with at least $25,000.</li>' +
        '<li>Use a cash account (no margin) — you can make unlimited day trades but must wait for settlement (T+1 for stocks).</li>' +
        '<li>Trade futures or forex, which are not subject to the PDT rule.</li>' +
        '<li>Use an offshore broker (higher risk, less regulatory protection).</li></ul>'
    }
  ],
  quiz: [
    { question: 'What defines a "day trade"?', options: ['Buying a stock and holding for one week','Buying and selling the same security within the same trading day','Only trading during the morning session','Trading at least 10 times per day'], correct: 1, explanation: 'A day trade is any trade where a position is opened and closed within the same trading day, regardless of how many trades you make.' },
    { question: 'What is the minimum account balance required for a Pattern Day Trader?', options: ['$5,000','$10,000','$25,000','$50,000'], correct: 2, explanation: 'FINRA requires pattern day traders to maintain at least $25,000 in their margin account at all times.' },
    { question: 'Which trading style holds positions for seconds to minutes targeting tiny moves?', options: ['Swing trading','Position trading','Scalping','Investing'], correct: 2, explanation: 'Scalping involves extremely short-duration trades targeting small price movements, often just a few cents per share.' },
    { question: 'What percentage of day traders are estimated to lose money?', options: ['10-20%','30-40%','50-60%','80-90%'], correct: 3, explanation: 'Studies consistently show that 80-90% of day traders lose money, particularly in their first year. Proper education and risk management are essential.' }
  ]
},

// ── B2: Markets & Exchanges ──
{
  id: 'markets-and-exchanges',
  title: 'Markets & Exchanges',
  subtitle: 'Where and when trading happens',
  duration: '14 min',
  sections: [
    {
      title: 'Major Stock Exchanges',
      type: 'text',
      content: '<p>When you place a trade, your order is routed to an <strong>exchange</strong> — a marketplace where buyers and sellers meet electronically. The two most important U.S. stock exchanges are:</p>' +
        '<ul><li><strong>NYSE (New York Stock Exchange)</strong> — The oldest and largest stock exchange in the world by market capitalization. Lists blue-chip companies like Apple, Walmart, and JPMorgan.</li>' +
        '<li><strong>NASDAQ</strong> — An all-electronic exchange known for its technology-heavy listings. Home to companies like Microsoft, Amazon, Tesla, and Meta.</li></ul>' +
        '<p>Other important venues include <strong>CBOE</strong> (options), <strong>CME Group</strong> (futures), and various <strong>ECNs</strong> (Electronic Communication Networks) like ARCA and BATS that handle a large portion of order flow.</p>'
    },
    {
      title: 'Market Hours & Sessions',
      type: 'key-points',
      content: '<ul>' +
        '<li><strong>Pre-Market</strong>: 4:00 AM - 9:30 AM ET — Lower volume, wider spreads. Reacts to overnight news and earnings.</li>' +
        '<li><strong>Regular Session</strong>: 9:30 AM - 4:00 PM ET — This is where the vast majority of volume and liquidity exists. Day traders focus here.</li>' +
        '<li><strong>After-Hours</strong>: 4:00 PM - 8:00 PM ET — Similar to pre-market with lower volume. Earnings reactions often begin here.</li></ul>' +
        '<p>The <strong>opening 30 minutes</strong> (9:30-10:00 AM) are typically the most volatile. The <strong>lunch hour</strong> (12:00-1:00 PM) tends to be quieter. The <strong>last hour</strong> (3:00-4:00 PM) sees a pickup as institutional traders make end-of-day decisions.</p>'
    },
    {
      title: 'What Can You Day Trade?',
      type: 'text',
      content: '<p>Day traders can trade many types of financial instruments:</p>' +
        '<ul><li><strong>Stocks</strong> — Shares of individual companies. Most popular for beginners. Subject to PDT rules.</li>' +
        '<li><strong>ETFs</strong> — Exchange-traded funds like SPY (S&P 500), QQQ (Nasdaq 100). Trade like stocks but represent baskets of assets.</li>' +
        '<li><strong>Options</strong> — Contracts giving you the right to buy/sell a stock at a certain price. Higher risk, higher potential return. Require specialized knowledge.</li>' +
        '<li><strong>Futures</strong> — Contracts to buy/sell an asset at a future date. E-mini S&P 500 (ES) and Micro E-mini (MES) are popular. No PDT rule, trade nearly 24 hours.</li>' +
        '<li><strong>Forex</strong> — Currency pairs like EUR/USD. 24-hour market (Sunday-Friday). High leverage available.</li></ul>'
    }
  ],
  quiz: [
    { question: 'Which exchange is known for being technology-heavy?', options: ['NYSE','NASDAQ','CBOE','CME'], correct: 1, explanation: 'NASDAQ is known for its technology listings including Microsoft, Amazon, and Tesla.' },
    { question: 'When is the regular U.S. stock market session?', options: ['8:00 AM - 3:00 PM ET','9:30 AM - 4:00 PM ET','9:00 AM - 4:30 PM ET','10:00 AM - 5:00 PM ET'], correct: 1, explanation: 'The regular U.S. stock market session runs from 9:30 AM to 4:00 PM Eastern Time.' },
    { question: 'Which instrument is NOT subject to the Pattern Day Trader rule?', options: ['Stocks','ETFs','Futures','All are subject to PDT'], correct: 2, explanation: 'Futures are regulated by the CFTC, not FINRA, and are not subject to the PDT rule. This makes them popular with traders who have accounts under $25,000.' }
  ]
},

// ── B3: Essential Terminology ──
{
  id: 'essential-terminology',
  title: 'Essential Terminology',
  subtitle: 'The language of the trading floor',
  duration: '15 min',
  sections: [
    {
      title: 'Price & Quote Terms',
      type: 'definition',
      content: '<ul>' +
        '<li><strong>Bid</strong> — The highest price a buyer is willing to pay right now. This is the price you receive if you sell instantly (market sell).</li>' +
        '<li><strong>Ask (Offer)</strong> — The lowest price a seller is willing to accept right now. This is the price you pay if you buy instantly (market buy).</li>' +
        '<li><strong>Spread</strong> — The difference between bid and ask. A stock with a bid of $100.00 and ask of $100.02 has a $0.02 spread. Tighter spreads mean more liquid stocks.</li>' +
        '<li><strong>Last Price</strong> — The price at which the most recent trade executed.</li>' +
        '<li><strong>OHLC</strong> — Open, High, Low, Close — the four price points that define a single candlestick or bar on a chart.</li>' +
        '<li><strong>Tick</strong> — The minimum price movement of a security. For most stocks, 1 tick = $0.01.</li></ul>'
    },
    {
      title: 'Position & Trade Terms',
      type: 'definition',
      content: '<ul>' +
        '<li><strong>Long</strong> — Buying a stock expecting it to go UP. You profit when price rises. "Going long" = buying.</li>' +
        '<li><strong>Short (Short Selling)</strong> — Selling borrowed shares expecting the price to go DOWN. You profit when price falls. You must buy them back (cover) to close.</li>' +
        '<li><strong>Entry</strong> — The price at which you open a position.</li>' +
        '<li><strong>Exit</strong> — The price at which you close a position.</li>' +
        '<li><strong>Stop Loss</strong> — A preset price at which you will exit to limit your loss.</li>' +
        '<li><strong>Take Profit (Target)</strong> — A preset price at which you will exit to lock in gains.</li>' +
        '<li><strong>Position Size</strong> — How many shares or contracts you buy or sell.</li>' +
        '<li><strong>Breakout</strong> — When price moves above resistance or below support with conviction.</li>' +
        '<li><strong>Breakdown</strong> — When price breaks below a support level.</li>' +
        '<li><strong>Pullback</strong> — A temporary move against the prevailing trend before it continues.</li></ul>'
    },
    {
      title: 'Market Context Terms',
      type: 'definition',
      content: '<ul>' +
        '<li><strong>Volume</strong> — The number of shares traded during a given period. High volume = more interest and liquidity.</li>' +
        '<li><strong>Liquidity</strong> — How easily you can buy or sell without significantly affecting the price. Liquid stocks have tight spreads and high volume.</li>' +
        '<li><strong>Volatility</strong> — How much and how quickly price moves. Day traders need volatility to profit.</li>' +
        '<li><strong>Float</strong> — The number of shares available for public trading. Low float stocks (under 10M shares) tend to be more volatile.</li>' +
        '<li><strong>Market Cap</strong> — Total value of a company = share price x total shares outstanding. Large cap (>$10B), Mid cap ($2B-$10B), Small cap (<$2B), Micro cap (<$300M).</li>' +
        '<li><strong>Catalyst</strong> — News or events that cause significant price movement: earnings reports, FDA approvals, analyst upgrades, etc.</li>' +
        '<li><strong>Gap Up / Gap Down</strong> — When a stock opens significantly higher or lower than the previous close, creating a "gap" on the chart.</li></ul>'
    }
  ],
  quiz: [
    { question: 'What is the "spread" on a stock?', options: ['The daily price range','The difference between bid and ask price','The distance between support and resistance','The average daily volume'], correct: 1, explanation: 'The spread is the difference between the bid (best buy price) and ask (best sell price). It represents a small cost of entering and exiting trades.' },
    { question: 'If you believe a stock will go DOWN, what position do you take?', options: ['Long','Short','Neutral','Covered call'], correct: 1, explanation: 'Short selling means you borrow shares, sell them at the current price, and aim to buy them back at a lower price for a profit.' },
    { question: 'What does "float" refer to?', options: ['The total number of shares a company has issued','The number of shares available for public trading','The amount of cash in your trading account','The spread between bid and ask'], correct: 1, explanation: 'Float is the number of shares available for public trading. Low float stocks can be more volatile because fewer shares are available, so big orders move price more.' },
    { question: 'What is a "catalyst" in trading?', options: ['A type of trading order','A chart pattern','News or events that cause significant price movement','A technical indicator'], correct: 2, explanation: 'Catalysts are events like earnings reports, FDA approvals, or major news that drive significant price movement and create trading opportunities.' }
  ]
},

// ── B4: Types of Orders ──
{
  id: 'types-of-orders',
  title: 'Types of Orders',
  subtitle: 'How to enter and exit the market precisely',
  duration: '13 min',
  sections: [
    {
      title: 'Market Orders',
      type: 'text',
      content: '<p>A <strong>market order</strong> tells your broker to execute your buy or sell <strong>immediately at the best available price</strong>. It guarantees execution but not price.</p>' +
        '<p><strong>Pros:</strong> Instant fill — you get in or out right away.</p>' +
        '<p><strong>Cons:</strong> On volatile or illiquid stocks, you may experience <strong>slippage</strong> — the actual fill price may be worse than expected. If a stock has a bid of $50.00 and an ask of $50.10, your market buy fills at $50.10.</p>' +
        '<p><strong>When to use:</strong> When you need to get in or out urgently, and the stock is liquid enough that slippage is minimal.</p>'
    },
    {
      title: 'Limit Orders',
      type: 'text',
      content: '<p>A <strong>limit order</strong> sets the <strong>maximum price</strong> you are willing to pay (buy limit) or the <strong>minimum price</strong> you are willing to accept (sell limit). It guarantees price but not execution.</p>' +
        '<p><strong>Buy Limit:</strong> "Buy 100 shares at $49.50 or better." Your order only fills if the ask drops to $49.50 or below.</p>' +
        '<p><strong>Sell Limit:</strong> "Sell 100 shares at $50.50 or better." Your order only fills if the bid rises to $50.50 or above.</p>' +
        '<p><strong>Pros:</strong> You control the exact price you pay or receive. No slippage.</p>' +
        '<p><strong>Cons:</strong> Your order may never fill if price doesn\'t reach your limit.</p>' +
        '<p><strong>When to use:</strong> When you want to enter at a specific price level (like a support bounce) or exit at a specific target.</p>'
    },
    {
      title: 'Stop Orders & Stop-Limit Orders',
      type: 'text',
      content: '<p>A <strong>stop order</strong> (stop-loss) becomes a market order when a specified price (the "stop price") is reached. It is your safety net.</p>' +
        '<p><strong>Example:</strong> You buy at $50.00 and set a stop at $49.00. If price drops to $49.00, your stop triggers and becomes a market sell, getting you out near $49.00.</p>' +
        '<p>A <strong>stop-limit order</strong> becomes a limit order (instead of a market order) when triggered. This gives you price protection but risks not getting filled in a fast-moving market.</p>' +
        '<p><strong>Trailing Stop:</strong> A stop that moves with the price. "Trailing $1.00" means your stop is always $1.00 below the highest price reached. If the stock goes from $50 to $55, your stop moves from $49 to $54 automatically.</p>'
    },
    {
      title: 'Time-in-Force Options',
      type: 'tip',
      content: '<p>Every order has a time-in-force (TIF) setting that determines how long it stays active:</p>' +
        '<ul><li><strong>DAY</strong> — The order expires at market close if not filled. Most common for day traders.</li>' +
        '<li><strong>GTC (Good Till Cancelled)</strong> — Stays active until filled or manually cancelled (up to 60-90 days depending on broker).</li>' +
        '<li><strong>IOC (Immediate or Cancel)</strong> — Fills what it can immediately, cancels the rest.</li>' +
        '<li><strong>FOK (Fill or Kill)</strong> — Must fill the entire order immediately or cancel completely.</li></ul>' +
        '<p>Day traders almost always use <strong>DAY</strong> orders to ensure nothing carries over accidentally.</p>'
    }
  ],
  quiz: [
    { question: 'Which order type guarantees execution but not price?', options: ['Limit order','Market order','Stop-limit order','GTC order'], correct: 1, explanation: 'A market order executes immediately at the best available price, guaranteeing you get filled but not at what exact price.' },
    { question: 'What happens when a stop order is triggered?', options: ['It becomes a limit order','It becomes a market order','It cancels automatically','It extends to the next trading day'], correct: 1, explanation: 'When a stop order\'s trigger price is reached, it converts into a market order and fills at the next available price.' },
    { question: 'What is "slippage"?', options: ['When your order is cancelled','The delay between placing and executing an order','The difference between expected and actual fill price','The spread between bid and ask'], correct: 2, explanation: 'Slippage occurs when the actual fill price differs from the expected price, typically during fast-moving or illiquid market conditions.' }
  ]
},

// ── B5: Reading Basic Charts ──
{
  id: 'reading-basic-charts',
  title: 'Reading Basic Charts',
  subtitle: 'Interpret price action visually',
  duration: '14 min',
  sections: [
    {
      title: 'Candlestick Charts',
      type: 'text',
      content: '<p>The <strong>candlestick chart</strong> is the most widely used chart type in day trading. Each candle represents price action over a fixed time period (1 minute, 5 minutes, 1 hour, etc.) and shows four data points:</p>' +
        '<ul><li><strong>Open</strong> — The first price traded in that period.</li>' +
        '<li><strong>High</strong> — The highest price reached.</li>' +
        '<li><strong>Low</strong> — The lowest price reached.</li>' +
        '<li><strong>Close</strong> — The last price traded in that period.</li></ul>' +
        '<p>The thick part of the candle is the <strong>body</strong> (distance between open and close). The thin lines above and below are <strong>wicks</strong> (or shadows).</p>' +
        '<p><strong>Green/White candle</strong>: Close > Open (price went up). <strong>Red/Black candle</strong>: Close < Open (price went down).</p>'
    },
    {
      title: 'Timeframes',
      type: 'key-points',
      content: '<p>The timeframe you choose determines how much data each candle represents:</p>' +
        '<ul><li><strong>1-minute chart</strong> — Each candle = 1 minute. Maximum detail, lots of noise. Used by scalpers.</li>' +
        '<li><strong>5-minute chart</strong> — Most popular for day trading. Good balance of detail and clarity.</li>' +
        '<li><strong>15-minute chart</strong> — Good for identifying intraday trends. Less noise.</li>' +
        '<li><strong>1-hour chart</strong> — Shows the bigger intraday picture.</li>' +
        '<li><strong>Daily chart</strong> — Each candle = 1 full trading day. Used to identify key support/resistance levels for day trades.</li></ul>' +
        '<p>Most day traders use a <strong>primary timeframe</strong> (e.g., 5-minute) for trade decisions and a <strong>higher timeframe</strong> (e.g., 15-minute or daily) for context.</p>'
    },
    {
      title: 'Support and Resistance Basics',
      type: 'text',
      content: '<p><strong>Support</strong> is a price level where buying interest is strong enough to prevent the price from falling further. Think of it as a "floor."</p>' +
        '<p><strong>Resistance</strong> is a price level where selling interest is strong enough to prevent the price from rising further. Think of it as a "ceiling."</p>' +
        '<p>These levels form because of <strong>market memory</strong> — traders remember where price has reversed before and place orders there. The more times a level is tested and holds, the stronger it becomes.</p>' +
        '<p>When support breaks, it often becomes resistance (and vice versa). This is called a <strong>role reversal</strong> or <strong>polarity change</strong>.</p>'
    }
  ],
  quiz: [
    { question: 'What does a green (bullish) candlestick indicate?', options: ['Price closed lower than it opened','Price closed higher than it opened','Volume increased','The stock hit a new high'], correct: 1, explanation: 'A green/white candle means the close is higher than the open, indicating buying pressure pushed prices up during that period.' },
    { question: 'Which timeframe is most popular for stock day trading?', options: ['1-minute','5-minute','1-hour','Daily'], correct: 1, explanation: 'The 5-minute chart is the most popular timeframe for day trading because it balances detail with noise reduction.' },
    { question: 'What happens when a support level is broken?', options: ['It disappears permanently','It often becomes a resistance level','Trading halts','Volume always increases'], correct: 1, explanation: 'When support breaks, it frequently becomes resistance. This "role reversal" is a key concept in technical analysis.' }
  ]
},

// ── B6: Understanding Volume ──
{
  id: 'understanding-volume',
  title: 'Understanding Volume',
  subtitle: 'Volume confirms everything',
  duration: '10 min',
  sections: [
    {
      title: 'What Volume Tells You',
      type: 'text',
      content: '<p><strong>Volume</strong> is the number of shares (or contracts) traded during a given period. It is the single most important confirmation tool in technical analysis.</p>' +
        '<p>Price shows you <em>where</em> the market is going. Volume shows you <em>how many participants agree</em> with that direction.</p>' +
        '<ul><li><strong>High volume + price move</strong> = conviction. The move is likely real and may continue.</li>' +
        '<li><strong>Low volume + price move</strong> = suspicion. The move may reverse because few participants are driving it.</li>' +
        '<li><strong>High volume + no price move</strong> = accumulation or distribution. Big players are building or exiting positions quietly.</li></ul>'
    },
    {
      title: 'Relative Volume (RVOL)',
      type: 'tip',
      content: '<p><strong>Relative Volume</strong> compares current volume to the stock\'s average volume. An RVOL of 2.0 means the stock is trading at <strong>twice its normal volume</strong>.</p>' +
        '<p>Day traders look for stocks with RVOL of <strong>1.5x or higher</strong> because above-average volume means more liquidity, tighter spreads, and more predictable price action.</p>' +
        '<p>Most scanners (Trade Ideas, Finviz, ThinkorSwim) let you filter by RVOL. This is one of the best filters for finding actionable day trading setups.</p>'
    }
  ],
  quiz: [
    { question: 'What does high volume during a price breakout indicate?', options: ['The breakout is likely false','The breakout has conviction and may continue','Volume does not affect breakouts','The stock is about to reverse'], correct: 1, explanation: 'High volume during a breakout indicates strong participation and conviction. It confirms that many traders agree with the direction, making the breakout more likely to continue.' },
    { question: 'What is a good RVOL threshold for day trading?', options: ['0.5x or higher','1.0x or higher','1.5x or higher','5.0x or higher'], correct: 2, explanation: 'An RVOL of 1.5x or higher means the stock is trading at 50% above its average volume, indicating elevated interest and better trading conditions.' }
  ]
},

// ── B7: Your First Trading Setup ──
{
  id: 'first-trading-setup',
  title: 'Your First Trading Setup',
  subtitle: 'Tools and technology you need',
  duration: '12 min',
  sections: [
    {
      title: 'Choosing a Broker',
      type: 'text',
      content: '<p>Your broker is your gateway to the market. For day trading, you need:</p>' +
        '<ul><li><strong>Fast execution</strong> — Milliseconds matter. Your broker should route orders quickly and reliably.</li>' +
        '<li><strong>Low or zero commissions</strong> — Most brokers now offer commission-free stock trading (Webull, TD Ameritrade, Interactive Brokers Lite).</li>' +
        '<li><strong>A quality trading platform</strong> — You need real-time charts, Level 2 data, hotkeys, and fast order entry.</li>' +
        '<li><strong>Reliable infrastructure</strong> — Downtime during market hours is unacceptable.</li></ul>' +
        '<p><strong>Popular brokers for day traders:</strong> Interactive Brokers (best execution), TD Ameritrade / ThinkorSwim (best free platform), Webull (beginner-friendly), TradeStation (advanced tools).</p>'
    },
    {
      title: 'Essential Tools',
      type: 'key-points',
      content: '<ul>' +
        '<li><strong>Charting platform</strong> — TradingView is excellent for beginners. Most brokers also include their own charts.</li>' +
        '<li><strong>Stock scanner</strong> — Finds stocks meeting your criteria (gap up, high volume, etc.). Built into most platforms or use Trade Ideas / Finviz.</li>' +
        '<li><strong>News feed</strong> — Benzinga Pro, Twitter/X, or your broker\'s news feed. Catalysts drive price.</li>' +
        '<li><strong>Level 2 / Time & Sales</strong> — Shows the order book and real-time trades. Essential for reading supply/demand.</li>' +
        '<li><strong>Reliable internet</strong> — Wired connection preferred. A backup mobile hotspot is wise.</li>' +
        '<li><strong>Multiple monitors</strong> — Not required but helpful. One for charts, one for scanners/news.</li></ul>'
    }
  ],
  quiz: [
    { question: 'What is the most important feature of a day trading broker?', options: ['Lowest commissions','Best mobile app','Fast and reliable execution','Most available stocks'], correct: 2, explanation: 'While low commissions matter, execution speed and reliability are the most critical factors for day trading since milliseconds can affect your fills.' },
    { question: 'What tool helps you find stocks that meet specific criteria each morning?', options: ['Level 2','Stock scanner','News feed','Charting platform'], correct: 1, explanation: 'Stock scanners filter the entire market to find stocks matching your criteria (volume, price, gap %, etc.), helping you identify opportunities quickly.' }
  ]
},

// ── B8: Basic Risk Rules ──
{
  id: 'basic-risk-rules',
  title: 'Basic Risk Rules',
  subtitle: 'Survive first, profit second',
  duration: '11 min',
  sections: [
    {
      title: 'The 1% Rule',
      type: 'warning',
      content: '<p>The most fundamental rule of trading: <strong>never risk more than 1-2% of your total account on a single trade</strong>.</p>' +
        '<p>If your account is $25,000 and you risk 1% per trade, your maximum loss per trade is $250. This means even a string of 10 losing trades in a row only costs you 10% of your account.</p>' +
        '<p>Without this rule, a few bad trades can wipe out your account. <strong>Capital preservation is job #1.</strong></p>' +
        '<p>Calculate risk BEFORE entering: <em>Risk = Position Size × (Entry Price - Stop Loss Price)</em></p>'
    },
    {
      title: 'Risk-to-Reward Ratio',
      type: 'text',
      content: '<p>The <strong>risk-to-reward ratio (R:R)</strong> compares how much you stand to lose versus how much you stand to gain on a trade.</p>' +
        '<p><strong>Example:</strong> You buy at $50.00, set a stop at $49.00 (risk $1.00), and a target at $52.00 (reward $2.00). Your R:R is 1:2.</p>' +
        '<p>With a 1:2 R:R, you only need to be right <strong>34% of the time</strong> to break even. With a 1:3 R:R, you only need to be right <strong>25% of the time</strong>.</p>' +
        '<p>Professional day traders aim for a minimum of <strong>1:2 R:R</strong> on every trade. This gives you a mathematical edge even with a modest win rate.</p>'
    },
    {
      title: 'Daily Stop Loss',
      type: 'tip',
      content: '<p>Set a <strong>daily maximum loss</strong> — the point at which you stop trading for the day, no exceptions. A good starting point is <strong>3% of your account</strong>.</p>' +
        '<p>If you lose 3 trades in a row, your judgment and emotions are likely compromised. Continuing to trade in this state almost always leads to bigger losses (called <strong>revenge trading</strong>).</p>' +
        '<p>Hit your daily max? Close your platform. Go for a walk. There will always be another trading day.</p>'
    }
  ],
  quiz: [
    { question: 'What is the maximum percentage of your account you should risk on a single trade?', options: ['5-10%','3-4%','1-2%','0.1%'], correct: 2, explanation: 'The industry standard is to risk no more than 1-2% of your total account on any single trade. This ensures you can survive losing streaks.' },
    { question: 'With a 1:3 risk-to-reward ratio, what win rate do you need to break even?', options: ['50%','33%','25%','10%'], correct: 2, explanation: 'With 1:3 R:R, for every $1 risked you gain $3. So in 4 trades: 3 losses × $1 = $3 lost, 1 win × $3 = $3 gained. That is 25% win rate to break even.' },
    { question: 'What should you do if you hit your daily maximum loss?', options: ['Double your position size to recover','Switch to a different market','Stop trading for the day','Remove your stop losses'], correct: 2, explanation: 'When you hit your daily max loss, you must stop trading. Continuing to trade after significant losses typically leads to emotional, revenge trading and even bigger losses.' }
  ]
}

  ] // end beginner lessons
},

// ████████████████████████████████████████████████████████████
//  LEVEL 2 — INTERMEDIATE
// ████████████████████████████████████████████████████████████
{
  id: 'intermediate',
  name: 'Intermediate',
  subtitle: 'Technical Analysis & Strategy',
  description: 'Dive into candlestick patterns, indicators, chart patterns, and risk management. Learn to build a real trading plan and the psychology behind consistent execution.',
  color: '#3b82f6',
  accentColor: '#2563eb',
  lessons: [

// ── I1: Candlestick Patterns ──
{
  id: 'candlestick-patterns',
  title: 'Candlestick Patterns',
  subtitle: 'Read the story each candle tells',
  duration: '18 min',
  sections: [
    {
      title: 'Single Candle Patterns',
      type: 'text',
      content: '<p>Individual candlesticks reveal the balance of power between buyers and sellers during a period:</p>' +
        '<ul><li><strong>Doji</strong> — Open and close are nearly identical, creating a cross shape. Indicates indecision. After a trend, it signals potential reversal.</li>' +
        '<li><strong>Hammer</strong> — Small body at the top, long lower wick (2x+ body length), little or no upper wick. Found at the bottom of downtrends, it shows buyers stepped in aggressively. Bullish reversal signal.</li>' +
        '<li><strong>Shooting Star</strong> — Small body at the bottom, long upper wick. Found at the top of uptrends. Shows sellers rejected higher prices. Bearish reversal signal.</li>' +
        '<li><strong>Marubozu</strong> — Full body with no wicks. A green marubozu (open = low, close = high) shows total buyer control. A red marubozu shows total seller control.</li>' +
        '<li><strong>Spinning Top</strong> — Small body with roughly equal upper and lower wicks. Similar to a doji but with a slightly larger body. Indicates indecision.</li></ul>'
    },
    {
      title: 'Multi-Candle Patterns',
      type: 'text',
      content: '<ul><li><strong>Engulfing Pattern</strong> — A large candle that completely "engulfs" the previous candle\'s body. A bullish engulfing (green engulfs red) at support suggests reversal up. A bearish engulfing (red engulfs green) at resistance suggests reversal down.</li>' +
        '<li><strong>Morning Star</strong> — Three candles: (1) large red, (2) small-bodied candle that gaps down (the "star"), (3) large green that closes above the midpoint of candle 1. Strong bullish reversal.</li>' +
        '<li><strong>Evening Star</strong> — The opposite: (1) large green, (2) small-bodied gap up, (3) large red closing below midpoint of candle 1. Strong bearish reversal.</li>' +
        '<li><strong>Three White Soldiers</strong> — Three consecutive green candles with progressively higher closes. Strong bullish continuation.</li>' +
        '<li><strong>Three Black Crows</strong> — Three consecutive red candles with progressively lower closes. Strong bearish continuation.</li>' +
        '<li><strong>Harami</strong> — A small candle contained within the body of the prior larger candle. The "inside bar" — indicates consolidation before the next move.</li></ul>'
    },
    {
      title: 'Context is Everything',
      type: 'warning',
      content: '<p>Candlestick patterns alone are <strong>not</strong> buy/sell signals. They must be interpreted in context:</p>' +
        '<ul><li>A hammer at a <strong>key support level</strong> is meaningful. A hammer in the middle of nowhere is noise.</li>' +
        '<li>Patterns on <strong>higher timeframes</strong> (daily, hourly) are more reliable than on lower timeframes (1-minute).</li>' +
        '<li><strong>Volume confirmation</strong> strengthens any pattern. A bullish engulfing on high volume is far more significant than one on low volume.</li>' +
        '<li>Always consider the <strong>broader trend</strong>. Reversal patterns are most powerful when they appear after an extended trend.</li></ul>'
    }
  ],
  quiz: [
    { question: 'What does a Hammer candle at a support level indicate?', options: ['Bearish reversal','Bullish reversal','Continuation of the downtrend','No significance'], correct: 1, explanation: 'A hammer at support shows that buyers aggressively rejected lower prices (long lower wick), suggesting the downtrend may reverse.' },
    { question: 'What is a Bullish Engulfing pattern?', options: ['A red candle that engulfs a green candle','A green candle that completely engulfs the prior red candle body','Two equal-sized candles','A candle with no wicks'], correct: 1, explanation: 'A bullish engulfing occurs when a large green candle completely engulfs the body of the previous red candle, showing buyers have overwhelmed sellers.' },
    { question: 'Why should candlestick patterns be used with context?', options: ['They always work on their own','They are only valid on daily charts','They need context like support/resistance levels and volume to be reliable','They are outdated and no longer work'], correct: 2, explanation: 'Candlestick patterns are much more reliable when they occur at key levels with volume confirmation, rather than in isolation.' }
  ]
},

// ── I2: Support & Resistance Deep Dive ──
{
  id: 'support-resistance-deep',
  title: 'Support & Resistance Deep Dive',
  subtitle: 'Master the most important concept in trading',
  duration: '16 min',
  sections: [
    {
      title: 'Identifying Key Levels',
      type: 'text',
      content: '<p>Support and resistance levels are the <strong>backbone of all technical analysis</strong>. Here is how to find the strongest ones:</p>' +
        '<ul><li><strong>Previous highs and lows</strong> — Look at where price has reversed before. The more times price has bounced off a level, the stronger it is.</li>' +
        '<li><strong>Round numbers</strong> — Psychological levels like $100, $50, $200 act as natural support/resistance because traders place orders there.</li>' +
        '<li><strong>Gap levels</strong> — The top and bottom of gaps often act as support/resistance.</li>' +
        '<li><strong>Previous day\'s high, low, and close</strong> — These are watched by thousands of traders and algorithms daily.</li>' +
        '<li><strong>Pre-market high and low</strong> — Define the range before the opening bell.</li></ul>' +
        '<p><strong>Tip:</strong> The best levels are "confluent" — where multiple types of support/resistance overlap at the same price area.</p>'
    },
    {
      title: 'Trading Bounces and Breaks',
      type: 'example',
      content: '<p><strong>Trading a Bounce (Reversal):</strong></p>' +
        '<ol><li>Price approaches a known support/resistance level.</li>' +
        '<li>Look for a candlestick rejection pattern (hammer, shooting star, engulfing).</li>' +
        '<li>Enter in the direction of the bounce with a stop just beyond the level.</li>' +
        '<li>Target the next key level in the direction of your trade.</li></ol>' +
        '<p><strong>Trading a Break (Breakout):</strong></p>' +
        '<ol><li>Price approaches and tests a level multiple times.</li>' +
        '<li>Price breaks through decisively with increased volume.</li>' +
        '<li>Wait for a retest of the broken level (former support becomes resistance, or vice versa).</li>' +
        '<li>Enter on the retest with a stop back beyond the level.</li></ol>'
    }
  ],
  quiz: [
    { question: 'What makes a support/resistance level "stronger"?', options: ['It was identified recently','It has been tested and held multiple times','It is on a 1-minute chart','It is at a random price'], correct: 1, explanation: 'The more times a level is tested and holds, the stronger it becomes because more traders are aware of it and place orders there.' },
    { question: 'What is a "confluent" level?', options: ['A level that has broken recently','A level where multiple types of support/resistance overlap','A level only visible on weekly charts','A level with low volume'], correct: 1, explanation: 'Confluent levels are areas where multiple factors align (e.g., round number + previous high + gap level), making them very strong support/resistance zones.' }
  ]
},

// ── I3: Moving Averages ──
{
  id: 'moving-averages',
  title: 'Moving Averages',
  subtitle: 'Trend identification tools',
  duration: '15 min',
  sections: [
    {
      title: 'SMA vs EMA',
      type: 'text',
      content: '<p>Moving averages smooth out price data to reveal the underlying trend. The two main types:</p>' +
        '<p><strong>Simple Moving Average (SMA)</strong> — The average closing price over N periods. The 20-period SMA adds up the last 20 closes and divides by 20. Each period is weighted equally.</p>' +
        '<p><strong>Exponential Moving Average (EMA)</strong> — Gives more weight to recent prices, making it more responsive to current price action. The 9 EMA reacts faster than the 9 SMA.</p>' +
        '<p><strong>Key moving averages for day trading:</strong></p>' +
        '<ul><li><strong>9 EMA</strong> — Very short-term trend. Scalpers use this.</li>' +
        '<li><strong>20 EMA/SMA</strong> — Intraday trend direction. If price is above the 20, bias is bullish.</li>' +
        '<li><strong>50 SMA</strong> — Intermediate trend. Often acts as dynamic support/resistance on daily charts.</li>' +
        '<li><strong>200 SMA</strong> — Long-term trend. The "line in the sand" — above it is bullish, below is bearish.</li></ul>'
    },
    {
      title: 'Moving Average Strategies',
      type: 'example',
      content: '<p><strong>1. Moving Average Crossover:</strong> When a fast MA (e.g., 9 EMA) crosses above a slow MA (e.g., 20 EMA), it signals bullish momentum. When it crosses below, bearish. Known as a "golden cross" (bullish) or "death cross" (bearish) on daily charts.</p>' +
        '<p><strong>2. Moving Average Bounce:</strong> In an uptrend, price often pulls back to the 20 EMA and bounces. Enter long on the bounce with a stop below the MA.</p>' +
        '<p><strong>3. Moving Average as Dynamic Support/Resistance:</strong> Price tends to respect MAs, especially the 9, 20, and 200. Use them as zones to look for entries, not exact-to-the-penny levels.</p>'
    }
  ],
  quiz: [
    { question: 'What is the main difference between SMA and EMA?', options: ['SMA uses more data points','EMA gives more weight to recent prices','SMA is only for daily charts','There is no difference'], correct: 1, explanation: 'The EMA applies exponentially more weight to recent prices, making it react faster to current price changes than the equally-weighted SMA.' },
    { question: 'If price is above the 200 SMA, the general trend bias is:', options: ['Bearish','Neutral','Bullish','Impossible to determine'], correct: 2, explanation: 'The 200 SMA is the most widely watched long-term trend indicator. Price above it indicates a bullish trend, below it indicates bearish.' }
  ]
},

// ── I4: RSI & MACD ──
{
  id: 'rsi-and-macd',
  title: 'RSI & MACD',
  subtitle: 'Momentum and trend indicators',
  duration: '16 min',
  sections: [
    {
      title: 'Relative Strength Index (RSI)',
      type: 'text',
      content: '<p>The <strong>RSI</strong> is a momentum oscillator ranging from 0 to 100 that measures the speed and magnitude of recent price changes.</p>' +
        '<p><strong>Standard setting:</strong> 14 periods.</p>' +
        '<ul><li><strong>Above 70</strong> — Overbought. Price may be extended and due for a pullback.</li>' +
        '<li><strong>Below 30</strong> — Oversold. Price may be due for a bounce.</li>' +
        '<li><strong>50 line</strong> — The midpoint. Above 50 = bullish momentum, below 50 = bearish momentum.</li></ul>' +
        '<p><strong>RSI Divergence</strong> is one of the most powerful signals: if price makes a new high but RSI makes a lower high, the uptrend is weakening (bearish divergence). If price makes a new low but RSI makes a higher low, the downtrend is weakening (bullish divergence).</p>'
    },
    {
      title: 'MACD (Moving Average Convergence Divergence)',
      type: 'text',
      content: '<p>The <strong>MACD</strong> shows the relationship between two EMAs and helps identify trend direction, momentum, and potential reversals.</p>' +
        '<p><strong>Components:</strong></p>' +
        '<ul><li><strong>MACD Line</strong> — 12 EMA minus 26 EMA.</li>' +
        '<li><strong>Signal Line</strong> — 9-period EMA of the MACD line.</li>' +
        '<li><strong>Histogram</strong> — The difference between MACD and Signal lines. Shows momentum visually.</li></ul>' +
        '<p><strong>Signals:</strong></p>' +
        '<ul><li><strong>Bullish crossover</strong> — MACD crosses above the Signal line. Buy signal.</li>' +
        '<li><strong>Bearish crossover</strong> — MACD crosses below the Signal line. Sell signal.</li>' +
        '<li><strong>Histogram expansion</strong> — Momentum is increasing in that direction.</li>' +
        '<li><strong>Histogram contraction</strong> — Momentum is fading; potential reversal ahead.</li></ul>'
    }
  ],
  quiz: [
    { question: 'An RSI reading above 70 suggests the stock is:', options: ['Oversold','Overbought','In a downtrend','At fair value'], correct: 1, explanation: 'RSI above 70 indicates overbought conditions, meaning the stock may be extended and due for at least a pullback.' },
    { question: 'What does bearish RSI divergence look like?', options: ['Price and RSI both make new highs','Price makes a new high but RSI makes a lower high','Price and RSI both decline','RSI goes above 70'], correct: 1, explanation: 'Bearish divergence occurs when price makes a higher high but RSI makes a lower high, signaling weakening upward momentum.' }
  ]
},

// ── I5: Chart Patterns ──
{
  id: 'chart-patterns',
  title: 'Chart Patterns',
  subtitle: 'The geometry of price action',
  duration: '18 min',
  sections: [
    {
      title: 'Reversal Patterns',
      type: 'text',
      content: '<p>Reversal patterns signal that the current trend is likely to change direction:</p>' +
        '<ul><li><strong>Head & Shoulders</strong> — Three peaks: left shoulder, higher head, right shoulder. The "neckline" connects the two lows between the peaks. A break below the neckline confirms a bearish reversal. The measured move target = head height projected below the neckline.</li>' +
        '<li><strong>Inverse Head & Shoulders</strong> — The bullish mirror image. Three troughs with the middle being the lowest. Break above the neckline = bullish reversal.</li>' +
        '<li><strong>Double Top</strong> — Price hits resistance twice at nearly the same level and fails. Forms an "M" shape. Break below the middle trough confirms bearish reversal.</li>' +
        '<li><strong>Double Bottom</strong> — Price hits support twice. Forms a "W" shape. Break above the middle peak confirms bullish reversal.</li></ul>'
    },
    {
      title: 'Continuation Patterns',
      type: 'text',
      content: '<ul><li><strong>Bull Flag</strong> — A sharp move up (the pole) followed by a tight, slightly downward-sloping consolidation (the flag). Breakout above the flag continues the uptrend. Very common and reliable in day trading.</li>' +
        '<li><strong>Bear Flag</strong> — The opposite: sharp move down, slight upward-sloping consolidation, then breakdown continues the downtrend.</li>' +
        '<li><strong>Ascending Triangle</strong> — Higher lows with a flat resistance top. Typically breaks out to the upside.</li>' +
        '<li><strong>Descending Triangle</strong> — Lower highs with flat support. Typically breaks down.</li>' +
        '<li><strong>Symmetrical Triangle</strong> — Both support and resistance converge. Can break either way — wait for confirmation.</li>' +
        '<li><strong>Cup & Handle</strong> — A rounded bottom (cup) followed by a small pullback (handle). Breakout above the rim of the cup is the entry. Measured move = depth of the cup.</li></ul>'
    }
  ],
  quiz: [
    { question: 'What pattern has a sharp upward move followed by a downward-sloping consolidation?', options: ['Head & Shoulders','Bear Flag','Bull Flag','Double Bottom'], correct: 2, explanation: 'A bull flag is a continuation pattern with a sharp move up (pole) followed by a tight, downward-sloping consolidation (flag) before the uptrend continues.' },
    { question: 'How is a Head & Shoulders measured move target calculated?', options: ['Twice the width of the pattern','The height of the head projected below the neckline','The average of all three peaks','The distance from right shoulder to neckline'], correct: 1, explanation: 'The measured move target is calculated by taking the distance from the neckline to the top of the head, then projecting that distance downward from the neckline break.' }
  ]
},

// ── I6: Position Sizing ──
{
  id: 'position-sizing',
  title: 'Position Sizing',
  subtitle: 'The math that keeps you alive',
  duration: '14 min',
  sections: [
    {
      title: 'Calculating Position Size',
      type: 'text',
      content: '<p>Position sizing determines <strong>how many shares</strong> to trade. It connects your risk rules to your actual trade execution.</p>' +
        '<p><strong>The Formula:</strong></p>' +
        '<p><code>Position Size = Account Risk / (Entry Price - Stop Loss Price)</code></p>' +
        '<p><strong>Example:</strong> $50,000 account, risking 1% = $500 max risk. Entry at $100.00, stop at $98.00. Risk per share = $2.00.</p>' +
        '<p><code>Position Size = $500 / $2.00 = 250 shares</code></p>' +
        '<p>This means you buy 250 shares. If your stop is hit, you lose exactly $500 (1% of your account). If the trade wins, your position size ensures proper profit.</p>' +
        '<p>The key insight: <strong>position size and stop distance are inversely related</strong>. A wider stop means fewer shares. A tighter stop means more shares. Your dollar risk stays constant.</p>'
    },
    {
      title: 'Scaling In and Out',
      type: 'tip',
      content: '<p>Advanced traders scale in and out of positions rather than going all-in/all-out:</p>' +
        '<p><strong>Scaling In:</strong> Enter with 1/3 of your planned size. If the trade moves in your favor and confirms, add another 1/3. Reduces risk on unconfirmed trades.</p>' +
        '<p><strong>Scaling Out:</strong> At your first target, sell 1/2 to lock in profit. Move your stop to breakeven on the remainder. Let the rest run to a second target.</p>' +
        '<p>Scaling out gives you a psychological advantage: you\'ve banked profit and have a "free trade" remaining (stop at breakeven). This helps you hold winners longer.</p>'
    }
  ],
  quiz: [
    { question: 'With a $30,000 account risking 1%, entry at $75 and stop at $73, how many shares?', options: ['100','150','200','300'], correct: 1, explanation: 'Account risk = $30,000 × 1% = $300. Risk per share = $75 - $73 = $2. Position size = $300 / $2 = 150 shares.' },
    { question: 'What is the benefit of scaling out of a position?', options: ['It increases your risk','It locks in partial profit and allows the rest to run','It doubles your position','It eliminates the need for stop losses'], correct: 1, explanation: 'Scaling out lets you bank partial profit while letting the remaining position run with a breakeven stop, giving you both safety and upside potential.' }
  ]
},

// ── I7: Trading Psychology Basics ──
{
  id: 'trading-psychology',
  title: 'Trading Psychology Basics',
  subtitle: 'Master your mind to master the market',
  duration: '15 min',
  sections: [
    {
      title: 'The Emotional Cycle of Trading',
      type: 'text',
      content: '<p>Every trader experiences an emotional cycle that can sabotage performance if not managed:</p>' +
        '<ul><li><strong>Fear</strong> — Prevents you from entering good setups, makes you exit too early, or freezes you when you should cut a loser.</li>' +
        '<li><strong>Greed</strong> — Makes you overtrade, over-leverage, or hold winners too long hoping for more.</li>' +
        '<li><strong>Hope</strong> — Keeps you in losing trades, hoping they\'ll come back instead of cutting your loss.</li>' +
        '<li><strong>Revenge</strong> — After a loss, you immediately enter another trade to "make it back," leading to even bigger losses.</li>' +
        '<li><strong>Euphoria</strong> — After a big win, you feel invincible. You take oversized positions or trade sloppy setups.</li></ul>' +
        '<p>The goal is not to eliminate emotions — that is impossible. The goal is to <strong>recognize them in real time</strong> and not let them override your trading plan.</p>'
    },
    {
      title: 'Building Mental Discipline',
      type: 'key-points',
      content: '<ul>' +
        '<li><strong>Have a written trading plan</strong> — If you don\'t know your entry, exit, and risk before the trade, you\'re gambling.</li>' +
        '<li><strong>Journal every trade</strong> — Record entry/exit, reason for the trade, emotions, and what you\'d do differently. Review weekly.</li>' +
        '<li><strong>Accept losses as business expenses</strong> — Every business has costs. Losses are the cost of doing business in trading.</li>' +
        '<li><strong>Focus on process, not outcomes</strong> — A losing trade that followed your plan is a GOOD trade. A winning trade that broke your rules is a BAD trade.</li>' +
        '<li><strong>Take breaks</strong> — Step away from the screen regularly. Trading requires peak focus, which is finite.</li></ul>'
    }
  ],
  quiz: [
    { question: 'What is "revenge trading"?', options: ['Trading to recover losses by immediately entering another trade','A specific chart pattern','Trading the same stock twice in one day','A strategy for shorting stocks'], correct: 0, explanation: 'Revenge trading is the emotionally-driven behavior of immediately entering trades after a loss to try to recover, which typically leads to even larger losses.' },
    { question: 'A losing trade that followed your plan perfectly is considered:', options: ['A bad trade','A good trade','A neutral trade','A mistake'], correct: 1, explanation: 'If you followed your plan with proper risk management and still lost, that is a good trade. Over time, consistently following a sound plan produces positive results.' }
  ]
},

// ── I8: Building a Trading Plan ──
{
  id: 'building-trading-plan',
  title: 'Building a Trading Plan',
  subtitle: 'Your business blueprint',
  duration: '16 min',
  sections: [
    {
      title: 'Components of a Trading Plan',
      type: 'text',
      content: '<p>A trading plan is a <strong>written document</strong> that defines exactly how you trade. Without one, you are gambling. With one, you are running a business.</p>' +
        '<p><strong>Essential components:</strong></p>' +
        '<ul><li><strong>Market</strong> — What do you trade? (Stocks, futures, options, specific sectors)</li>' +
        '<li><strong>Timeframe</strong> — What charts do you use? (5-min primary, 15-min context)</li>' +
        '<li><strong>Setups</strong> — What specific patterns/conditions must be present to take a trade? (E.g., "Bull flag above VWAP with RVOL > 2")</li>' +
        '<li><strong>Entry rules</strong> — Exactly when and how you enter.</li>' +
        '<li><strong>Exit rules</strong> — Stop loss placement, profit targets, trailing stop rules.</li>' +
        '<li><strong>Risk management</strong> — Max risk per trade (1%), max daily loss (3%), max positions (2-3).</li>' +
        '<li><strong>Trading hours</strong> — When you trade and when you don\'t (e.g., no new trades after 3:30 PM).</li>' +
        '<li><strong>Review process</strong> — How and when you review your trades (daily journal, weekly review).</li></ul>'
    },
    {
      title: 'Example Setup Checklist',
      type: 'example',
      content: '<p>Here\'s what a specific setup in your plan might look like:</p>' +
        '<p><strong>Setup: Opening Range Breakout (ORB)</strong></p>' +
        '<ol><li>Stock must have gapped up at least 3% with a catalyst (earnings, news).</li>' +
        '<li>RVOL must be 2.0 or higher at the open.</li>' +
        '<li>Wait for the first 5-minute candle to close (the "opening range").</li>' +
        '<li>Enter long on a break above the first candle\'s high with volume confirmation.</li>' +
        '<li>Stop loss: below the low of the opening range candle.</li>' +
        '<li>Target 1: 1:1 risk-reward (sell half). Target 2: next resistance level (trail stop on the rest).</li>' +
        '<li>Max risk: 1% of account.</li></ol>'
    }
  ],
  quiz: [
    { question: 'What is the MOST important thing a trading plan provides?', options: ['Higher win rates','Guaranteed profits','Clear rules that remove emotional decision-making','The ability to predict the market'], correct: 2, explanation: 'A trading plan\'s primary value is replacing emotional, in-the-moment decisions with predefined rules, creating consistency in your approach.' },
    { question: 'How often should you review your trading journal?', options: ['Once a year','Monthly at most','At least weekly','Only after losing trades'], correct: 2, explanation: 'Weekly review of your journal allows you to identify patterns in your behavior, spot what is working and what isn\'t, and continuously improve.' }
  ]
},

// ── I9: Fibonacci Retracements ──
{
  id: 'fibonacci-retracements',
  title: 'Fibonacci Retracements',
  subtitle: 'Natural levels the market respects',
  duration: '14 min',
  sections: [
    {
      title: 'The Fibonacci Sequence in Trading',
      type: 'text',
      content: '<p>Fibonacci retracement levels are horizontal lines that indicate where <strong>support and resistance</strong> are likely to occur, based on ratios derived from the Fibonacci sequence (1, 1, 2, 3, 5, 8, 13, 21...).</p>' +
        '<p>The key ratios used in trading are: <strong>23.6%, 38.2%, 50%, 61.8%, and 78.6%</strong>.</p>' +
        '<p>To draw Fibonacci retracements: identify a significant swing low and swing high. The tool automatically plots horizontal lines at each ratio between those two points.</p>' +
        '<p>The <strong>61.8% level</strong> (the "golden ratio") is the most important. Price frequently retraces to this level before continuing the trend. The 50% level is also heavily watched.</p>'
    },
    {
      title: 'Using Fibonacci in Day Trading',
      type: 'tip',
      content: '<p>Fibonacci levels work best when they <strong>confirm other support/resistance levels</strong>. If a 61.8% retracement aligns with a prior support level and the 20 EMA, that confluence zone becomes very strong.</p>' +
        '<p><strong>Common approach:</strong></p>' +
        '<ol><li>Identify the trend direction.</li>' +
        '<li>Wait for a pullback to the 38.2%, 50%, or 61.8% level.</li>' +
        '<li>Look for a candlestick reversal pattern at the Fibonacci level.</li>' +
        '<li>Enter in the direction of the trend with a stop just beyond the next Fibonacci level.</li></ol>'
    }
  ],
  quiz: [
    { question: 'Which Fibonacci level is known as the "golden ratio"?', options: ['23.6%','38.2%','50%','61.8%'], correct: 3, explanation: 'The 61.8% level is derived from the golden ratio and is the most important Fibonacci level in trading. Price frequently retraces to this level before continuing the trend.' },
    { question: 'How should Fibonacci levels be used most effectively?', options: ['As standalone entry signals','In combination with other support/resistance levels for confluence','Only on daily charts','Only for swing trading'], correct: 1, explanation: 'Fibonacci levels are most powerful when they align with other forms of support/resistance (moving averages, prior levels), creating a confluence zone.' }
  ]
},

// ── I10: Paper Trading ──
{
  id: 'paper-trading',
  title: 'Paper Trading',
  subtitle: 'Practice without risk',
  duration: '10 min',
  sections: [
    {
      title: 'Why Paper Trade?',
      type: 'text',
      content: '<p><strong>Paper trading</strong> (also called simulated trading) lets you practice with fake money in real market conditions. It is essential before risking real capital.</p>' +
        '<p>Paper trading helps you:</p>' +
        '<ul><li>Learn your broker\'s platform without financial risk.</li>' +
        '<li>Test and refine your trading plan in real-time conditions.</li>' +
        '<li>Build confidence in your setups before putting real money on the line.</li>' +
        '<li>Develop the habit of journaling and reviewing trades.</li>' +
        '<li>Discover weaknesses in your strategy before they cost you money.</li></ul>' +
        '<p><strong>Recommended:</strong> Paper trade for at least <strong>1-3 months</strong> until you are consistently profitable in simulation before going live. Even then, start with very small position sizes.</p>'
    },
    {
      title: 'Limitations of Paper Trading',
      type: 'warning',
      content: '<p>Paper trading is valuable but imperfect:</p>' +
        '<ul><li><strong>No emotional pressure</strong> — You won\'t feel the fear and greed of real money. This is the biggest gap.</li>' +
        '<li><strong>Perfect fills</strong> — Simulators often give you instant fills at the price you click. Real markets may not fill your order or may slip.</li>' +
        '<li><strong>No market impact</strong> — Your paper orders don\'t move the market. Real orders on illiquid stocks do.</li></ul>' +
        '<p>Because of these limitations, many traders transition from paper to live trading with <strong>very small sizes</strong> (e.g., 10-25 shares) to experience real emotions with minimal risk.</p>'
    }
  ],
  quiz: [
    { question: 'How long should you paper trade before going live?', options: ['1 week','At least 1-3 months of consistent profitability','Paper trading is not necessary','Until you have no losing trades'], correct: 1, explanation: 'It is recommended to paper trade for at least 1-3 months until you demonstrate consistent profitability before risking real capital.' },
    { question: 'What is the biggest limitation of paper trading?', options: ['The charts are different','You cannot use real-time data','There is no emotional pressure of real money','It costs too much'], correct: 2, explanation: 'The biggest gap between paper and live trading is the absence of real emotional pressure. Fear, greed, and panic are impossible to simulate until real money is at stake.' }
  ]
}

  ] // end intermediate lessons
},

// ████████████████████████████████████████████████████████████
//  LEVEL 3 — ADVANCED
// ████████████████████████████████████████████████████████████
{
  id: 'advanced',
  name: 'Advanced',
  subtitle: 'Professional-Grade Techniques',
  description: 'Unlock the tools and analysis techniques used by professional and institutional traders: order flow, Level 2, volume profile, VWAP, options flow, market microstructure, and advanced risk frameworks.',
  color: '#a855f7',
  accentColor: '#9333ea',
  lessons: [

// ── A1: Order Flow & Tape Reading ──
{
  id: 'order-flow-tape-reading',
  title: 'Order Flow & Tape Reading',
  subtitle: 'See what institutions are doing in real time',
  duration: '22 min',
  sections: [
    {
      title: 'What is Order Flow?',
      type: 'text',
      content: '<p><strong>Order flow</strong> is the study of actual buy and sell orders hitting the market in real time. While charts show you price history, order flow shows you the <strong>live supply and demand</strong> driving price.</p>' +
        '<p>Every trade that occurs is either a buyer lifting the ask (aggressive buying) or a seller hitting the bid (aggressive selling). Order flow analysis tracks this imbalance to predict short-term price direction.</p>' +
        '<p><strong>The Time & Sales window</strong> (also called "the tape") shows every single trade that executes, including: time, price, size, and whether it hit the bid or ask. Large prints on the ask indicate aggressive buying. Large prints on the bid indicate aggressive selling.</p>'
    },
    {
      title: 'Reading the Tape',
      type: 'text',
      content: '<p>Tape reading is an art that takes months to develop. Here\'s what to look for:</p>' +
        '<ul><li><strong>Large block prints</strong> — Orders of 10,000+ shares indicate institutional activity. Multiple large prints on the same side signal strong conviction.</li>' +
        '<li><strong>Speed of prints</strong> — Rapid-fire prints all hitting the ask = aggressive buying momentum. The tape "speeds up" during moves.</li>' +
        '<li><strong>Absorption</strong> — Price isn\'t dropping despite heavy selling on the bid. Someone is absorbing all the sell orders. This is extremely bullish. The reverse (absorption at resistance) is bearish.</li>' +
        '<li><strong>Exhaustion</strong> — After a strong move, prints slow down and sizes shrink. The move is running out of fuel.</li>' +
        '<li><strong>Hidden buyers/sellers</strong> — Institutions use iceberg orders (showing only a small portion of their true order). If you see the same bid/ask size refilling repeatedly, there\'s a hidden order.</li></ul>'
    },
    {
      title: 'Footprint Charts',
      type: 'text',
      content: '<p><strong>Footprint charts</strong> are an advanced visualization of order flow that shows the volume traded at each price within a candlestick, broken down by bid and ask trades.</p>' +
        '<p>A standard candlestick might show that a 5-minute candle went from $100 to $101. A footprint chart shows you exactly how many contracts traded at $100.00, $100.25, $100.50, etc., and how many were buying vs. selling at each level.</p>' +
        '<p><strong>Key footprint concepts:</strong></p>' +
        '<ul><li><strong>Delta</strong> — The difference between aggressive buying and selling volume at each price. Positive delta = more buying.</li>' +
        '<li><strong>Imbalance</strong> — When buying volume at a price is 3x or more than selling volume (or vice versa). Highlights aggressive activity.</li>' +
        '<li><strong>Point of Control (POC)</strong> — The price with the most volume in a footprint candle. Serves as a magnet for price.</li></ul>'
    }
  ],
  quiz: [
    { question: 'What does "absorption" mean in order flow?', options: ['Price breaking through resistance with high volume','Large orders being filled without moving price in the expected direction','A gap up on high volume','Institutional selling'], correct: 1, explanation: 'Absorption occurs when heavy selling hits the bid but price doesn\'t drop because a buyer is absorbing all the sell orders. This signals hidden demand and is bullish.' },
    { question: 'What is "delta" in a footprint chart?', options: ['The change in price','The difference between aggressive buying and selling volume','The total volume','The spread between bid and ask'], correct: 1, explanation: 'Delta measures the imbalance between aggressive buying (trades at the ask) and aggressive selling (trades at the bid) at each price level.' }
  ]
},

// ── A2: Level 2 / Market Depth ──
{
  id: 'level2-market-depth',
  title: 'Level 2 & Market Depth',
  subtitle: 'See the order book in real time',
  duration: '18 min',
  sections: [
    {
      title: 'Understanding the Order Book',
      type: 'text',
      content: '<p><strong>Level 2</strong> (also called the "order book" or "depth of market") shows all the <strong>resting limit orders</strong> at every price level near the current price. It displays:</p>' +
        '<ul><li><strong>Bid side</strong> — All resting buy limit orders, sorted by price (highest first).</li>' +
        '<li><strong>Ask side</strong> — All resting sell limit orders, sorted by price (lowest first).</li></ul>' +
        '<p>Each level shows the <strong>price</strong> and the <strong>total number of shares</strong> available at that price. For example, the ask at $50.10 might show 15,000 shares — meaning you\'d need to buy 15,000 shares at $50.10 before price can move to $50.11.</p>' +
        '<p>Level 2 gives you a real-time window into <strong>supply and demand</strong>. If there are far more shares on the ask than the bid, sellers are showing more supply — but this can be deceptive.</p>'
    },
    {
      title: 'Spoofing and Hidden Orders',
      type: 'warning',
      content: '<p>Not everything you see on Level 2 is real:</p>' +
        '<p><strong>Spoofing</strong> is when a trader places a large order they never intend to fill, purely to create the illusion of supply or demand. They cancel the order milliseconds before it would execute. Spoofing is <strong>illegal</strong> but still occurs.</p>' +
        '<p><strong>Iceberg orders</strong> are legitimate large orders that only display a small portion (e.g., showing 100 shares but the real order is 50,000). The displayed portion automatically refills as it gets hit. If you see the same size appearing repeatedly at the same price, it\'s likely an iceberg.</p>' +
        '<p><strong>Key insight:</strong> Use Level 2 to identify key levels and gauge sentiment, but do not rely on it solely. Combine it with tape reading and price action for the most accurate picture.</p>'
    }
  ],
  quiz: [
    { question: 'What does Level 2 show you?', options: ['Only the best bid and ask','All resting limit orders at every visible price level','Historical trading data','Insider trading activity'], correct: 1, explanation: 'Level 2 displays the full order book showing all resting limit orders (bids and asks) at each price level with their sizes.' },
    { question: 'What is "spoofing"?', options: ['Placing large orders you intend to fill','Placing large orders with no intent to fill, to manipulate sentiment','Trading on insider information','Using multiple broker accounts'], correct: 1, explanation: 'Spoofing is the illegal practice of placing large orders to create false impressions of supply/demand, then canceling them before execution.' }
  ]
},

// ── A3: Volume Profile ──
{
  id: 'volume-profile',
  title: 'Volume Profile Analysis',
  subtitle: 'Where the real volume traded',
  duration: '20 min',
  sections: [
    {
      title: 'Volume Profile vs. Traditional Volume',
      type: 'text',
      content: '<p>Traditional volume bars show how much volume traded during each <strong>time period</strong>. Volume Profile shows how much volume traded at each <strong>price level</strong> — a fundamentally different and more powerful view.</p>' +
        '<p>A Volume Profile is displayed as a horizontal histogram on the side of your chart. Longer bars indicate prices where more volume was traded, showing you where the market spent the most time and found "value."</p>' +
        '<p><strong>Key components:</strong></p>' +
        '<ul><li><strong>Point of Control (POC)</strong> — The price with the highest traded volume. It acts as a <strong>magnet for price</strong>. Price tends to gravitate back to the POC.</li>' +
        '<li><strong>Value Area (VA)</strong> — The range containing 70% of all traded volume. Price within the VA is considered "at fair value." The top is the <strong>Value Area High (VAH)</strong> and the bottom is the <strong>Value Area Low (VAL)</strong>.</li>' +
        '<li><strong>High Volume Nodes (HVN)</strong> — Areas of concentrated volume. These act as strong support/resistance because many participants have positions there.</li>' +
        '<li><strong>Low Volume Nodes (LVN)</strong> — Price levels with minimal volume. Price tends to move <strong>quickly through these areas</strong> because there\'s little "memory" or interest there.</li></ul>'
    },
    {
      title: 'Trading with Volume Profile',
      type: 'example',
      content: '<p><strong>Strategy 1 — POC Magnet:</strong> If price moves away from the POC on low volume, it often returns. Trade the mean reversion back to the POC.</p>' +
        '<p><strong>Strategy 2 — Value Area Bounce:</strong> When price tests the VAH from above or VAL from below, look for a bounce back into the value area. These are high-probability reversal zones.</p>' +
        '<p><strong>Strategy 3 — LVN Breakout:</strong> When price breaks into a low volume node, it moves quickly. Use LVNs as acceleration zones — enter as price enters the LVN and ride the move to the next HVN.</p>' +
        '<p><strong>Strategy 4 — Naked POC:</strong> A POC from a prior session that has not been revisited is called a "naked POC." Price has a strong tendency to return to naked POCs, making them excellent targets.</p>'
    }
  ],
  quiz: [
    { question: 'What is the Point of Control (POC) in volume profile?', options: ['The highest price traded','The price with the most traded volume','The opening price','The average price'], correct: 1, explanation: 'The POC is the price level where the most volume was transacted. It acts as a magnet for price and is the single most important level in volume profile analysis.' },
    { question: 'What happens when price enters a Low Volume Node?', options: ['Price tends to consolidate','Price tends to move quickly through it','Volume always increases','Price reverses'], correct: 1, explanation: 'Low Volume Nodes have minimal market memory, so price moves quickly through them. They act as acceleration zones between high volume areas.' }
  ]
},

// ── A4: VWAP Strategies ──
{
  id: 'vwap-strategies',
  title: 'VWAP Strategies',
  subtitle: 'The institutional benchmark',
  duration: '18 min',
  sections: [
    {
      title: 'Understanding VWAP',
      type: 'text',
      content: '<p><strong>VWAP (Volume Weighted Average Price)</strong> is the average price a stock has traded at throughout the day, weighted by volume. It represents the <strong>fair price</strong> of the stock for the day.</p>' +
        '<p>VWAP is critical because <strong>institutional traders</strong> are measured against it. Fund managers consider it a "good fill" if they buy below VWAP or sell above VWAP. This means:</p>' +
        '<ul><li>Institutions tend to <strong>buy below VWAP</strong> and <strong>sell above VWAP</strong>.</li>' +
        '<li>This behavior makes VWAP a <strong>self-fulfilling support/resistance level</strong>.</li></ul>' +
        '<p><strong>VWAP Standard Deviation Bands:</strong> These are bands plotted at 1, 2, and 3 standard deviations above and below VWAP. They show how far price has deviated from the "fair" price. The ±2 standard deviation bands are often extreme and provide mean-reversion opportunities.</p>'
    },
    {
      title: 'VWAP Day Trading Strategies',
      type: 'example',
      content: '<p><strong>1. VWAP Bounce (Mean Reversion):</strong> When a trending stock pulls back to VWAP, look for a bounce. Enter on a candlestick reversal at VWAP with a stop just below. Target the prior high or VWAP upper band.</p>' +
        '<p><strong>2. VWAP Breakout:</strong> If a stock trading below VWAP breaks above it with volume, the bias shifts bullish. Enter on the break or the first pullback to VWAP after the break.</p>' +
        '<p><strong>3. VWAP Band Fade:</strong> When price reaches the ±2 standard deviation band, it is extended. Look for reversal candles and trade back toward VWAP.</p>' +
        '<p><strong>Rule of thumb:</strong> Above VWAP = look for longs. Below VWAP = look for shorts. This simple filter eliminates many bad trades.</p>'
    }
  ],
  quiz: [
    { question: 'Why is VWAP important to institutional traders?', options: ['It predicts earnings','They measure execution quality against it','It shows premarket activity','It calculates dividends'], correct: 1, explanation: 'Institutional traders use VWAP as a benchmark. Getting fills below VWAP (for buys) is considered good execution, which drives institutional behavior around VWAP levels.' },
    { question: 'What does a VWAP ±2 standard deviation band indicate?', options: ['Normal price action','Price is significantly extended from fair value','A breakout is confirmed','The trend has reversed'], correct: 1, explanation: 'When price reaches the ±2 standard deviation band, it has moved significantly from the day\'s fair price, creating a potential mean-reversion opportunity back toward VWAP.' }
  ]
},

// ── A5: Multi-Timeframe Analysis ──
{
  id: 'multi-timeframe-analysis',
  title: 'Multi-Timeframe Analysis',
  subtitle: 'See the forest and the trees',
  duration: '16 min',
  sections: [
    {
      title: 'The Top-Down Approach',
      type: 'text',
      content: '<p>Professional traders never rely on a single timeframe. They use a <strong>top-down approach</strong> that examines multiple timeframes to get the complete picture.</p>' +
        '<p><strong>The 3-timeframe framework:</strong></p>' +
        '<ul><li><strong>Higher Timeframe (Daily/1-Hour)</strong> — Identifies the overall trend direction and key support/resistance levels. This sets your <strong>directional bias</strong>.</li>' +
        '<li><strong>Trading Timeframe (5-Minute/15-Minute)</strong> — This is where you identify your actual setups and execute trades.</li>' +
        '<li><strong>Lower Timeframe (1-Minute/2-Minute)</strong> — Fine-tunes your entry for precision. Helps you enter at the best possible price within your setup.</li></ul>' +
        '<p><strong>The rule:</strong> Only take trades on your trading timeframe that align with the higher timeframe trend. Trading against the higher timeframe trend drastically reduces your win rate.</p>'
    },
    {
      title: 'Practical Example',
      type: 'example',
      content: '<p><strong>Step 1 — Daily chart:</strong> Stock is in an uptrend, recently pulled back to the 20 EMA. Daily bias: BULLISH.</p>' +
        '<p><strong>Step 2 — 5-minute chart:</strong> Stock is forming a bull flag pattern with volume declining during the consolidation. The flag is occurring near the daily 20 EMA level. Setup: CONFIRMED.</p>' +
        '<p><strong>Step 3 — 1-minute chart:</strong> Drop to the 1-minute to fine-tune entry. Enter on the first 1-minute candle that breaks above the flag pattern with a green candle and volume. Entry: OPTIMIZED.</p>' +
        '<p>This approach gets you into the trade at a better price with a tighter stop, improving your risk-to-reward ratio while maintaining alignment with the broader trend.</p>'
    }
  ],
  quiz: [
    { question: 'In the 3-timeframe framework, what does the higher timeframe determine?', options: ['Your exact entry price','The directional bias and key levels','Your position size','Your profit target'], correct: 1, explanation: 'The higher timeframe sets your directional bias (bullish or bearish) and identifies key support/resistance levels. You then only look for setups that align with this bias on lower timeframes.' }
  ]
},

// ── A6: Options for Day Traders ──
{
  id: 'options-for-day-traders',
  title: 'Options for Day Traders',
  subtitle: 'Leverage, hedging, and institutional footprints',
  duration: '22 min',
  sections: [
    {
      title: 'Options Basics for Day Traders',
      type: 'text',
      content: '<p>Options give you the <strong>right (but not the obligation)</strong> to buy or sell a stock at a specific price by a specific date. Day traders use options for leverage and to trade institutional activity.</p>' +
        '<p><strong>Key terms:</strong></p>' +
        '<ul><li><strong>Call</strong> — Right to buy. Goes up when the stock goes up.</li>' +
        '<li><strong>Put</strong> — Right to sell. Goes up when the stock goes down.</li>' +
        '<li><strong>Strike Price</strong> — The price at which the option can be exercised.</li>' +
        '<li><strong>Expiration</strong> — The date the option expires. Day traders typically use weekly expirations (0DTE to 5DTE).</li>' +
        '<li><strong>Premium</strong> — The price you pay for the option.</li>' +
        '<li><strong>In-the-Money (ITM)</strong> — Call: stock price > strike. Put: stock price < strike.</li>' +
        '<li><strong>At-the-Money (ATM)</strong> — Strike ≈ current stock price.</li>' +
        '<li><strong>Out-of-the-Money (OTM)</strong> — Call: stock > strike. Put: stock price > strike. No intrinsic value.</li></ul>'
    },
    {
      title: 'The Greeks for Day Traders',
      type: 'text',
      content: '<p>The "Greeks" measure how an option\'s price changes with different variables:</p>' +
        '<ul><li><strong>Delta</strong> — How much the option price changes per $1 move in the stock. ATM options have ~0.50 delta. Higher delta = more responsive to stock movement.</li>' +
        '<li><strong>Theta</strong> — Time decay. Options lose value every day. 0DTE options decay fastest. As a buyer, theta works against you.</li>' +
        '<li><strong>Gamma</strong> — The rate of change of delta. High gamma means delta changes rapidly with small stock moves. 0DTE ATM options have explosive gamma.</li>' +
        '<li><strong>Vega</strong> — Sensitivity to implied volatility. Higher IV = more expensive options.</li></ul>' +
        '<p><strong>For day trading:</strong> Focus on delta and theta. Buy ITM or ATM options for better delta. Avoid OTM lottery tickets. Be aware that 0DTE options can lose 50%+ of their value in minutes if the stock moves against you.</p>'
    },
    {
      title: 'Gamma Exposure (GEX) and Options Flow',
      type: 'text',
      content: '<p><strong>Gamma Exposure (GEX)</strong> measures the total gamma of all outstanding options contracts at each strike price. It reveals where market makers are hedging and can predict support/resistance levels.</p>' +
        '<p><strong>How GEX affects stocks:</strong></p>' +
        '<ul><li><strong>Positive GEX environment:</strong> Market makers are long gamma. They buy dips and sell rallies to stay hedged. This <strong>suppresses volatility</strong> and creates a pinning effect near high GEX strikes.</li>' +
        '<li><strong>Negative GEX environment:</strong> Market makers are short gamma. They must sell into falling markets and buy into rising markets (the opposite). This <strong>amplifies volatility</strong>.</li></ul>' +
        '<p><strong>Unusual Options Activity (UOA):</strong> Services like Unusual Whales, Cheddar Flow, or FlowAlgo track large or unusual option orders. A $2M call sweep on a small-cap stock might signal institutional knowledge of an upcoming catalyst.</p>'
    }
  ],
  quiz: [
    { question: 'What does high positive GEX at a strike price mean for the stock?', options: ['Increased volatility near that price','Price tends to pin near that strike due to market maker hedging','The stock will definitely reach that price','Options at that strike are cheap'], correct: 1, explanation: 'High positive GEX means market makers are hedging heavily at that strike by buying dips and selling rallies, which suppresses volatility and pins price near the strike.' },
    { question: 'Why should day traders avoid buying cheap OTM options?', options: ['They are illegal','They have low delta and high theta decay, making profitable day trades difficult','They are too volatile','They cannot be sold same-day'], correct: 1, explanation: 'OTM options have low delta (small move per $1 stock change) and lose value rapidly to time decay (theta), making them poor vehicles for short-term day trades.' }
  ]
},

// ── A7: Advanced Risk Management ──
{
  id: 'advanced-risk-management',
  title: 'Advanced Risk Management',
  subtitle: 'Professional-grade capital protection',
  duration: '18 min',
  sections: [
    {
      title: 'Correlation Risk',
      type: 'text',
      content: '<p>If you have 3 long positions in tech stocks, you don\'t have 3 independent trades — you have <strong>one concentrated bet on tech going up</strong>. This is <strong>correlation risk</strong>.</p>' +
        '<p>When markets sell off, correlations increase (everything drops together). Your "diversified" portfolio of 3 longs suddenly acts like one giant position.</p>' +
        '<p><strong>How to manage it:</strong></p>' +
        '<ul><li>Track <strong>net exposure</strong>: total long dollars minus total short dollars. If you\'re $50K long and $20K short, net exposure is $30K long.</li>' +
        '<li>Avoid having all positions in the same sector or correlated assets.</li>' +
        '<li>Reduce total position count during high-volatility environments (VIX > 25).</li>' +
        '<li>Consider a hedge position (e.g., buying SPY puts while holding individual longs).</li></ul>'
    },
    {
      title: 'The Kelly Criterion',
      type: 'text',
      content: '<p>The <strong>Kelly Criterion</strong> is a formula that calculates the optimal percentage of your capital to risk on each trade, given your win rate and R:R ratio:</p>' +
        '<p><code>Kelly % = W - [(1 - W) / R]</code></p>' +
        '<p>Where W = win rate (decimal), R = average win / average loss.</p>' +
        '<p><strong>Example:</strong> Win rate = 55% (0.55), Average Win = $600, Average Loss = $300, R = 2.0</p>' +
        '<p><code>Kelly % = 0.55 - [(1 - 0.55) / 2.0] = 0.55 - 0.225 = 0.325 = 32.5%</code></p>' +
        '<p>Full Kelly (32.5%) is too aggressive for most traders. Professionals use <strong>Half Kelly or Quarter Kelly</strong> (8-16% in this example) to reduce volatility of returns while still growing the account optimally.</p>'
    }
  ],
  quiz: [
    { question: 'What is correlation risk?', options: ['The risk of a single stock dropping','The risk that multiple positions move in the same direction simultaneously','The risk of a broker failure','The risk of using too much leverage'], correct: 1, explanation: 'Correlation risk is the danger that multiple positions are essentially the same bet. During market stress, correlations increase and all your positions can lose simultaneously.' },
    { question: 'Why do professionals use Half Kelly instead of Full Kelly?', options: ['Full Kelly is illegal','Half Kelly reduces the volatility of returns while still growing the account','Full Kelly always leads to losses','Half Kelly doubles the win rate'], correct: 1, explanation: 'Full Kelly sizing maximizes long-term growth but creates large drawdowns. Half or Quarter Kelly provides a smoother equity curve with still-excellent growth.' }
  ]
},

// ── A8: Market Microstructure ──
{
  id: 'market-microstructure',
  title: 'Market Microstructure',
  subtitle: 'How the market machine actually works',
  duration: '20 min',
  sections: [
    {
      title: 'How Orders Get Matched',
      type: 'text',
      content: '<p><strong>Market microstructure</strong> studies the mechanics of how orders are transmitted, matched, and executed. Understanding this gives you an edge over traders who only look at charts.</p>' +
        '<p><strong>The matching process:</strong></p>' +
        '<ol><li>You place an order through your broker.</li>' +
        '<li>Your broker routes it to a venue (exchange, ECN, dark pool, or market maker).</li>' +
        '<li>At the venue, the order enters the order book and is matched against resting orders based on <strong>price-time priority</strong> (best price first, then first-in-first-out at the same price).</li>' +
        '<li>Once matched, the trade is reported to the consolidated tape.</li></ol>' +
        '<p><strong>Payment for Order Flow (PFOF):</strong> Many retail brokers (Robinhood, Webull) sell your orders to market makers like Citadel Securities or Virtu. The market maker executes your trade and keeps a tiny profit on each. This is why many brokers offer zero commissions. Your execution quality may suffer slightly as a result.</p>'
    },
    {
      title: 'Maker-Taker Model and Rebates',
      type: 'text',
      content: '<p>Exchanges use a <strong>maker-taker fee model</strong>:</p>' +
        '<ul><li><strong>Maker</strong> — You add liquidity by placing a limit order that sits in the book. The exchange <strong>pays you a rebate</strong> (e.g., $0.002/share on NYSE).</li>' +
        '<li><strong>Taker</strong> — You remove liquidity by placing a market order or a limit order that crosses the spread. The exchange <strong>charges you a fee</strong> (e.g., $0.003/share).</li></ul>' +
        '<p>Some high-frequency traders (HFTs) profit purely from these rebates by placing and canceling millions of orders. This is a legitimate but controversial practice.</p>' +
        '<p><strong>For day traders:</strong> Using limit orders saves you money (you get rebates instead of paying fees). But if you need to get in/out urgently, paying the taker fee with a market order is the cost of speed.</p>'
    }
  ],
  quiz: [
    { question: 'What is "Payment for Order Flow" (PFOF)?', options: ['A fee you pay to your broker','When brokers sell your order flow to market makers for execution','A type of trading strategy','A government tax on trades'], correct: 1, explanation: 'PFOF is the practice where brokers route retail orders to market makers who pay for the privilege of executing those orders. This subsidizes zero-commission trading but may affect execution quality.' },
    { question: 'In the maker-taker model, who receives a rebate?', options: ['The taker (market orders)','The maker (limit orders that add liquidity)','Both maker and taker','Neither — only the exchange profits'], correct: 1, explanation: 'Makers add liquidity to the order book with limit orders and receive a rebate for doing so. Takers remove liquidity and pay a fee.' }
  ]
},

// ── A9: Dark Pools & Hidden Liquidity ──
{
  id: 'dark-pools',
  title: 'Dark Pools & Hidden Liquidity',
  subtitle: 'The off-exchange world',
  duration: '16 min',
  sections: [
    {
      title: 'What Are Dark Pools?',
      type: 'text',
      content: '<p><strong>Dark pools</strong> are private, off-exchange trading venues where large institutional orders are executed anonymously. They are called "dark" because the orders are not visible on the public order book until after execution.</p>' +
        '<p>Dark pools were created to allow institutions to trade large blocks without revealing their intentions to the market. If a hedge fund wants to sell 5 million shares of Apple, placing that order on a public exchange would tank the price before they could execute. In a dark pool, the order is hidden.</p>' +
        '<p><strong>Dark pool volume typically accounts for 35-45% of total U.S. equity volume</strong>. This means a significant portion of trading is invisible to traders looking only at exchange data.</p>' +
        '<p><strong>Key dark pool data points:</strong></p>' +
        '<ul><li><strong>Dark Pool Prints</strong> — Large off-exchange trades reported to the tape after execution. These appear as large block trades on Time & Sales.</li>' +
        '<li><strong>Short Sale Volume</strong> — FINRA publishes daily dark pool short sale volume. High short volume in dark pools may signal institutional bearishness.</li></ul>'
    }
  ],
  quiz: [
    { question: 'Why were dark pools created?', options: ['To allow retail traders to get better fills','To allow institutions to trade large blocks without market impact','To hide illegal trading activity','To reduce exchange fees'], correct: 1, explanation: 'Dark pools exist so that large institutional orders can be executed without revealing the order to the public market, which would cause adverse price movement before the order is filled.' }
  ]
},

// ── A10: Algorithmic Trading Concepts ──
{
  id: 'algorithmic-trading-concepts',
  title: 'Algorithmic Trading Concepts',
  subtitle: 'How algorithms dominate modern markets',
  duration: '20 min',
  sections: [
    {
      title: 'Types of Trading Algorithms',
      type: 'text',
      content: '<p>Algorithms account for <strong>60-75% of all U.S. equity volume</strong>. Understanding how they work helps you trade alongside them rather than against them.</p>' +
        '<p><strong>Common algorithm types:</strong></p>' +
        '<ul><li><strong>TWAP (Time-Weighted Average Price)</strong> — Executes a large order by breaking it into equal-sized pieces at regular intervals. Creates a steady, predictable flow of orders.</li>' +
        '<li><strong>VWAP Algo</strong> — Executes to match the day\'s VWAP by trading more heavily during high-volume periods. This is why VWAP is such an important level.</li>' +
        '<li><strong>Iceberg</strong> — Shows only a small portion of the order; automatically refills as portions are executed. Used to hide true order size.</li>' +
        '<li><strong>Momentum Ignition</strong> — Aggressively buys/sells to trigger other algorithms and stop losses, creating a cascade that the algo profits from. This is a gray-area practice.</li>' +
        '<li><strong>Mean Reversion</strong> — Buys when price deviates significantly below the mean and sells when it deviates above. Often operates around VWAP or moving averages.</li>' +
        '<li><strong>Statistical Arbitrage</strong> — Trades pairs of correlated stocks when they diverge from their historical relationship, betting they converge back.</li></ul>'
    },
    {
      title: 'Implications for Day Traders',
      type: 'tip',
      content: '<p><strong>How algorithms affect your trading:</strong></p>' +
        '<ul><li><strong>Algorithmic stop hunts</strong> — Algos know where retail traders place stops (just below support, above resistance, at round numbers). They may push price to trigger those stops, then reverse. Place stops at less obvious levels.</li>' +
        '<li><strong>VWAP and MA bounces</strong> — VWAP and mean-reversion algos create the support/resistance you see at these levels. This is why these levels "work."</li>' +
        '<li><strong>Opening and closing volume</strong> — TWAP and VWAP algos are most active during the first and last 30 minutes. This contributes to the high volume at open and close.</li>' +
        '<li><strong>Fake breakouts</strong> — Momentum ignition algos create false breakouts to trap retail traders. Wait for confirmation (volume, close above the level) before entering breakouts.</li></ul>'
    }
  ],
  quiz: [
    { question: 'What percentage of U.S. equity volume do algorithms account for?', options: ['10-20%','30-40%','60-75%','95-100%'], correct: 2, explanation: 'Algorithms account for roughly 60-75% of all U.S. equity trading volume, making them the dominant force in modern markets.' },
    { question: 'Why do VWAP levels act as support/resistance?', options: ['It is a coincidence','VWAP algorithms execute large orders around VWAP, creating real supply and demand','VWAP is mandated by the SEC','Only retail traders use VWAP'], correct: 1, explanation: 'Institutional VWAP execution algorithms actively buy below VWAP and sell above it, creating genuine supply/demand forces that make VWAP a self-fulfilling support/resistance level.' }
  ]
}

  ] // end advanced lessons
},

// ████████████████████████████████████████████████████████████
//  LEVEL 4 — EXPERT
// ████████████████████████████████████████████████████████████
{
  id: 'expert',
  name: 'Expert',
  subtitle: 'Mastery & Edge',
  description: 'The final level. Master auction market theory, build systematic trading frameworks, understand volatility regimes, navigate complex event-driven scenarios, and develop the psychology and business structure of a professional trader.',
  color: '#f59e0b',
  accentColor: '#d97706',
  lessons: [

// ── E1: Auction Market Theory ──
{
  id: 'auction-market-theory',
  title: 'Auction Market Theory',
  subtitle: 'The framework professionals use',
  duration: '22 min',
  sections: [
    {
      title: 'The Auction Process',
      type: 'text',
      content: '<p><strong>Auction Market Theory (AMT)</strong> is the foundational framework that explains <em>why</em> markets move. Developed by J. Peter Steidlmayer (creator of Market Profile), AMT views the market as a continuous two-way auction between buyers and sellers.</p>' +
        '<p><strong>Core principles:</strong></p>' +
        '<ul><li>The market\'s primary function is to <strong>facilitate trade</strong> — to find a price where buyers and sellers agree. This price is "fair value."</li>' +
        '<li>Price moves away from fair value to <strong>advertise opportunity</strong>. When price is too high, it attracts sellers. When too low, it attracts buyers.</li>' +
        '<li>The market oscillates between two phases: <strong>balance (bracketing)</strong> and <strong>imbalance (trending)</strong>.</li></ul>' +
        '<p><strong>Balance:</strong> Price trades in a range. Volume builds. This is the market finding fair value. Think of it as an auction where bidding is active but no clear winner emerges.</p>' +
        '<p><strong>Imbalance:</strong> One side (buyers or sellers) overwhelms the other. Price breaks out of balance and trends until a new balance area forms.</p>'
    },
    {
      title: 'Initiative vs. Responsive Activity',
      type: 'text',
      content: '<p>AMT categorizes all market activity into two types:</p>' +
        '<p><strong>Initiative Activity:</strong> Aggressive participants driving price into new territory. Breakouts, trend extensions, and gap fills are initiative moves. Initiative activity is confident and directional.</p>' +
        '<p><strong>Responsive Activity:</strong> Participants reacting to perceived value. When price falls to a level traders consider cheap, responsive buyers step in. When price rises to a level considered expensive, responsive sellers appear.</p>' +
        '<p><strong>How to use this:</strong></p>' +
        '<ul><li>When price breaks out of a value area with strong volume, that is <strong>initiative</strong> — trade with it.</li>' +
        '<li>When price is rejected at the edge of a value area, that is <strong>responsive</strong> — fade it (trade back toward value).</li>' +
        '<li>The key question at every moment: "Is this initiative or responsive activity?"</li></ul>'
    },
    {
      title: 'Market Profile',
      type: 'text',
      content: '<p><strong>Market Profile</strong> organizes price data by time, showing where the market spent the most time at each price during a session. It is displayed as a series of letters (TPOs — Time Price Opportunities) that build a histogram shape.</p>' +
        '<p><strong>Profile shapes and what they mean:</strong></p>' +
        '<ul><li><strong>Normal/Bell Curve</strong> — A balanced, rotational day. Wide value area. Price stayed near the center. Tomorrow may see continuation in the same range.</li>' +
        '<li><strong>P-Shape Profile</strong> — Accumulation. Short covering or buying at the bottom pushed price up. The bottom is thin (fast move up), the top is fat (time spent). Bullish for the next session.</li>' +
        '<li><strong>b-Shape Profile</strong> — Distribution. Selling at the top pushed price down. Top is thin, bottom is fat. Bearish for the next session.</li>' +
        '<li><strong>D-Shape Profile</strong> — True balance/rotation day. Healthy, normal trading.</li>' +
        '<li><strong>Elongated/Trending Profile</strong> — Price moved directionally all day with a narrow, stretched profile. Strong initiative activity. Continuation is likely.</li></ul>'
    }
  ],
  quiz: [
    { question: 'According to AMT, what is the market\'s primary function?', options: ['To make traders money','To facilitate trade by finding prices where buyers and sellers agree','To follow technical indicators','To react to news events'], correct: 1, explanation: 'AMT views the market as a continuous auction whose primary purpose is to facilitate trade — finding the price where buyers and sellers agree to transact.' },
    { question: 'What does a P-shaped Market Profile indicate?', options: ['A balanced day','Distribution/selling','Accumulation/buying with bullish implications','A trending down day'], correct: 2, explanation: 'A P-shaped profile (thin bottom, fat top) indicates accumulation — buyers pushed price up from below and then spent time at higher prices. This is bullish for the next session.' }
  ]
},

// ── E2: Building Trading Systems ──
{
  id: 'building-trading-systems',
  title: 'Building Trading Systems',
  subtitle: 'From discretionary to systematic',
  duration: '24 min',
  sections: [
    {
      title: 'Systematic vs. Discretionary',
      type: 'text',
      content: '<p>A <strong>discretionary trader</strong> makes decisions in real-time based on judgment, experience, and pattern recognition. A <strong>systematic trader</strong> follows a fully defined set of rules that can (in theory) be automated.</p>' +
        '<p>Most successful professional traders land somewhere in between — they have systematic rules but use discretion for entries, exits, or position sizing.</p>' +
        '<p><strong>Benefits of systematic trading:</strong></p>' +
        '<ul><li>Removes emotion from decision-making.</li>' +
        '<li>Can be backtested on historical data to validate edge.</li>' +
        '<li>Consistent execution — no missed trades, no hesitation.</li>' +
        '<li>Can be automated partially or fully.</li></ul>' +
        '<p><strong>Building blocks of a system:</strong></p>' +
        '<ol><li><strong>Universe</strong> — What do you trade? (e.g., S&P 500 stocks above $10 with > 1M avg volume)</li>' +
        '<li><strong>Setup conditions</strong> — What market conditions must be true? (e.g., stock above 200 SMA, RVOL > 1.5)</li>' +
        '<li><strong>Entry trigger</strong> — The specific signal to enter. (e.g., 5-min candle closes above the opening range high)</li>' +
        '<li><strong>Position sizing</strong> — How much to risk. (e.g., 1% of account via ATR-based stop)</li>' +
        '<li><strong>Exit rules</strong> — Stop loss, profit targets, time-based exits. (e.g., ATR-based stop, 2:1 target, close by 3:30 PM)</li></ol>'
    },
    {
      title: 'Backtesting and Validation',
      type: 'text',
      content: '<p><strong>Backtesting</strong> runs your system against historical data to see how it would have performed. But beware of pitfalls:</p>' +
        '<ul><li><strong>Overfitting</strong> — The #1 danger. If you optimize your system to perfectly fit historical data, it will fail on new data. A system with 3-4 simple rules that works across many stocks is far better than a 15-rule system optimized for one stock.</li>' +
        '<li><strong>Survivorship bias</strong> — Only testing stocks that still exist today ignores delisted stocks that may have been in your universe historically.</li>' +
        '<li><strong>Look-ahead bias</strong> — Using information in your backtest that wasn\'t available at the time of the signal.</li>' +
        '<li><strong>Out-of-sample testing</strong> — Develop your system on one period (in-sample), then test it on a completely separate period (out-of-sample) that it has never seen. If it works on both, you likely have a real edge.</li>' +
        '<li><strong>Walk-forward analysis</strong> — Repeatedly optimize on a rolling window and test on the next period. The most rigorous validation method.</li></ul>'
    }
  ],
  quiz: [
    { question: 'What is the #1 danger in backtesting?', options: ['Not having enough data','Overfitting — optimizing to perfectly match historical data','Using the wrong timeframe','Testing too many stocks'], correct: 1, explanation: 'Overfitting creates a system that looks perfect on historical data but fails in live trading because it captured noise rather than a genuine edge. Simple, robust systems outperform complex ones.' },
    { question: 'What is "out-of-sample testing"?', options: ['Testing during live trading','Testing on data the system was never developed on','Testing only profitable trades','Testing on multiple timeframes'], correct: 1, explanation: 'Out-of-sample testing validates your system on data it has never been exposed to, helping confirm that the edge is real and not a product of overfitting.' }
  ]
},

// ── E3: Statistical Edge & Expectancy ──
{
  id: 'statistical-edge-expectancy',
  title: 'Statistical Edge & Expectancy',
  subtitle: 'The mathematics of consistent profitability',
  duration: '20 min',
  sections: [
    {
      title: 'Expectancy Formula',
      type: 'text',
      content: '<p><strong>Expectancy</strong> tells you how much you can expect to make (or lose) per dollar risked, on average, over many trades.</p>' +
        '<p><code>Expectancy = (Win Rate × Avg Win) - (Loss Rate × Avg Loss)</code></p>' +
        '<p><strong>Example:</strong> Win rate = 50%, Average win = $400, Average loss = $200.</p>' +
        '<p><code>Expectancy = (0.50 × $400) - (0.50 × $200) = $200 - $100 = +$100</code></p>' +
        '<p>This means on average, you make $100 per trade. Over 200 trades/month, that\'s $20,000/month before commissions.</p>' +
        '<p><strong>The key insight:</strong> You don\'t need a high win rate to be profitable. A 35% win rate with 1:3 R:R gives: (0.35 × $3) - (0.65 × $1) = $1.05 - $0.65 = +$0.40 per dollar risked. That is a profitable system.</p>'
    },
    {
      title: 'Monte Carlo Simulation',
      type: 'text',
      content: '<p>A <strong>Monte Carlo simulation</strong> takes your system\'s statistics (win rate, avg win, avg loss) and runs thousands of random sequences to show the range of possible outcomes.</p>' +
        '<p>Why this matters: Even a profitable system can have extended losing streaks purely by chance. A system with 60% win rate can easily produce 10 losses in a row. Monte Carlo shows you:</p>' +
        '<ul><li><strong>Maximum expected drawdown</strong> — The worst peak-to-trough decline you might experience.</li>' +
        '<li><strong>Probability of ruin</strong> — The chance of blowing up your account given your position sizing.</li>' +
        '<li><strong>Range of returns</strong> — Not just the average, but the best and worst case scenarios.</li></ul>' +
        '<p>If your Monte Carlo simulation shows a 5% chance of a 40% drawdown, you need to decide if you can stomach that. If not, reduce your position sizing until the drawdown is acceptable.</p>'
    }
  ],
  quiz: [
    { question: 'A system with 40% win rate and 1:2.5 R:R has what expectancy per dollar risked?', options: ['-$0.10','$0.00','+$0.40','+$1.00'], correct: 2, explanation: 'Expectancy = (0.40 × $2.50) - (0.60 × $1.00) = $1.00 - $0.60 = +$0.40 per dollar risked. A positive expectancy system.' },
    { question: 'What does Monte Carlo simulation reveal?', options: ['The exact future returns','The range of possible outcomes including worst-case drawdowns','Which stocks to trade','The optimal entry point'], correct: 1, explanation: 'Monte Carlo simulation runs thousands of random sequences of your trade results to show the range of possible outcomes, including maximum drawdowns and probability of ruin.' }
  ]
},

// ── E4: Volatility Trading ──
{
  id: 'volatility-trading',
  title: 'Volatility Trading',
  subtitle: 'Trading the fear gauge',
  duration: '20 min',
  sections: [
    {
      title: 'Understanding VIX',
      type: 'text',
      content: '<p>The <strong>VIX (CBOE Volatility Index)</strong> measures the market\'s expectation of 30-day volatility based on S&P 500 options prices. It is often called the "fear gauge."</p>' +
        '<ul><li><strong>VIX 12-15:</strong> Low volatility, complacent market. Small moves, mean reversion strategies work well.</li>' +
        '<li><strong>VIX 15-20:</strong> Normal volatility. Standard trading conditions.</li>' +
        '<li><strong>VIX 20-30:</strong> Elevated fear. Larger price swings, wider stops needed. Trend-following strategies perform better.</li>' +
        '<li><strong>VIX 30+:</strong> Crisis levels. Extreme volatility. Position sizes must be reduced significantly.</li></ul>' +
        '<p><strong>VIX has mean-reverting properties:</strong> After spikes, VIX tends to decline over time. After prolonged lows, it tends to spike. This creates trading opportunities.</p>'
    },
    {
      title: 'Implied vs. Historical Volatility',
      type: 'text',
      content: '<p><strong>Implied Volatility (IV)</strong> is derived from options prices and represents the market\'s forecast of future volatility. <strong>Historical Volatility (HV)</strong> measures actual past price movement.</p>' +
        '<p>The <strong>IV Rank</strong> shows where current IV sits relative to its range over the past year. IV Rank of 80% means current IV is higher than 80% of the past year\'s readings — options are relatively expensive.</p>' +
        '<p><strong>Trading implications:</strong></p>' +
        '<ul><li><strong>IV > HV:</strong> Options are relatively expensive. Consider selling premium (selling options).</li>' +
        '<li><strong>IV < HV:</strong> Options are relatively cheap. Consider buying options for directional bets.</li>' +
        '<li><strong>IV Crush:</strong> After events like earnings, IV collapses rapidly. Buying options before earnings is expensive because IV is high. Even if you guess the direction correctly, IV crush can still cause your option to lose value.</li></ul>'
    }
  ],
  quiz: [
    { question: 'A VIX reading of 35 indicates:', options: ['Low volatility','Normal conditions','Elevated fear and large expected price swings','That the market is closed'], correct: 2, explanation: 'VIX above 30 indicates crisis-level fear with expectations of large price swings. Traders should reduce position sizes and widen stops in this environment.' },
    { question: 'What is "IV Crush"?', options: ['A sudden rise in implied volatility','A rapid decline in implied volatility after an anticipated event','A type of chart pattern','When historical volatility exceeds implied volatility'], correct: 1, explanation: 'IV crush occurs when implied volatility drops sharply after an anticipated event (like earnings), causing option premiums to decline even if the stock moves in your direction.' }
  ]
},

// ── E5: Event-Driven Strategies ──
{
  id: 'event-driven-strategies',
  title: 'Event-Driven Strategies',
  subtitle: 'Trading earnings, FOMC, and catalysts',
  duration: '18 min',
  sections: [
    {
      title: 'Earnings Season Trading',
      type: 'text',
      content: '<p>Earnings reports create some of the most volatile and tradeable moves in the market. Here\'s how professionals approach them:</p>' +
        '<p><strong>Pre-Earnings:</strong></p>' +
        '<ul><li>IV rises as the earnings date approaches. Options become expensive.</li>' +
        '<li>Stocks often "run up" into earnings on speculation.</li>' +
        '<li><strong>Strategy:</strong> Trade the run-up, not the event. Exit before the announcement to avoid binary risk.</li></ul>' +
        '<p><strong>Post-Earnings:</strong></p>' +
        '<ul><li>The stock gaps up or down based on results vs. expectations.</li>' +
        '<li><strong>Earnings Gap & Go:</strong> If a stock gaps up on strong earnings with high volume, buy the first pullback. The gap often continues higher on the next few days.</li>' +
        '<li><strong>Earnings Gap Fade:</strong> If a stock gaps up/down but reverses within the first 30 minutes on declining volume, trade the reversal back toward the prior close.</li></ul>'
    },
    {
      title: 'FOMC and Macro Events',
      type: 'text',
      content: '<p><strong>FOMC (Federal Open Market Committee)</strong> interest rate decisions are among the highest-impact market events. Held 8 times per year.</p>' +
        '<p><strong>How to trade FOMC days:</strong></p>' +
        '<ul><li><strong>Before the announcement (2:00 PM ET):</strong> Markets often drift sideways with declining volume as traders wait. Avoid new positions.</li>' +
        '<li><strong>The announcement:</strong> Expect extreme volatility in both directions. The initial move is often a "head fake" that reverses. Do NOT trade the initial spike.</li>' +
        '<li><strong>The press conference (2:30 PM ET):</strong> Fed Chair\'s tone creates additional moves. The real direction often emerges here.</li>' +
        '<li><strong>After 3:00 PM ET:</strong> Once the dust settles, look for the real trend to emerge. This is the safest time to trade FOMC directional moves.</li></ul>' +
        '<p>Other macro events: CPI/PPI (inflation data), Non-Farm Payrolls (jobs report), GDP releases. All follow similar volatility patterns.</p>'
    }
  ],
  quiz: [
    { question: 'Why is the initial FOMC move often a "head fake"?', options: ['The Fed releases false information first','Algorithms rapidly test both directions, triggering stops on both sides before the real move emerges','The market is closed during the announcement','Only retail traders are active'], correct: 1, explanation: 'The initial FOMC reaction is driven by algorithms rapidly parsing the statement and testing both directions, triggering stops on both sides. The real directional move typically emerges after the whipsaw settles.' },
    { question: 'What happens to IV before an earnings announcement?', options: ['It drops significantly','It stays flat','It rises as the event approaches','It becomes unpredictable'], correct: 2, explanation: 'Implied volatility rises before earnings as the market prices in the uncertainty of the binary event. This makes options more expensive pre-earnings.' }
  ]
},

// ── E6: Trading Psychology Mastery ──
{
  id: 'trading-psychology-mastery',
  title: 'Trading Psychology Mastery',
  subtitle: 'The final edge is between your ears',
  duration: '22 min',
  sections: [
    {
      title: 'Cognitive Biases in Trading',
      type: 'text',
      content: '<p>Your brain is wired to lose money in markets. Understanding these biases is the first step to defeating them:</p>' +
        '<ul><li><strong>Loss Aversion</strong> — Losses feel 2.5x more painful than equivalent gains feel good. This makes you hold losers too long (hoping they\'ll recover) and cut winners too soon (to lock in the good feeling). The fix: predefined stops and targets.</li>' +
        '<li><strong>Confirmation Bias</strong> — You seek information that confirms your existing position and ignore contradicting evidence. If you\'re long, you only see bullish signals. The fix: actively look for reasons your trade is wrong.</li>' +
        '<li><strong>Recency Bias</strong> — You overweight recent events. After 3 winning trades, you feel invincible. After 3 losses, you doubt your entire system. The fix: evaluate over 50-100+ trade samples, not 3-5.</li>' +
        '<li><strong>Anchoring</strong> — You fixate on a specific price (your entry, a round number, the day\'s high). The market doesn\'t care about your anchor. The fix: make decisions based on current price action, not anchored reference points.</li>' +
        '<li><strong>Sunk Cost Fallacy</strong> — "I\'ve already lost $500 on this trade, I can\'t close it now." Past losses are irrelevant to the current decision. The fix: ask "Would I enter this trade right now at this price?" If no, exit.</li></ul>'
    },
    {
      title: 'The Professional Mindset',
      type: 'key-points',
      content: '<ul><li><strong>Think in probabilities.</strong> Any single trade is meaningless. Only the aggregate of 100+ trades matters. A 55% win rate means you WILL lose 45 out of every 100 trades. This is expected and acceptable.</li>' +
        '<li><strong>Separate your identity from your P&L.</strong> A losing day doesn\'t make you a bad trader. A winning day doesn\'t make you a good one. Judge yourself on process adherence.</li>' +
        '<li><strong>Develop a pre-market routine.</strong> Review key levels, check the economic calendar, scan for setups. A structured start leads to disciplined execution.</li>' +
        '<li><strong>Practice mindfulness.</strong> Even 10 minutes of meditation before trading improves focus, reduces reactive decisions, and helps you recognize emotional states in real time.</li>' +
        '<li><strong>Keep a detailed journal.</strong> Track not just trades but emotions, physical state (sleep, exercise), and market conditions. Patterns will emerge that help you optimize when and how you trade.</li></ul>'
    }
  ],
  quiz: [
    { question: 'What is "loss aversion" in trading?', options: ['Avoiding all trades to prevent losses','The psychological tendency for losses to feel 2.5x more painful than equivalent gains','Always using stop losses','Trading only risk-free investments'], correct: 1, explanation: 'Loss aversion is a well-documented cognitive bias where the pain of losing is roughly 2.5x stronger than the pleasure of an equivalent gain. This causes traders to hold losers and cut winners prematurely.' },
    { question: 'How should you evaluate your trading performance?', options: ['After every single trade','Over a sample of 50-100+ trades','Only after winning trades','Monthly at most'], correct: 1, explanation: 'Statistical significance requires large sample sizes. Evaluating your system over 50-100+ trades gives you a meaningful picture. Judging after 3-5 trades is statistically meaningless.' }
  ]
},

// ── E7: Tax & Legal Considerations ──
{
  id: 'tax-legal-considerations',
  title: 'Tax & Legal Considerations',
  subtitle: 'Keep more of what you earn',
  duration: '16 min',
  sections: [
    {
      title: 'Tax Treatment of Day Trading',
      type: 'text',
      content: '<p>In the U.S., day trading profits are taxed as <strong>short-term capital gains</strong> (same as ordinary income) because positions are held for less than one year. Tax rates range from 10% to 37% depending on your bracket.</p>' +
        '<p><strong>Section 475(f) Mark-to-Market Election:</strong> If you qualify as a "trader" (not just an "investor") by the IRS, you can elect Section 475 mark-to-market accounting. Benefits include:</p>' +
        '<ul><li><strong>Losses are treated as ordinary losses</strong>, not capital losses. This means there is no $3,000 annual cap on deducting losses.</li>' +
        '<li>All positions are "marked to market" at year-end — treated as if sold on Dec 31, even if held.</li>' +
        '<li>Business expense deductions become available (home office, equipment, software, data feeds, education).</li></ul>' +
        '<p><strong>Important:</strong> The 475(f) election must be filed <strong>by April 15 of the tax year you want it to apply</strong> (or within 75 days of forming a new entity). Consult a tax professional experienced with trader taxation.</p>'
    },
    {
      title: 'Entity Structure',
      type: 'tip',
      content: '<p>Many professional day traders trade through an <strong>LLC or S-Corp</strong> rather than as an individual. Benefits include:</p>' +
        '<ul><li><strong>Self-employment tax savings</strong> with an S-Corp (only salary is subject to SE tax, not all profits).</li>' +
        '<li><strong>Cleaner business expense deductions</strong> (computers, monitors, software subscriptions, education).</li>' +
        '<li><strong>Liability protection</strong> — separates personal assets from trading activities.</li>' +
        '<li><strong>Easier 475(f) election</strong> — a new LLC can make the election when formed, bypassing the April 15 deadline issue.</li></ul>' +
        '<p>The most common structure: <strong>LLC taxed as an S-Corp</strong> with the 475(f) election. This combines the liability protection of an LLC, the tax efficiency of an S-Corp, and the unlimited loss deduction of mark-to-market accounting.</p>'
    }
  ],
  quiz: [
    { question: 'What is the benefit of Section 475(f) Mark-to-Market election?', options: ['Zero taxes on trading income','Losses are treated as ordinary losses with no $3,000 annual cap','You can trade tax-free in an IRA','Lower capital gains tax rates'], correct: 1, explanation: 'Section 475(f) converts capital losses into ordinary losses, removing the $3,000 annual cap on loss deductions. This is critical for traders who may have large losing years followed by profitable ones.' },
    { question: 'When must the Section 475(f) election be filed?', options: ['Any time during the year','By April 15 of the year you want it to apply','After your first profitable year','By December 31'], correct: 1, explanation: 'The 475(f) election must be filed by April 15 of the tax year you want it to begin. Missing this deadline means waiting until the next year (or forming a new entity).' }
  ]
},

// ── E8: Building a Trading Business ──
{
  id: 'building-trading-business',
  title: 'Building a Trading Business',
  subtitle: 'From hobby to profession',
  duration: '18 min',
  sections: [
    {
      title: 'Capitalization Requirements',
      type: 'text',
      content: '<p>Undercapitalization is the #1 reason traders fail. Here are realistic capital requirements:</p>' +
        '<ul><li><strong>Minimum to day trade stocks:</strong> $25,000 (PDT rule minimum). Realistically, $30,000-$50,000 provides a comfortable buffer above the PDT minimum.</li>' +
        '<li><strong>Minimum to trade full-time:</strong> Most professionals recommend <strong>12-24 months of living expenses saved</strong> PLUS your trading capital. This removes the pressure of needing to make money immediately.</li>' +
        '<li><strong>Expected returns:</strong> Consistently profitable day traders typically earn <strong>3-10% per month</strong> on their capital. On a $50,000 account, that is $1,500-$5,000/month. Adjust expectations accordingly.</li></ul>' +
        '<p><strong>The transition plan:</strong> Start part-time while employed. Build your account and skills for 1-2 years. Only go full-time when you have a proven track record of 6+ months of consistent profitability.</p>'
    },
    {
      title: 'Operational Framework',
      type: 'key-points',
      content: '<ul><li><strong>Daily routine:</strong> Pre-market research (6:30 AM), trading session (9:30 AM - 12:00 PM or 9:30 AM - 4:00 PM), journaling (4:00-4:30 PM), review (evening).</li>' +
        '<li><strong>Record keeping:</strong> Every trade logged with screenshots. Monthly P&L statements. Quarterly review of strategy performance.</li>' +
        '<li><strong>Risk controls:</strong> Daily max loss, weekly max loss, monthly max drawdown. When any is hit, reduce size or stop trading.</li>' +
        '<li><strong>Health:</strong> Regular exercise, adequate sleep (7-8 hours), proper nutrition. Cognitive performance directly impacts trading performance.</li>' +
        '<li><strong>Community:</strong> Find a trading community or mentor. Isolation leads to poor decision-making. Accountability improves discipline.</li>' +
        '<li><strong>Continuous education:</strong> Markets evolve. Strategies that worked last year may not work this year. Budget time and money for ongoing learning.</li></ul>'
    }
  ],
  quiz: [
    { question: 'How much living expense savings should you have before going full-time?', options: ['1-2 months','3-6 months','12-24 months','No savings needed if your account is large enough'], correct: 2, explanation: 'Having 12-24 months of living expenses saved removes the pressure of needing to profit immediately, which dramatically improves decision-making and reduces emotional trading.' },
    { question: 'What is a realistic monthly return expectation for a consistently profitable day trader?', options: ['20-50% per month','3-10% per month','50-100% per month','1% per year'], correct: 1, explanation: 'Consistently profitable day traders typically earn 3-10% per month on their capital. Claims of higher returns are either unsustainable or misleading.' }
  ]
}

  ] // end expert lessons
}

]; // end window.CONTENT
