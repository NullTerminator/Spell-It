import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';

import { VoicesLoaded } from './events';

import { VoiceRepo } from './voice_repo';

@inject(VoiceRepo, EventAggregator)
export class VoiceSelect {
  constructor(voice_repo, eventer) {
    eventer.subscribe(VoicesLoaded, () => {
      this.voices = voice_repo.all();
    });
  }
}
