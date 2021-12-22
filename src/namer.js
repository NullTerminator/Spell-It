export class Namer {
  constructor() {
    this.repo = window.localStorage;
  }

  get name() {
    if (!this.repo) {
      return null;
    }

    return this.repo.getItem('name');
  }

  set name(n) {
    if (!this.repo) {
      return null;
    }

    this.repo.setItem('name', n);
  }
}
