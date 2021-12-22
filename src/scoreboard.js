import { inject } from 'aurelia-framework';

import { ScoreKeeper } from './score_keeper';

@inject(ScoreKeeper)
export class Scoreboard {
  constructor(score_keeper) {
    this.score_keeper = score_keeper;
  }

  get score() {
    return this.score_keeper.score;
  }

  get streak() {
    return this.score_keeper.streak;
  }
}
