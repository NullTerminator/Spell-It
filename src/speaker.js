import { inject } from 'aurelia-framework';

import { VoiceRepo } from './voice_repo';
import { Message } from './message';

const DEFAULT_VOICE = 'Google US English';

@inject(VoiceRepo)
export class Speaker {
  constructor(voice_repo) {
    this.voice_repo = voice_repo;
  }

  is_speaking() {
    return window.speechSynthesis.speaking;
  }

  say(str, voice=null) {
    if (!voice) {
      this.voice_repo.find_by_name(DEFAULT_VOICE)
        .then((v) => {
          this.say(str, v);
        });
      return;
    }

    const msg = new Message(str);
    msg.set_voice(voice);
    this.speak(msg);
  }

  speak(msg) {
    window.speechSynthesis.speak(msg.msg);
  }

  stop() {
    window.speechSynthesis.cancel();
  }
}
