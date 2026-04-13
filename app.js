// ============================================================
// Main App Controller — ties everything together
// ============================================================
(function () {
  'use strict';

  const App = {
    currentView: 'dashboard',
    currentLevelId: null,
    currentLessonId: null,
    currentLevelData: null,
    currentLessonData: null,
    currentSectionIndex: 0,
    quizState: null,
    progress: null,
    simulator: null,
    currentGame: null,

    init() {
      this.progress = new window.ProgressTracker();
      this.simulator = new window.MarketSimulator();
      this.bindNav();
      this.bindEvents();
      this.bindGameEvents();
      this.renderDashboard();
      this.updateNavProgress();
      this.drawHeroChart();
    },

    /* ====== NAVIGATION ====== */

    bindNav() {
      document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
          const view = link.dataset.view;
          if (view) this.navigate(view);
        });
      });
      document.querySelector('.nav-logo').addEventListener('click', () => this.navigate('dashboard'));
    },

    navigate(view, params) {
      params = params || {};
      document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
      document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));

      const el = document.getElementById('view-' + view);
      if (el) { el.classList.add('active'); el.scrollTop = 0; }
      window.scrollTo(0, 0);

      const navMap = { dashboard:'dashboard', learn:'learn', level:'learn', lesson:'learn',
        quiz:'learn', 'quiz-results':'learn', simulator:'simulator',
        'game-prediction':'simulator', 'game-pattern':'simulator',
        'game-risk':'simulator', 'game-over':'simulator' };
      const navLink = document.querySelector('.nav-link[data-view="' + (navMap[view]||view) + '"]');
      if (navLink) navLink.classList.add('active');

      this.currentView = view;
      switch (view) {
        case 'dashboard': this.renderDashboard(); break;
        case 'learn': this.renderLearn(); break;
        case 'level': this.renderLevel(params.levelId); break;
        case 'lesson': this.renderLesson(params.levelId, params.lessonId); break;
        case 'quiz': this.startQuiz(params.levelId, params.lessonId); break;
        case 'simulator': this.renderSimulator(); break;
        case 'game-prediction': this.startPredictionGame(); break;
        case 'game-pattern': this.startPatternGame(); break;
        case 'game-risk': this.startRiskGame(); break;
      }
    },

    /* ====== DASHBOARD ====== */

    renderDashboard() {
      var overall = this.progress.getOverallProgress();
      var simStats = this.progress.getCombinedSimStats();
      var streak = this.progress.getStreak();
      var currentLevel = this.progress.getCurrentLevel();
      var levelData = window.CONTENT.find(function(l){return l.id===currentLevel;});

      document.getElementById('stat-lessons').textContent = overall.completed + '/' + overall.total;
      document.getElementById('stat-level').textContent = levelData ? levelData.name : 'Beginner';
      document.getElementById('stat-streak').textContent = streak;
      document.getElementById('stat-winrate').textContent = simStats.winRate + '%';

      this.renderContinueSection();
      this.renderLevelProgressBars();
      this.updateNavProgress();
    },

    renderContinueSection() {
      var container = document.getElementById('continue-content');
      var last = this.progress.getLastLesson();
      var level, lesson;
      if (last) {
        level = window.CONTENT.find(function(l){return l.id===last.levelId;});
        lesson = level ? level.lessons.find(function(ls){return ls.id===last.lessonId;}) : null;
      }
      if (level && lesson) {
        container.innerHTML = '<div class="continue-item"><div class="continue-info">' +
          '<span class="continue-level" style="color:'+level.color+'">'+level.name+'</span>' +
          '<span class="continue-title">'+lesson.title+'</span>' +
          '<span class="continue-subtitle">'+lesson.subtitle+'</span></div>' +
          '<button class="btn btn-primary btn-sm">Continue</button></div>';
        var self = this;
        container.querySelector('.continue-item').addEventListener('click', function(){
          self.navigate('lesson', {levelId:last.levelId, lessonId:last.lessonId});
        });
        return;
      }
      var next = this.progress.getNextLesson();
      if (next) {
        level = window.CONTENT.find(function(l){return l.id===next.levelId;});
        lesson = level.lessons.find(function(ls){return ls.id===next.lessonId;});
        container.innerHTML = '<div class="continue-item"><div class="continue-info">' +
          '<span class="continue-level" style="color:'+level.color+'">'+level.name+'</span>' +
          '<span class="continue-title">'+lesson.title+'</span>' +
          '<span class="continue-subtitle">'+lesson.subtitle+'</span></div>' +
          '<button class="btn btn-primary btn-sm">Start</button></div>';
        var self2 = this;
        container.querySelector('.continue-item').addEventListener('click', function(){
          self2.navigate('lesson', {levelId:next.levelId, lessonId:next.lessonId});
        });
      } else {
        container.innerHTML = '<p class="muted">All lessons complete! Try the simulator.</p>';
      }
    },

    renderLevelProgressBars() {
      var container = document.getElementById('level-progress-bars');
      container.innerHTML = '';
      var self = this;
      window.CONTENT.forEach(function(level) {
        var p = self.progress.getLevelProgress(level.id);
        var bar = document.createElement('div');
        bar.className = 'level-bar-row';
        bar.innerHTML = '<span class="level-bar-label">'+level.name+'</span>' +
          '<div class="level-bar-track"><div class="level-bar-fill" style="width:'+p.percentage+'%;background:'+level.color+'"></div></div>' +
          '<span class="level-bar-value">'+p.completed+'/'+p.total+'</span>';
        bar.addEventListener('click', function(){ self.navigate('level', {levelId:level.id}); });
        container.appendChild(bar);
      });
    },

    updateNavProgress() {
      var overall = this.progress.getOverallProgress();
      var circle = document.querySelector('.progress-ring-fill');
      var text = document.querySelector('.progress-ring-text');
      var circumference = 2 * Math.PI * 15;
      circle.style.strokeDashoffset = circumference - (overall.percentage / 100) * circumference;
      text.textContent = overall.percentage + '%';
    },

    /* ====== LEARN VIEW ====== */

    renderLearn() {
      var grid = document.getElementById('levels-grid');
      grid.innerHTML = '';
      var self = this;
      window.CONTENT.forEach(function(level) {
        var p = self.progress.getLevelProgress(level.id);
        var card = document.createElement('div');
        card.className = 'level-card';
        card.style.setProperty('--level-color', level.color);
        var btnLabel = p.percentage === 0 ? 'Start Learning' : p.percentage === 100 ? 'Review' : 'Continue';
        card.innerHTML = '<div class="level-card-header"><div class="level-card-badge" style="background:'+level.color+'">'+level.name+'</div>' +
          '<span class="level-card-count">'+p.completed+'/'+p.total+' lessons</span></div>' +
          '<h3>'+level.subtitle+'</h3><p>'+level.description+'</p>' +
          '<div class="level-card-progress"><div class="level-card-progress-track">' +
          '<div class="level-card-progress-fill" style="width:'+p.percentage+'%;background:'+level.color+'"></div></div>' +
          '<span>'+p.percentage+'%</span></div>' +
          '<button class="btn btn-primary btn-sm" style="background:'+level.color+'">'+btnLabel+'</button>';
        card.addEventListener('click', function(){ self.navigate('level', {levelId:level.id}); });
        grid.appendChild(card);
      });
    },

    /* ====== LEVEL VIEW ====== */

    renderLevel(levelId) {
      this.currentLevelId = levelId;
      var level = window.CONTENT.find(function(l){return l.id===levelId;});
      if (!level) return;
      this.currentLevelData = level;

      var header = document.getElementById('level-header');
      var p = this.progress.getLevelProgress(levelId);
      header.innerHTML = '<div class="level-header-info"><div class="level-badge" style="background:'+level.color+'">'+level.name+'</div>' +
        '<h2>'+level.subtitle+'</h2><p>'+level.description+'</p>' +
        '<div class="level-header-progress"><div class="level-header-progress-track">' +
        '<div class="level-header-progress-fill" style="width:'+p.percentage+'%;background:'+level.color+'"></div></div>' +
        '<span>'+p.completed+' of '+p.total+' lessons completed</span></div></div>';

      var list = document.getElementById('lessons-list');
      list.innerHTML = '';
      var self = this;
      level.lessons.forEach(function(lesson, index) {
        var lp = self.progress.getLessonProgress(levelId, lesson.id);
        var item = document.createElement('div');
        item.className = 'lesson-item' + (lp.completed ? ' completed' : '');
        item.style.animationDelay = (index * 0.05) + 's';
        var numStyle = lp.completed ? 'border-color:'+level.color+';background:'+level.color : 'border-color:rgba(255,255,255,0.1)';
        var numContent = lp.completed ? '<svg viewBox="0 0 24 24" width="16" height="16"><path d="M20 6L9 17l-5-5" stroke="white" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>' : (index+1);
        var scoreBadge = lp.quizScore !== null ? '<span class="lesson-item-score" style="color:'+(lp.quizScore>=70?'#10b981':'#f59e0b')+'">'+lp.quizScore+'%</span>' : '';
        item.innerHTML = '<div class="lesson-item-number" style="'+numStyle+'">'+numContent+'</div>' +
          '<div class="lesson-item-info"><span class="lesson-item-title">'+lesson.title+'</span>' +
          '<span class="lesson-item-subtitle">'+lesson.subtitle+'</span></div>' +
          '<div class="lesson-item-meta"><span class="lesson-item-duration">'+lesson.duration+'</span>'+scoreBadge+'</div>';
        item.addEventListener('click', function(){ self.navigate('lesson', {levelId:levelId, lessonId:lesson.id}); });
        list.appendChild(item);
      });

      document.getElementById('btn-back-learn').onclick = function(){ self.navigate('learn'); };
    },

    /* ====== LESSON VIEW ====== */

    renderLesson(levelId, lessonId) {
      var level = window.CONTENT.find(function(l){return l.id===levelId;});
      var lesson = level ? level.lessons.find(function(ls){return ls.id===lessonId;}) : null;
      if (!level || !lesson) return;

      this.currentLevelId = levelId;
      this.currentLessonId = lessonId;
      this.currentLevelData = level;
      this.currentLessonData = lesson;
      this.currentSectionIndex = 0;
      this.progress.setLastLesson(levelId, lessonId);
      this.renderSection();

      var self = this;
      document.getElementById('btn-back-level').onclick = function(){ self.navigate('level', {levelId:levelId}); };
    },

    renderSection() {
      var lesson = this.currentLessonData;
      var section = lesson.sections[this.currentSectionIndex];
      var body = document.getElementById('lesson-body');

      var typeIcons = {
        'text': '',
        'key-points': '<svg viewBox="0 0 24 24" width="20" height="20"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2" stroke="currentColor" stroke-width="2" fill="none"/></svg>',
        'warning': '<svg viewBox="0 0 24 24" width="20" height="20"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" stroke="currentColor" stroke-width="2" fill="none"/><line x1="12" y1="9" x2="12" y2="13" stroke="currentColor" stroke-width="2"/><line x1="12" y1="17" x2="12.01" y2="17" stroke="currentColor" stroke-width="2"/></svg>',
        'tip': '<svg viewBox="0 0 24 24" width="20" height="20"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="none"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" stroke="currentColor" stroke-width="2" fill="none"/><line x1="12" y1="17" x2="12.01" y2="17" stroke="currentColor" stroke-width="2"/></svg>',
        'example': '<svg viewBox="0 0 24 24" width="20" height="20"><rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" stroke-width="2" fill="none"/><line x1="8" y1="21" x2="16" y2="21" stroke="currentColor" stroke-width="2"/><line x1="12" y1="17" x2="12" y2="21" stroke="currentColor" stroke-width="2"/></svg>',
        'definition': '<svg viewBox="0 0 24 24" width="20" height="20"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke="currentColor" stroke-width="2" fill="none"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" stroke="currentColor" stroke-width="2" fill="none"/></svg>'
      };

      body.innerHTML = '<div class="lesson-section-header">' +
        '<span class="lesson-level-badge" style="color:'+this.currentLevelData.color+'">'+this.currentLevelData.name+'</span>' +
        '<h1 class="lesson-title">'+lesson.title+'</h1>' +
        '<span class="lesson-subtitle">'+lesson.subtitle+'</span></div>' +
        '<div class="lesson-section section-'+section.type+'">' +
        '<div class="section-type-header">'+(typeIcons[section.type]||'')+'<h2>'+section.title+'</h2></div>' +
        '<div class="section-content">'+section.content+'</div></div>';

      var totalSections = lesson.sections.length + 1;
      document.getElementById('lesson-progress-fill').style.width = ((this.currentSectionIndex + 1) / totalSections * 100) + '%';
      document.getElementById('section-counter').textContent = (this.currentSectionIndex + 1) + ' / ' + lesson.sections.length;
      document.getElementById('btn-prev-section').disabled = this.currentSectionIndex === 0;

      var nextBtn = document.getElementById('btn-next-section');
      if (this.currentSectionIndex === lesson.sections.length - 1) {
        nextBtn.textContent = lesson.quiz && lesson.quiz.length > 0 ? 'Take Quiz' : 'Complete';
        nextBtn.className = 'btn btn-primary btn-glow';
      } else {
        nextBtn.textContent = 'Next';
        nextBtn.className = 'btn btn-primary';
      }
      body.scrollTop = 0;
    },

    nextSection() {
      var lesson = this.currentLessonData;
      if (this.currentSectionIndex < lesson.sections.length - 1) {
        this.currentSectionIndex++;
        this.renderSection();
      } else if (lesson.quiz && lesson.quiz.length > 0) {
        this.navigate('quiz', { levelId: this.currentLevelId, lessonId: this.currentLessonId });
      } else {
        this.progress.markLessonComplete(this.currentLevelId, this.currentLessonId);
        this.showToast('Lesson completed!', 'success');
        this.navigate('level', { levelId: this.currentLevelId });
      }
    },

    prevSection() {
      if (this.currentSectionIndex > 0) { this.currentSectionIndex--; this.renderSection(); }
    },

    /* ====== QUIZ ====== */

    startQuiz(levelId, lessonId) {
      var level = window.CONTENT.find(function(l){return l.id===levelId;});
      var lesson = level ? level.lessons.find(function(ls){return ls.id===lessonId;}) : null;
      if (!level || !lesson || !lesson.quiz) return;
      this.currentLevelId = levelId; this.currentLessonId = lessonId;
      this.currentLevelData = level; this.currentLessonData = lesson;
      this.quizState = { questions: lesson.quiz, currentIndex: 0, score: 0, answers: [], answered: false };
      document.getElementById('quiz-title').textContent = lesson.title + ' \u2014 Quiz';
      this.renderQuizQuestion();
    },

    renderQuizQuestion() {
      var qs = this.quizState;
      var q = qs.questions[qs.currentIndex];
      qs.answered = false;
      document.getElementById('quiz-progress').textContent = (qs.currentIndex+1)+'/'+qs.questions.length;
      document.getElementById('quiz-question').textContent = q.question;
      var opts = document.getElementById('quiz-options');
      opts.innerHTML = '';
      var self = this;
      q.options.forEach(function(opt, i) {
        var btn = document.createElement('button');
        btn.className = 'quiz-option';
        btn.textContent = opt;
        btn.style.animationDelay = (i * 0.1) + 's';
        btn.addEventListener('click', function(){ self.selectQuizAnswer(i); });
        opts.appendChild(btn);
      });
      document.getElementById('quiz-feedback').innerHTML = '';
      document.getElementById('quiz-feedback').className = 'quiz-feedback';
      document.getElementById('btn-quiz-next').style.display = 'none';
    },

    selectQuizAnswer(index) {
      if (this.quizState.answered) return;
      this.quizState.answered = true;
      var q = this.quizState.questions[this.quizState.currentIndex];
      var correct = index === q.correct;
      if (correct) this.quizState.score++;
      this.quizState.answers.push({ questionIndex: this.quizState.currentIndex, selected: index, correct: correct });

      document.querySelectorAll('.quiz-option').forEach(function(opt, i) {
        opt.classList.add('disabled');
        if (i === q.correct) opt.classList.add('correct');
        else if (i === index && !correct) opt.classList.add('incorrect');
      });

      var feedback = document.getElementById('quiz-feedback');
      feedback.className = 'quiz-feedback ' + (correct ? 'feedback-correct' : 'feedback-incorrect');
      feedback.innerHTML = '<strong>'+(correct?'Correct!':'Incorrect')+'</strong><p>'+q.explanation+'</p>';

      var nextBtn = document.getElementById('btn-quiz-next');
      nextBtn.style.display = 'inline-flex';
      nextBtn.textContent = this.quizState.currentIndex === this.quizState.questions.length - 1 ? 'See Results' : 'Next Question';
    },

    nextQuizQuestion() {
      if (this.quizState.currentIndex < this.quizState.questions.length - 1) {
        this.quizState.currentIndex++;
        this.renderQuizQuestion();
      } else {
        this.showQuizResults();
      }
    },

    showQuizResults() {
      var score = Math.round((this.quizState.score / this.quizState.questions.length) * 100);
      this.progress.saveQuizScore(this.currentLevelId, this.currentLessonId, score);
      this.navigate('quiz-results');

      setTimeout(function() {
        var circle = document.querySelector('.results-ring-fill');
        var circumference = 2 * Math.PI * 54;
        circle.style.transition = 'stroke-dashoffset 1.5s ease-out';
        circle.style.strokeDashoffset = circumference - (score / 100) * circumference;
        circle.style.stroke = score >= 70 ? '#10b981' : score >= 50 ? '#f59e0b' : '#ef4444';
      }, 100);

      document.getElementById('results-score').textContent = score + '%';
      var msg, det;
      if (score >= 90) { msg='Outstanding!'; det='You have an excellent grasp of this material.'; }
      else if (score >= 70) { msg='Great job!'; det='You passed! Keep up the good work.'; }
      else if (score >= 50) { msg='Almost there!'; det='Review the material and try again.'; }
      else { msg='Keep practicing!'; det='Review the lesson material before retrying.'; }
      document.getElementById('results-message').textContent = msg;
      document.getElementById('results-detail').textContent = det;

      var self = this;
      document.getElementById('btn-retry-quiz').onclick = function(){
        var c = document.querySelector('.results-ring-fill');
        c.style.transition='none'; c.style.strokeDashoffset = 2*Math.PI*54;
        self.navigate('quiz', {levelId:self.currentLevelId, lessonId:self.currentLessonId});
      };
      document.getElementById('btn-next-lesson').onclick = function(){
        var lvl = window.CONTENT.find(function(l){return l.id===self.currentLevelId;});
        var idx = lvl.lessons.findIndex(function(ls){return ls.id===self.currentLessonId;});
        if (idx < lvl.lessons.length - 1) {
          self.navigate('lesson', {levelId:self.currentLevelId, lessonId:lvl.lessons[idx+1].id});
        } else {
          self.showToast(lvl.name + ' level complete!', 'success');
          self.navigate('level', {levelId:self.currentLevelId});
        }
      };
      this.updateNavProgress();
    },

    /* ====== SIMULATOR ====== */

    renderSimulator() {
      var combined = this.progress.getCombinedSimStats();
      var pred = this.progress.getSimulatorStats();
      var pat = this.progress.getPatternGameStats();
      var risk = this.progress.getRiskGameStats();
      document.getElementById('sim-total-games').textContent = combined.totalGames;
      document.getElementById('sim-overall-winrate').textContent = combined.winRate + '%';
      document.getElementById('sim-best-streak').textContent = combined.bestStreak;
      document.getElementById('prediction-games').textContent = pred.gamesPlayed + ' games';
      document.getElementById('prediction-winrate').textContent = pred.winRate + '% win rate';
      document.getElementById('pattern-games').textContent = pat.gamesPlayed + ' games';
      document.getElementById('pattern-winrate').textContent = pat.winRate + '% win rate';
      document.getElementById('risk-games').textContent = risk.gamesPlayed + ' games';
      document.getElementById('risk-winrate').textContent = risk.winRate + '% win rate';
    },

    /* ====== PREDICTION GAME ====== */

    startPredictionGame() {
      this.currentGame = 'prediction';
      this.simulator.startPredictionGame('prediction-canvas');
      this.updatePredictionUI();
    },

    updatePredictionUI() {
      var s = this.simulator.predictionState; if (!s) return;
      document.getElementById('pred-round').textContent = 'Round ' + s.round + '/' + s.totalRounds;
      document.getElementById('pred-score').textContent = 'Score: ' + s.score;
      document.getElementById('pred-streak').textContent = s.streak > 1 ? '\uD83D\uDD25 ' + s.streak : '';
      document.getElementById('pred-result').style.display = 'none';
      document.getElementById('pred-controls').style.pointerEvents = 'auto';
    },

    handlePrediction(prediction) {
      document.getElementById('pred-controls').style.pointerEvents = 'none';
      var self = this;
      var resultPromise = this.simulator.submitPrediction('prediction-canvas', prediction);

      var processResult = function(result) {
        var overlay = document.getElementById('pred-result');
        overlay.style.display = 'flex';
        document.getElementById('pred-result-icon').innerHTML = result.correct
          ? '<svg viewBox="0 0 24 24" width="48" height="48"><circle cx="12" cy="12" r="10" fill="#10b981"/><path d="M8 12l3 3 5-5" stroke="white" stroke-width="2.5" fill="none" stroke-linecap="round"/></svg>'
          : '<svg viewBox="0 0 24 24" width="48" height="48"><circle cx="12" cy="12" r="10" fill="#ef4444"/><path d="M15 9l-6 6M9 9l6 6" stroke="white" stroke-width="2.5" fill="none" stroke-linecap="round"/></svg>';
        document.getElementById('pred-result-text').textContent = result.correct ? 'Correct!' : 'Wrong!';
        document.getElementById('pred-result-detail').textContent =
          'The market went ' + (result.actualDirection === 'bull' ? 'up' : 'down') +
          ' (' + (result.priceChange > 0 ? '+' : '') + result.priceChange.toFixed(2) + '%)';

        self.progress.updateSimulatorStats(result.correct);
        if (self.simulator.predictionState) self.progress.updateSimulatorBestStreak(self.simulator.predictionState.bestStreak);

        setTimeout(function() {
          var st = self.simulator.predictionState;
          if (st && st.round <= st.totalRounds) self.updatePredictionUI();
        }, 2000);
      };

      if (resultPromise && typeof resultPromise.then === 'function') {
        resultPromise.then(processResult);
      } else {
        processResult(resultPromise);
      }
    },

    /* ====== PATTERN GAME ====== */

    startPatternGame() {
      this.currentGame = 'pattern';
      this.simulator.startPatternGame('pattern-canvas');
      var rd = this.simulator.loadPatternRound('pattern-canvas');
      this.renderPatternOptions(rd);
      this.updatePatternUI();
    },

    updatePatternUI() {
      var s = this.simulator.patternState; if (!s) return;
      document.getElementById('pattern-round').textContent = 'Round '+s.round+'/'+s.totalRounds;
      document.getElementById('pattern-score').textContent = 'Score: '+s.score;
      document.getElementById('pattern-result').style.display = 'none';
    },

    renderPatternOptions(roundData) {
      var container = document.getElementById('pattern-options');
      container.innerHTML = '';
      var self = this;
      roundData.options.forEach(function(opt, i) {
        var btn = document.createElement('button');
        btn.className = 'btn btn-secondary pattern-option-btn';
        btn.textContent = opt;
        btn.addEventListener('click', function(){ self.handlePatternAnswer(i); });
        container.appendChild(btn);
      });
    },

    handlePatternAnswer(index) {
      var correctIdx = this.simulator.patternState ? this.simulator.patternState.correctIndex : -1;
      var result = this.simulator.submitPatternAnswer('pattern-canvas', index);
      if (!result) return;
      document.querySelectorAll('.pattern-option-btn').forEach(function(btn, i) {
        btn.disabled = true;
        if (i === correctIdx) btn.classList.add('correct');
        if (i === index && !result.correct) btn.classList.add('incorrect');
      });

      var overlay = document.getElementById('pattern-result');
      overlay.style.display = 'flex';
      document.getElementById('pattern-result-icon').innerHTML = result.correct
        ? '<svg viewBox="0 0 24 24" width="48" height="48"><circle cx="12" cy="12" r="10" fill="#10b981"/><path d="M8 12l3 3 5-5" stroke="white" stroke-width="2.5" fill="none" stroke-linecap="round"/></svg>'
        : '<svg viewBox="0 0 24 24" width="48" height="48"><circle cx="12" cy="12" r="10" fill="#ef4444"/><path d="M15 9l-6 6M9 9l6 6" stroke="white" stroke-width="2.5" fill="none" stroke-linecap="round"/></svg>';
      document.getElementById('pattern-result-text').textContent = result.correct ? 'Correct!' : 'It was: ' + result.correctPattern;
      document.getElementById('pattern-result-detail').textContent = result.explanation;
      this.progress.updatePatternGameStats(result.correct);

      var self = this;
      setTimeout(function() {
        var st = self.simulator.patternState;
        if (st && st.round <= st.totalRounds) {
          var rd = self.simulator.loadPatternRound('pattern-canvas');
          self.renderPatternOptions(rd);
          self.updatePatternUI();
        }
      }, 2000);
    },

    /* ====== RISK GAME ====== */

    startRiskGame() {
      this.currentGame = 'risk';
      this.simulator.startRiskGame('risk-canvas');
      var scenario = this.simulator.loadRiskRound('risk-canvas');
      this.renderRiskScenario(scenario);
      this.updateRiskUI();
    },

    updateRiskUI() {
      var s = this.simulator.riskState; if (!s) return;
      document.getElementById('risk-round').textContent = 'Round '+s.round+'/'+s.totalRounds;
      document.getElementById('risk-score').textContent = 'Score: '+s.score;
      document.getElementById('risk-result').style.display = 'none';
      document.getElementById('risk-position').value = '';
      document.getElementById('risk-stoploss').value = '';
      document.getElementById('risk-takeprofit').value = '';
    },

    renderRiskScenario(scenario) {
      var container = document.getElementById('risk-scenario');
      container.innerHTML = '<div class="scenario-card"><h3>Scenario</h3><div class="scenario-details">' +
        '<div class="scenario-item"><span class="scenario-label">Account Size</span><span class="scenario-value">$'+scenario.accountSize.toLocaleString()+'</span></div>' +
        '<div class="scenario-item"><span class="scenario-label">Stock Price</span><span class="scenario-value">$'+scenario.stockPrice.toFixed(2)+'</span></div>' +
        '<div class="scenario-item"><span class="scenario-label">Direction</span><span class="scenario-value '+(scenario.direction==='long'?'text-green':'text-red')+'">'+scenario.direction.toUpperCase()+'</span></div>' +
        '<div class="scenario-item"><span class="scenario-label">Max Risk</span><span class="scenario-value">'+scenario.maxRiskPercent+'% of account</span></div>' +
        '</div><p class="scenario-instruction">Set your position size, stop loss, and take profit. Aim for at least 2:1 risk-to-reward while staying within the max risk.</p></div>';
    },

    handleRiskSubmit() {
      var pos = parseFloat(document.getElementById('risk-position').value);
      var sl = parseFloat(document.getElementById('risk-stoploss').value);
      var tp = parseFloat(document.getElementById('risk-takeprofit').value);
      if (isNaN(pos) || isNaN(sl) || isNaN(tp)) { this.showToast('Please fill in all fields', 'error'); return; }

      var result = this.simulator.submitRiskAnswer(pos, sl, tp);
      var overlay = document.getElementById('risk-result');
      overlay.style.display = 'flex';
      var isGood = result.score >= 70;
      document.getElementById('risk-result-icon').innerHTML = isGood
        ? '<svg viewBox="0 0 24 24" width="48" height="48"><circle cx="12" cy="12" r="10" fill="#10b981"/><path d="M8 12l3 3 5-5" stroke="white" stroke-width="2.5" fill="none" stroke-linecap="round"/></svg>'
        : '<svg viewBox="0 0 24 24" width="48" height="48"><circle cx="12" cy="12" r="10" fill="#f59e0b"/><path d="M12 8v4M12 16h.01" stroke="white" stroke-width="2.5" fill="none" stroke-linecap="round"/></svg>';
      document.getElementById('risk-result-text').textContent = 'Score: ' + result.score + '/100';
      document.getElementById('risk-result-detail').textContent = result.feedback;
      this.progress.updateRiskGameStats(result.score >= 70);

      var self = this;
      setTimeout(function() {
        var st = self.simulator.riskState;
        if (st && st.round <= st.totalRounds) {
          var sc = self.simulator.loadRiskRound('risk-canvas');
          self.renderRiskScenario(sc);
          self.updateRiskUI();
        }
      }, 3000);
    },

    /* ====== GAME EVENTS ====== */

    bindGameEvents() {
      var self = this;
      document.addEventListener('game-over', function(e) {
        var d = e.detail;
        self.showGameOver(d.game, d.finalScore, d.totalRounds, d.correctRounds);
      });
    },

    showGameOver(game, finalScore, totalRounds, correctRounds) {
      this.navigate('game-over');
      var pct = Math.round((correctRounds / totalRounds) * 100);
      setTimeout(function() {
        var c = document.querySelector('.game-results-ring');
        var circ = 2 * Math.PI * 54;
        c.style.transition = 'stroke-dashoffset 1.5s ease-out';
        c.style.strokeDashoffset = circ - (pct / 100) * circ;
        c.style.stroke = pct >= 70 ? '#10b981' : pct >= 50 ? '#f59e0b' : '#ef4444';
      }, 100);
      document.getElementById('game-final-score').textContent = pct + '%';
      var names = { prediction:'Bull or Bear', pattern:'Pattern Spotter', risk:'Risk Manager' };
      document.getElementById('game-over-title').textContent = (names[game]||'Game') + ' Complete!';
      document.getElementById('game-over-detail').textContent = 'You got ' + correctRounds + ' out of ' + totalRounds + ' correct. ' + (pct >= 70 ? 'Great job!' : 'Keep practicing!');

      var self = this;
      document.getElementById('btn-play-again').onclick = function(){
        var c = document.querySelector('.game-results-ring');
        c.style.transition='none'; c.style.strokeDashoffset = 2*Math.PI*54;
        self.navigate('game-'+game);
      };
      document.getElementById('btn-back-to-sims').onclick = function(){
        var c = document.querySelector('.game-results-ring');
        c.style.transition='none'; c.style.strokeDashoffset = 2*Math.PI*54;
        self.navigate('simulator');
      };
    },

    /* ====== EVENT BINDINGS ====== */

    bindEvents() {
      var self = this;
      document.getElementById('hero-cta').addEventListener('click', function(){
        var n = self.progress.getNextLesson();
        if (n) self.navigate('lesson', {levelId:n.levelId, lessonId:n.lessonId});
        else self.navigate('learn');
      });
      document.getElementById('btn-next-section').addEventListener('click', function(){ self.nextSection(); });
      document.getElementById('btn-prev-section').addEventListener('click', function(){ self.prevSection(); });
      document.getElementById('btn-quiz-next').addEventListener('click', function(){ self.nextQuizQuestion(); });
      document.querySelectorAll('.game-card').forEach(function(card){
        card.addEventListener('click', function(){ var g = card.dataset.game; if (g) self.navigate('game-'+g); });
      });
      document.getElementById('btn-bull').addEventListener('click', function(){ self.handlePrediction('bull'); });
      document.getElementById('btn-bear').addEventListener('click', function(){ self.handlePrediction('bear'); });
      document.getElementById('btn-back-sim-pred').addEventListener('click', function(){ self.navigate('simulator'); });
      document.getElementById('btn-back-sim-pattern').addEventListener('click', function(){ self.navigate('simulator'); });
      document.getElementById('btn-back-sim-risk').addEventListener('click', function(){ self.navigate('simulator'); });
      document.getElementById('btn-risk-submit').addEventListener('click', function(){ self.handleRiskSubmit(); });

      document.addEventListener('keydown', function(e) {
        if (self.currentView === 'lesson') {
          if (e.key === 'ArrowRight') self.nextSection();
          if (e.key === 'ArrowLeft') self.prevSection();
        }
      });
    },

    /* ====== HERO CHART ====== */

    drawHeroChart() {
      var container = document.getElementById('hero-chart-canvas');
      if (!container) return;
      var canvas = document.createElement('canvas');
      canvas.style.width = '100%'; canvas.style.height = '100%';
      container.appendChild(canvas);
      var dpr = window.devicePixelRatio || 1;
      canvas.width = (container.clientWidth || 400) * dpr;
      canvas.height = (container.clientHeight || 200) * dpr;
      var ctx = canvas.getContext('2d');
      ctx.scale(dpr, dpr);
      var w = container.clientWidth || 400, h = container.clientHeight || 200;

      var points = []; var y = h * 0.7;
      for (var i = 0; i < 60; i++) {
        y += (Math.random() - 0.45) * 8;
        y = Math.max(20, Math.min(h - 20, y));
        points.push({ x: (i / 59) * w, y: y });
      }
      var drawn = 0;
      var animate = function() {
        if (drawn >= points.length) return;
        drawn += 0.5;
        ctx.clearRect(0, 0, w, h);
        var gradient = ctx.createLinearGradient(0, 0, 0, h);
        gradient.addColorStop(0, 'rgba(0,212,255,0.15)');
        gradient.addColorStop(1, 'rgba(0,212,255,0)');
        ctx.beginPath(); ctx.moveTo(points[0].x, h);
        for (var j = 0; j < Math.min(drawn, points.length); j++) ctx.lineTo(points[j].x, points[j].y);
        ctx.lineTo(points[Math.min(Math.floor(drawn), points.length-1)].x, h);
        ctx.fillStyle = gradient; ctx.fill();
        ctx.beginPath(); ctx.moveTo(points[0].x, points[0].y);
        for (var k = 1; k < Math.min(drawn, points.length); k++) ctx.lineTo(points[k].x, points[k].y);
        ctx.strokeStyle = '#00d4ff'; ctx.lineWidth = 2; ctx.stroke();
        if (drawn > 1) {
          var last = Math.min(Math.floor(drawn), points.length-1);
          ctx.beginPath(); ctx.arc(points[last].x, points[last].y, 4, 0, Math.PI*2);
          ctx.fillStyle = '#00d4ff'; ctx.fill();
          ctx.beginPath(); ctx.arc(points[last].x, points[last].y, 8, 0, Math.PI*2);
          ctx.fillStyle = 'rgba(0,212,255,0.3)'; ctx.fill();
        }
        requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    },

    /* ====== TOASTS ====== */

    showToast(message, type) {
      type = type || 'info';
      var container = document.getElementById('toast-container');
      var toast = document.createElement('div');
      toast.className = 'toast toast-' + type;
      var icons = {
        success:'<svg viewBox="0 0 24 24" width="20" height="20"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="2"/><path d="M8 12l3 3 5-5" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"/></svg>',
        error:'<svg viewBox="0 0 24 24" width="20" height="20"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="2"/><path d="M15 9l-6 6M9 9l6 6" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"/></svg>',
        info:'<svg viewBox="0 0 24 24" width="20" height="20"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="2"/><path d="M12 16v-4M12 8h.01" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"/></svg>'
      };
      toast.innerHTML = '<span class="toast-icon">'+(icons[type]||icons.info)+'</span><span class="toast-message">'+message+'</span><div class="toast-progress"></div>';
      container.appendChild(toast);
      setTimeout(function() {
        toast.classList.add('toast-exit');
        setTimeout(function(){ toast.remove(); }, 300);
      }, 3000);
    }
  };

  document.addEventListener('DOMContentLoaded', function(){ App.init(); });
  window.App = App;
})();
