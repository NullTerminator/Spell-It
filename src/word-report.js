import { inject } from 'aurelia-framework';

import { ScoreKeeper } from './score_keeper';

@inject(ScoreKeeper)
export class WordReport {
  constructor(score_keeper) {
    this.results = score_keeper.results.sort((a, b) => { return b.score - a.score; });
  }

  table_class(score) {
    if (score > 2) {
      return 'danger';
    } else if (score > 0) {
      return 'warning';
    } else {
      return 'success';
    }
  }
}
