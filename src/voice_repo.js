import { by } from './util';

export class VoiceRepo {
  constructor() {
    this.voices = [];

    this.promise = new Promise((resolve) => {
      this._resolve = resolve;
    });

    const timer = setInterval(() => {
      const voices = window.speechSynthesis.getVoices();
      if (voices.length > 0) {
        clearInterval(timer);

        this.voices = voices.filter((v) => { return v.lang.startsWith('en-'); });
        this._resolve();
      }
    }, 50);
  }

  all() {
    return this.promise
      .then(() => {
        return this.voices;
      });
  }

  find_by_name(name) {
    return this.promise
      .then(() => {
        return this.voices.find(by('name', name));
      });
  }
}
