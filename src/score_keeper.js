import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';

import { WordSpelledCorrect, WordSpelledWrong, ScoreAdded } from './events';
import { by } from './util';

@inject(EventAggregator)
export class ScoreKeeper {
  constructor(eventer) {
    this.reset();

    eventer.subscribe(WordSpelledCorrect, (event) => {
      const delta = 1 + this.streak;
      this.score += delta;
      this.streak += 1;
      eventer.publish(new ScoreAdded(delta, this.score, this.streak));

      if (this.streak > this.best_streak) {
        this.best_streak = this.streak;
      }

      this.ensure_word_score(event.word);
    });

    eventer.subscribe(WordSpelledWrong, (event) => {
      this.streak = 0;

      const word_score = this.ensure_word_score(event.word);
      word_score.score += 1;
    });
  }

  reset() {
    this.score = 0;
    this.streak = 0;
    this.best_streak = 0;
    this.results = [];
  }

  ensure_word_score(word) {
    let word_score = this.results.find(by('word', word));
    if (!word_score) {
      word_score = new WordScore(word);
      this.results.push(word_score);
    }
    return word_score;
  }
}

class WordScore {
  constructor(word) {
    this.word = word;
    this.score = 0;
  }
}
