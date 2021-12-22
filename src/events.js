class WordEvent {
  constructor(word) {
    this.word = word;
  }
}

export class WordSpelledCorrect extends WordEvent {
}

export class WordSpelledWrong extends WordEvent {
}

export class ScoreAdded {
  constructor(delta, score, streak) {
    this.delta = delta;
    this.score = score;
    this.streak = streak;
  }
}
