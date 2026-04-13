// ============================================================
// ProgressTracker — localStorage-based progress tracking
// ============================================================

class ProgressTracker {
  constructor() {
    this.storageKey = 'trading-academy-progress';
    this.data = this.load();
  }

  load() {
    try {
      const saved = localStorage.getItem(this.storageKey);
      if (saved) return JSON.parse(saved);
    } catch (e) { /* ignore parse errors */ }
    return {
      lessons: {},
      simulator: {
        prediction: { gamesPlayed: 0, correct: 0, bestStreak: 0 },
        pattern: { gamesPlayed: 0, correct: 0 },
        risk: { gamesPlayed: 0, correct: 0 }
      },
      lastLesson: null,
      streak: { count: 0, lastDate: null },
      totalTimeSpent: 0
    };
  }

  save() {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.data));
    } catch (e) { /* storage full or blocked */ }
  }

  getLessonProgress(levelId, lessonId) {
    const key = `${levelId}:${lessonId}`;
    return this.data.lessons[key] || { completed: false, quizScore: null, lastAccessed: null };
  }

  markLessonComplete(levelId, lessonId) {
    const key = `${levelId}:${lessonId}`;
    if (!this.data.lessons[key]) this.data.lessons[key] = {};
    this.data.lessons[key].completed = true;
    this.data.lessons[key].lastAccessed = new Date().toISOString();
    this.updateStreak();
    this.save();
  }

  saveQuizScore(levelId, lessonId, score) {
    const key = `${levelId}:${lessonId}`;
    if (!this.data.lessons[key]) this.data.lessons[key] = {};
    this.data.lessons[key].quizScore = score;
    this.data.lessons[key].lastAccessed = new Date().toISOString();
    if (score >= 70) this.data.lessons[key].completed = true;
    this.updateStreak();
    this.save();
  }

  getLevelProgress(levelId) {
    const level = window.CONTENT ? window.CONTENT.find(l => l.id === levelId) : null;
    if (!level) return { completed: 0, total: 0, percentage: 0 };
    const total = level.lessons.length;
    let completed = 0;
    for (const lesson of level.lessons) {
      const p = this.getLessonProgress(levelId, lesson.id);
      if (p.completed) completed++;
    }
    return { completed, total, percentage: total > 0 ? Math.round((completed / total) * 100) : 0 };
  }

  getOverallProgress() {
    if (!window.CONTENT) return { completed: 0, total: 0, percentage: 0, levels: {} };
    let totalLessons = 0;
    let completedLessons = 0;
    const levels = {};
    for (const level of window.CONTENT) {
      const lp = this.getLevelProgress(level.id);
      levels[level.id] = lp;
      totalLessons += lp.total;
      completedLessons += lp.completed;
    }
    return {
      completed: completedLessons,
      total: totalLessons,
      percentage: totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0,
      levels
    };
  }

  getSimulatorStats() {
    const p = this.data.simulator.prediction;
    return {
      gamesPlayed: p.gamesPlayed,
      correctPredictions: p.correct,
      winRate: p.gamesPlayed > 0 ? Math.round((p.correct / p.gamesPlayed) * 100) : 0,
      bestStreak: p.bestStreak || 0
    };
  }

  updateSimulatorStats(correct) {
    this.data.simulator.prediction.gamesPlayed++;
    if (correct) this.data.simulator.prediction.correct++;
    this.save();
  }

  updateSimulatorBestStreak(streak) {
    if (streak > (this.data.simulator.prediction.bestStreak || 0)) {
      this.data.simulator.prediction.bestStreak = streak;
    }
    this.save();
  }

  getPatternGameStats() {
    const p = this.data.simulator.pattern;
    return {
      gamesPlayed: p.gamesPlayed,
      correct: p.correct,
      winRate: p.gamesPlayed > 0 ? Math.round((p.correct / p.gamesPlayed) * 100) : 0
    };
  }

  updatePatternGameStats(correct) {
    this.data.simulator.pattern.gamesPlayed++;
    if (correct) this.data.simulator.pattern.correct++;
    this.save();
  }

  getRiskGameStats() {
    const p = this.data.simulator.risk;
    return {
      gamesPlayed: p.gamesPlayed,
      correct: p.correct,
      winRate: p.gamesPlayed > 0 ? Math.round((p.correct / p.gamesPlayed) * 100) : 0
    };
  }

  updateRiskGameStats(correct) {
    this.data.simulator.risk.gamesPlayed++;
    if (correct) this.data.simulator.risk.correct++;
    this.save();
  }

  getLastLesson() {
    return this.data.lastLesson;
  }

  setLastLesson(levelId, lessonId) {
    this.data.lastLesson = { levelId, lessonId };
    this.save();
  }

  updateStreak() {
    const today = new Date().toISOString().split('T')[0];
    if (this.data.streak.lastDate === today) return;
    const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
    if (this.data.streak.lastDate === yesterday) {
      this.data.streak.count++;
    } else if (this.data.streak.lastDate !== today) {
      this.data.streak.count = 1;
    }
    this.data.streak.lastDate = today;
    this.save();
  }

  getStreak() {
    const today = new Date().toISOString().split('T')[0];
    const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
    if (this.data.streak.lastDate === today || this.data.streak.lastDate === yesterday) {
      return this.data.streak.count;
    }
    return 0;
  }

  getCurrentLevel() {
    if (!window.CONTENT) return 'beginner';
    for (const level of window.CONTENT) {
      const progress = this.getLevelProgress(level.id);
      if (progress.percentage < 100) return level.id;
    }
    return 'expert';
  }

  getNextLesson() {
    if (!window.CONTENT) return null;
    for (const level of window.CONTENT) {
      for (const lesson of level.lessons) {
        const p = this.getLessonProgress(level.id, lesson.id);
        if (!p.completed) return { levelId: level.id, lessonId: lesson.id };
      }
    }
    return null;
  }

  getCombinedSimStats() {
    const pred = this.data.simulator.prediction;
    const pat = this.data.simulator.pattern;
    const risk = this.data.simulator.risk;
    const totalGames = pred.gamesPlayed + pat.gamesPlayed + risk.gamesPlayed;
    const totalCorrect = pred.correct + pat.correct + risk.correct;
    return {
      totalGames,
      winRate: totalGames > 0 ? Math.round((totalCorrect / totalGames) * 100) : 0,
      bestStreak: pred.bestStreak || 0
    };
  }
}

window.ProgressTracker = ProgressTracker;
