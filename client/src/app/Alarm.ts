class Alarm {
  private time;
  private message;

  constructor(time: number, message: string) {
    this.time = time;
    this.message = message;
  }

  get() {
    return this.time, this.message;
  }
}
