import { inject } from 'aurelia-framework';
import { Router } from 'aurelia-router';

import { Speaker } from './speaker';
import { Namer } from './namer';

@inject(Speaker, Namer, Router)
export class Home {
  constructor(speaker, namer, router) {
    this.router = router;
    this.namer = namer;
    this.speaker = speaker;

    this.name = this.namer.name;
    if (this.name) {
      this.speaker.say(`Hello ${this.name}, welcome back to Spell-It`);
    } else {
      this.speaker.say("Nice to meet you.  What's your name?");
    }
  }

  start_game() {
    this.router.navigateToRoute('spell');
  }

  save_name() {
    this.namer.name = this.name_input;
    this.name = this.namer.name;
    this.speaker.say(`Hello ${this.name}, welcome to Spell-It`);
  }
}
