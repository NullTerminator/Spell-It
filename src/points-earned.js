import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';

import { ScoreAdded } from './events';

const MESSAGE_TIME = 2500;

@inject(EventAggregator)
export class PointsEarned {
  constructor(eventer) {
    this.message = null;

    eventer.subscribe(ScoreAdded, (event) => {
      this.message = `+ ${event.delta} point${event.delta > 1 ? 's' : ''}!`;
      this.timeout_message();
    });
  }

  timeout_message() {
    if (this.timer) {
      clearTimeout(this.timer);
    }

    this.timer = setTimeout(() => {
      this.message = null;
    }, MESSAGE_TIME);
  }
}
