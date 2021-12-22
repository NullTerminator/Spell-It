import { inject } from 'aurelia-framework';
import { Router } from 'aurelia-router';

import { Speaker } from './speaker';
import { ScoreKeeper } from './score_keeper';
import { WordList } from './word_list';
import { Namer } from './namer';

@inject(Speaker, ScoreKeeper, WordList, Namer, Router)
export class GameOver {
  constructor(speaker, score_keeper, word_list, namer, router) {
    this.router = router;
    this.score_keeper = score_keeper;
    this.word_list = word_list;
    this.name = namer.name;

    speaker.say(`great job ${namer.name}, you earned ${this.score} points`);
    speaker.say(`your best streak was ${this.best_streak}`);
  }

  get score() {
    return this.score_keeper.score;
  }

  get best_streak() {
    return this.score_keeper.best_streak;
  }

  new_game() {
    this.score_keeper.reset();
    this.word_list.reset();
    this.router.navigateToRoute('spell');
  }
}
