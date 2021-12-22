import { inject } from 'aurelia-framework';
import { Router } from 'aurelia-router';
import { EventAggregator } from 'aurelia-event-aggregator';

import { Speaker } from './speaker';
import { WordList } from './word_list';
import { WordSpelledCorrect, WordSpelledWrong } from './events';
import { get_random_index } from './util';

@inject(Speaker, WordList, Router, EventAggregator)
export class WordSpeller {
  constructor(speaker, word_list, router, eventer) {
    this.speaker = speaker;
    this.eventer = eventer;
    this.word_list = word_list;
    this.router = router;

    this.word = null;

    this.set_goal_word();
    this.say_goal();
  }

  check_word() {
    if (this.word === this.goal_word.word) {
      this.word_right();
    } else {
      this.eventer.publish(new WordSpelledWrong(this.goal_word.word));
      if (!this.speaker.is_speaking()) {
        this.speaker.say('oops, try again');
        this.say_goal(false);
      }
    }
  }

  word_right() {
    this.eventer.publish(new WordSpelledCorrect(this.goal_word.word));
    this.word = null;
    this.set_goal_word();

    if (this.goal_word) {
      this.say_goal(false);
    } else {
      this.router.navigateToRoute('game_over');
    }
  }

  say_goal(abort=true) {
    if (abort && this.speaker.is_speaking()) {
      return;
    }

    this.say_goal_word(abort)
    this.say_goal_sentence(abort)
    this.say_goal_word(abort)
  }

  say_goal_word(abort=true) {
    if (abort && this.speaker.is_speaking()) {
      return;
    }

    this.speaker.say(this.goal_word.word);
  }

  say_goal_sentence(abort=true) {
    if (abort && this.speaker.is_speaking()) {
      return;
    }

    this.speaker.say(this.goal_word.sentence);
  }

  set_goal_word() {
    this.goal_word = this.word_list.get_word();
  }
}
