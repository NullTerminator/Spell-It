export class Message {
  constructor(str) {
    this.msg = new SpeechSynthesisUtterance(str);
  }

  set_voice(voice) {
    this.msg.voice = voice;
  }

  set_speed(speed) {
    if (speed > 1) {
      speed = 1;
    }

    this.msg.rate = speed;
  }
}
