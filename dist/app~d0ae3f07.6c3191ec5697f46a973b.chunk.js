(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{0:function(e,t,n){n("GAND"),n("GmYv"),e.exports=n("b9nV")},"4OvJ":function(e,t,n){"use strict";function r(e,t){return e=function(e){if("function"!=typeof e)return function(t){return t[e]};return e}(e),function(n){return e(n)===t}}function o(e){return e[Math.floor(Math.random()*e.length)]}n.d(t,"a",function(){return r}),n.d(t,"b",function(){return o})},FWYc:function(e,t,n){"use strict";function r(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}n.d(t,"b",function(){return s}),n.d(t,"c",function(){return i}),n.d(t,"a",function(){return a});var o=function(e){this.word=e},s=function(e){function t(){return e.apply(this,arguments)||this}return r(t,e),t}(o),i=function(e){function t(){return e.apply(this,arguments)||this}return r(t,e),t}(o),a=function(e,t,n){this.delta=e,this.score=t,this.streak=n}},NjLS:function(e,t,n){"use strict";var r,o=n("aurelia-framework"),s=n("aurelia-event-aggregator"),i=n("FWYc"),a=function(e,t){this.word=e,this.sentence=t},c=n("4OvJ");function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}n.d(t,"a",function(){return h});var l=[new a("chief","My dad is the chief"),new a("thief","A thief stole my bike"),new a("believe","I believe in magic"),new a("pierce","pierce your ears"),new a("ceiling","Touch the ceiling"),new a("pier","Tie your boat to the pier"),new a("niece","Your niece is coming to visit"),new a("receive","Did you receive my package?"),new a("piece","Can I have a piece of cake?"),new a("fierce","Lions are fierce!"),new a("receipt","Keep your receipt"),new a("shield","Put up your shield"),new a("cashier","Give your money to the cashier"),new a("perceive","Things aren't how you perceive them"),new a("shriek","The witch made an awful shriek"),new a("relief","Catching the ball was a relief"),new a("than","The tree is taller than me"),new a("shall","I shall not do it"),new a("through","I can see through you"),new a("seven","I ate seven hot dogs"),new a("during","There was lightning during the storm")],d=3,h=Object(o.b)(s.a)(r=function(){function e(e){var t=this;this.reset(),e.subscribe(i.b,function(e){if(t.correct_map[e.word]=t.correct_map[e.word]||0,t.correct_map[e.word]+=1,t.correct_map[e.word]===d){var n=t.words.map(function(e){return e.word});t.words.splice(n.indexOf(e.word),1)}})}var t,n,r,o=e.prototype;return o.reset=function(){this.words=l.slice(0),this.last_word=null,this.correct_map={}},o.get_word=function(){var e=this,t=this.words;this.last_word&&this.words.length>1&&(t=this.words.filter(function(t){return e.last_word!==t}));var n=Object(c.b)(t);return this.last_word=n,n},t=e,(n=[{key:"count",get:function(){return this.words.length}}])&&u(t.prototype,n),r&&u(t,r),e}())||r},agiY:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var r,o=n("aurelia-framework"),s=n("aurelia-event-aggregator"),i=n("FWYc"),a=n("4OvJ"),c=Object(o.b)(s.a)(r=function(){function e(e){var t=this;this.reset(),e.subscribe(i.b,function(n){var r=1+t.streak;t.score+=r,t.streak+=1,e.publish(new i.a(r,t.score,t.streak)),t.streak>t.best_streak&&(t.best_streak=t.streak),t.ensure_word_score(n.word)}),e.subscribe(i.c,function(e){t.streak=0,t.ensure_word_score(e.word).score+=1})}var t=e.prototype;return t.reset=function(){this.score=0,this.streak=0,this.best_streak=0,this.results=[]},t.ensure_word_score=function(e){var t=this.results.find(Object(a.a)("word",e));return t||(t=new u(e),this.results.push(t)),t},e}())||r,u=function(e){this.word=e,this.score=0}},app:function(e,t,n){"use strict";n.r(t),n.d(t,"App",function(){return r});n("70NS");var r=function(){function e(){}return e.prototype.configureRouter=function(e,t){e.title="Spell-It",e.map([{route:"",moduleId:"home",title:"Spell-It"},{route:"spell",moduleId:"spell",title:"Spell",name:"spell"},{route:"game_over",moduleId:"game_over",title:"Game Over",name:"game_over"}]),this.router=t},e}()},"app.html":function(e,t){e.exports='<template>\n  <br/>\n  <div class="page-header text-center">\n    <h1>Spell-It</h1>\n  </div>\n\n  <br/>\n  <br/>\n  <br/>\n\n  <router-view></router-view>\n</template>\n'},bsKS:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}n.d(t,"a",function(){return o});var o=function(){function e(){this.repo=window.localStorage}var t,n,o;return t=e,(n=[{key:"name",get:function(){return this.repo?this.repo.getItem("name"):null},set:function(e){if(!this.repo)return null;this.repo.setItem("name",e)}}])&&r(t.prototype,n),o&&r(t,o),e}()},encouragement:function(e,t,n){"use strict";n.r(t),n.d(t,"Encouragement",function(){return l});var r,o=n("aurelia-framework"),s=n("aurelia-event-aggregator"),i=n("FWYc"),a=n("4OvJ"),c=["Holy cow!","Nice work","Keep it up","Awesome"],u=["Try again","Focus power","Sound it out","Listen carefully"],l=Object(o.b)(s.a)(r=function(){function e(e){var t=this;this.message=null,e.subscribe(i.b,function(){t.set_congratulations()}),e.subscribe(i.c,function(){t.set_encouragement()})}var t=e.prototype;return t.set_congratulations=function(){this.message=Object(a.b)(c),this.timeout_message()},t.set_encouragement=function(){this.message=Object(a.b)(u),this.timeout_message()},t.timeout_message=function(){var e=this;this.timer&&clearTimeout(this.timer),this.timer=setTimeout(function(){e.message=null},3e3)},e}())||r},"encouragement.html":function(e,t){e.exports='<template>\n  <h3 class="text-center">${message}</h3>\n</template>\n'},game_over:function(e,t,n){"use strict";n.r(t),n.d(t,"GameOver",function(){return d});var r,o=n("aurelia-framework"),s=n("4ysu"),i=n("zXcE"),a=n("agiY"),c=n("NjLS"),u=n("bsKS");function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var d=Object(o.b)(i.a,a.a,c.a,u.a,s.c)(r=function(){function e(e,t,n,r,o){this.router=o,this.score_keeper=t,this.word_list=n,this.name=r.name,e.say("great job "+r.name+", you earned "+this.score+" points"),e.say("your best streak was "+this.best_streak)}var t,n,r;return e.prototype.new_game=function(){this.score_keeper.reset(),this.word_list.reset(),this.router.navigateToRoute("spell")},t=e,(n=[{key:"score",get:function(){return this.score_keeper.score}},{key:"best_streak",get:function(){return this.score_keeper.best_streak}}])&&l(t.prototype,n),r&&l(t,r),e}())||r},"game_over.html":function(e,t,n){e.exports='<template>\n  <require from="./word-report"></require>\n\n  <div class="container-fluid">\n    <div class="row">\n      <div class="col-md-4">\n        <word-report></word-report>\n      </div>\n      <div class="col-md-4">\n        <h2 class="text-center">Congratulations ${name}!</h2>\n        <br/>\n        <h3 class="text-center">Final score: ${score}</h3>\n        <br/>\n        <h3 class="text-center">Best streak: ${best_streak}</h3>\n        <br/>\n        <button click.trigger="new_game()" class="btn btn-success" style="width: 100%">New Game</button>\n        <br/>\n      </div>\n      <div class="col-md-4">\n      </div>\n</template>\n'},home:function(e,t,n){"use strict";n.r(t),n.d(t,"Home",function(){return c});var r,o=n("aurelia-framework"),s=n("4ysu"),i=n("zXcE"),a=n("bsKS"),c=Object(o.b)(i.a,a.a,s.c)(r=function(){function e(e,t,n){this.router=n,this.namer=t,this.speaker=e,this.name=this.namer.name,this.name?this.speaker.say("Hello "+this.name+", welcome back to Spell-It"):this.speaker.say("Nice to meet you.  What's your name?")}var t=e.prototype;return t.start_game=function(){this.router.navigateToRoute("spell")},t.save_name=function(){this.namer.name=this.name_input,this.name=this.namer.name,this.speaker.say("Hello "+this.name+", welcome to Spell-It")},e}())||r},"home.html":function(e,t){e.exports='<template>\n  <div class="container-fluid">\n    <div class="row">\n      <div class="col-md-4">\n      </div>\n      <div class="col-md-4">\n        <form if.bind="!name" submit.trigger="save_name()">\n          <div class="form-group">\n            <div class="col-sm-10">\n              <input value.bind="name_input" type="text" class="form-control" placeholder="What\'s your name?" autofocus>\n            </div>\n          </div>\n          <div class="form-group">\n            <div class="col-sm-offset-2 col-sm-10">\n              <button type="submit" class="btn btn-success" style="width: 100%">Set Your Name</button>\n            </div>\n          </div>\n        </form>\n\n        <button if.bind="name" click.trigger="start_game()" class="btn btn-success" style="width: 100%">Start Game</button>\n      </div>\n      <div class="col-md-4">\n      </div>\n</template>\n'},main:function(e,t,n){"use strict";n("LSZE"),n("ls82");var r={debug:!1,testing:!1};n("70NS"),n("+eM2");function o(e){e.use.standardConfiguration().feature("resources/index"),e.use.developmentLogging(r.debug?"debug":"warn"),r.testing&&e.use.plugin("aurelia-testing"),e.start().then(function(){return e.setRoot("app")})}n.d(t,"configure",function(){return o})},"points-earned":function(e,t,n){"use strict";n.r(t),n.d(t,"PointsEarned",function(){return a});var r,o=n("aurelia-framework"),s=n("aurelia-event-aggregator"),i=n("FWYc"),a=Object(o.b)(s.a)(r=function(){function e(e){var t=this;this.message=null,e.subscribe(i.a,function(e){t.message="+ "+e.delta+" point"+(e.delta>1?"s":"")+"!",t.timeout_message()})}return e.prototype.timeout_message=function(){var e=this;this.timer&&clearTimeout(this.timer),this.timer=setTimeout(function(){e.message=null},2500)},e}())||r},"points-earned.html":function(e,t){e.exports='<template>\n  <h4 class="text-center">${message}</h4>\n</template>\n'},"remaining-words":function(e,t,n){"use strict";n.r(t),n.d(t,"RemainingWords",function(){return a});var r,o=n("aurelia-framework"),s=n("NjLS");function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=Object(o.b)(s.a)(r=function(){function e(e){this.word_list=e}var t,n,r;return t=e,(n=[{key:"remaining_word_count",get:function(){return this.word_list.count}}])&&i(t.prototype,n),r&&i(t,r),e}())||r},"remaining-words.html":function(e,t){e.exports='<template>\n  <p class="lead text-center">Remaining words: ${remaining_word_count}</p>\n</template>\n'},"resources/index":function(e,t,n){"use strict";function r(e){}n.r(t),n.d(t,"configure",function(){return r})},scoreboard:function(e,t,n){"use strict";n.r(t),n.d(t,"Scoreboard",function(){return a});var r,o=n("aurelia-framework"),s=n("agiY");function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=Object(o.b)(s.a)(r=function(){function e(e){this.score_keeper=e}var t,n,r;return t=e,(n=[{key:"score",get:function(){return this.score_keeper.score}},{key:"streak",get:function(){return this.score_keeper.streak}}])&&i(t.prototype,n),r&&i(t,r),e}())||r},"scoreboard.html":function(e,t){e.exports='<template>\n  <h2 class="text-center">Score: ${score}</h2>\n  <h3 class="text-center">Streak: ${streak}</h3>\n</template>\n'},spell:function(e,t,n){"use strict";n.r(t),n.d(t,"Spell",function(){return r});var r=function(){}},"spell.html":function(e,t,n){e.exports='<template>\n  <require from="./word-speller"></require>\n  <require from="./scoreboard"></require>\n  <require from="./remaining-words"></require>\n  <require from="./encouragement"></require>\n  <require from="./points-earned"></require>\n\n  <div class="container-fluid">\n    <div class="row">\n      <div class="col-md-4">\n        <div class="container-fluid">\n          <div class="row">\n            <div class="col-md-12">\n              <scoreboard></scoreboard>\n            </div>\n          </div>\n\n          <div class="row">\n            <div class="col-md-12">\n              <remaining-words></remaining-words>\n            </div>\n          </div>\n\n          <div class="row">\n            <div class="col-md-12">\n              <p class="lead text-center">Spell each word correctly 3 times.</p>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class="col-md-4">\n          <word-speller></word-speller>\n\n          <br/>\n\n          <points-earned></points-earned>\n      </div>\n      <div class="col-md-4">\n        <encouragement></encouragement>\n      </div>\n    </div>\n  </div>\n</template>\n'},"word-report":function(e,t,n){"use strict";n.r(t),n.d(t,"WordReport",function(){return i});var r,o=n("aurelia-framework"),s=n("agiY"),i=Object(o.b)(s.a)(r=function(){function e(e){this.results=e.results.sort(function(e,t){return t.score-e.score})}return e.prototype.table_class=function(e){return e>2?"danger":e>0?"warning":"success"},e}())||r},"word-report.html":function(e,t){e.exports='<template>\n  <div>\n    <table class="table table-sm table-hover">\n      <thead>\n        <tr>\n          <th>Word</th>\n          <th># Incorrect</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr repeat.for="word_score of results" class="table-${table_class(word_score.score)}">\n          <td>${word_score.word}</td>\n          <td>${word_score.score}</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</template>\n'},"word-speller":function(e,t,n){"use strict";n.r(t),n.d(t,"WordSpeller",function(){return l});var r,o=n("aurelia-framework"),s=n("4ysu"),i=n("aurelia-event-aggregator"),a=n("zXcE"),c=n("NjLS"),u=n("FWYc"),l=(n("4OvJ"),Object(o.b)(a.a,c.a,s.c,i.a)(r=function(){function e(e,t,n,r){this.speaker=e,this.eventer=r,this.word_list=t,this.router=n,this.word=null,this.set_goal_word(),this.say_goal()}var t=e.prototype;return t.check_word=function(){this.word===this.goal_word.word?this.word_right():(this.eventer.publish(new u.c(this.goal_word.word)),this.speaker.is_speaking()||(this.speaker.say("oops, try again"),this.say_goal(!1)))},t.word_right=function(){this.eventer.publish(new u.b(this.goal_word.word)),this.word=null,this.set_goal_word(),this.goal_word?this.say_goal(!1):this.router.navigateToRoute("game_over")},t.say_goal=function(e){void 0===e&&(e=!0),e&&this.speaker.is_speaking()||(this.say_goal_word(e),this.say_goal_sentence(e),this.say_goal_word(e))},t.say_goal_word=function(e){void 0===e&&(e=!0),e&&this.speaker.is_speaking()||this.speaker.say(this.goal_word.word)},t.say_goal_sentence=function(e){void 0===e&&(e=!0),e&&this.speaker.is_speaking()||this.speaker.say(this.goal_word.sentence)},t.set_goal_word=function(){this.goal_word=this.word_list.get_word()},e}())||r)},"word-speller.html":function(e,t){e.exports='<template>\n  <form submit.trigger="check_word()">\n    <div class="form-group">\n      <div class="col-sm-10">\n        <input value.bind="word" type="text" class="form-control" placeholder="Spell" autofocus autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">\n      </div>\n    </div>\n    <div class="form-group">\n      <div class="col-sm-offset-2 col-sm-10">\n        <button type="submit" class="btn btn-success" style="width: 100%">Check Word</button>\n      </div>\n    </div>\n\n    <div class="form-group">\n      <div class="col-sm-offset-2 col-sm-10">\n        <button click.trigger="say_goal_word()" class="btn btn-info" style="width: 100%">Say Word</button>\n      </div>\n    </div>\n\n    <div class="form-group">\n      <div class="col-sm-offset-2 col-sm-10">\n        <button click.trigger="say_goal_sentence()" class="btn btn-info" style="width: 100%">Use Word In Sentence</button>\n      </div>\n    </div>\n  </form>\n</template>\n'},zXcE:function(e,t,n){"use strict";var r,o=n("aurelia-framework"),s=n("4OvJ"),i=function(){function e(){var e=this;this.voices=[],this.promise=new Promise(function(t){e._resolve=t});var t=setInterval(function(){var n=window.speechSynthesis.getVoices();n.length>0&&(clearInterval(t),e.voices=n.filter(function(e){return e.lang.startsWith("en-")}),e._resolve())},50)}var t=e.prototype;return t.all=function(){var e=this;return this.promise.then(function(){return e.voices})},t.find_by_name=function(e){var t=this;return this.promise.then(function(){return t.voices.find(Object(s.a)("name",e))})},e}(),a=function(){function e(e){this.msg=new SpeechSynthesisUtterance(e)}var t=e.prototype;return t.set_voice=function(e){this.msg.voice=e},t.set_speed=function(e){e>1&&(e=1),this.msg.rate=e},e}();n.d(t,"a",function(){return c});var c=Object(o.b)(i)(r=function(){function e(e){this.voice_repo=e}var t=e.prototype;return t.is_speaking=function(){return window.speechSynthesis.speaking},t.say=function(e,t){var n=this;if(void 0===t&&(t=null),t){var r=new a(e);r.set_voice(t),this.speak(r)}else this.voice_repo.find_by_name("Google US English").then(function(t){n.say(e,t)})},t.speak=function(e){window.speechSynthesis.speak(e.msg)},t.stop=function(){window.speechSynthesis.cancel()},e}())||r}},[[0,1,2,7,6,8,10,3,5,9,4,11]]]);
//# sourceMappingURL=app~d0ae3f07.6c3191ec5697f46a973b.bundle.map