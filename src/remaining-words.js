import { inject } from 'aurelia-framework';

import { WordList } from './word_list';

@inject(WordList)
export class RemainingWords {
  constructor(word_list) {
    this.word_list = word_list;
  }

  get remaining_word_count() {
    return this.word_list.count;
  }
}
