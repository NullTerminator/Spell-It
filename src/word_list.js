import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';

import { WordSpelledCorrect } from './events';
import { Word } from './word';
import { get_random_index } from './util';

const WORDS = [
  new Word('chief', 'My dad is the chief'),
  new Word('thief', 'A thief stole my bike'),
  new Word('believe', 'I believe in magic'),
  new Word('pierce', 'pierce your ears'),
  new Word('ceiling', 'Touch the ceiling'),
  new Word('pier', 'Tie your boat to the pier'),
  new Word('niece', 'Your niece is coming to visit'),
  new Word('receive', 'Did you receive my package?'),
  new Word('piece', 'Can I have a piece of cake?'),
  new Word('fierce', 'Lions are fierce!'),
  new Word('receipt', 'Keep your receipt'),
  new Word('shield', 'Put up your shield'),
  new Word('cashier', 'Give your money to the cashier'),
  new Word('perceive', `Things aren't how you perceive them`),
  new Word('shriek', 'The witch made an awful shriek'),
  new Word('relief', 'Catching the ball was a relief'),
  new Word('than', 'The tree is taller than me'),
  new Word('shall', 'I shall not do it'),
  new Word('through', 'I can see through you'),
  new Word('seven', 'I ate seven hot dogs'),
  new Word('during', 'There was lightning during the storm'),
];
const CORRECT_COUNT = 3;

@inject(EventAggregator)
export class WordList {
  constructor(eventer) {
    this.reset();

    eventer.subscribe(WordSpelledCorrect, (event) => {
      this.correct_map[event.word] = this.correct_map[event.word] || 0;
      this.correct_map[event.word] += 1;

      if (this.correct_map[event.word] === CORRECT_COUNT) {
        const just_words = this.words.map((w) => { return w.word; });
        this.words.splice(just_words.indexOf(event.word), 1 );
      }
    });
  }

  get count() {
    return this.words.length;
  }

  reset() {
    this.words = WORDS.slice(0);

    this.last_word = null;
    this.correct_map = {};
  }

  get_word() {
    let sub_list = this.words;

    if (this.last_word && this.words.length > 1) {
      sub_list = this.words.filter((w) => {
        return this.last_word !== w;
      });
    }

    const word = get_random_index(sub_list);
    this.last_word = word;
    return word;
  }
}
