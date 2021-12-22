import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';

import { WordSpelledCorrect, WordSpelledWrong } from './events';
import { get_random_index } from './util';

const AFTER_RIGHT = [
  'Holy cow!',
  'Nice work',
  'Keep it up',
  'Awesome'
];

const AFTER_WRONG = [
  'Try again',
  'Focus power',
  'Sound it out',
  'Listen carefully'
];

const MESSAGE_TIME = 3000;

@inject(EventAggregator)
export class Encouragement {
  constructor(eventer) {
    this.message = null;

    eventer.subscribe(WordSpelledCorrect, () => {
      this.set_congratulations();
    });

    eventer.subscribe(WordSpelledWrong, () => {
      this.set_encouragement();
    });
  }

  set_congratulations() {
    this.message = get_random_index(AFTER_RIGHT);
    this.timeout_message();
  }

  set_encouragement() {
    this.message = get_random_index(AFTER_WRONG);
    this.timeout_message();
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
