import { PLATFORM } from 'aurelia-pal';

export class App {
  configureRouter(config, router) {
    config.title = 'Spell-It';
    config.map([
      { route: '', moduleId: PLATFORM.moduleName('home'), title: 'Spell-It' },
      { route: 'spell', moduleId: PLATFORM.moduleName('spell'), title: 'Spell', name: 'spell' },
      { route: 'game_over', moduleId: PLATFORM.moduleName('game_over'), title: 'Game Over', name: 'game_over' },
    ]);

    this.router = router;
  }
}
