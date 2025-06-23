export class ManageTime {
  constructor() {
    this.time = 0;
  }
  private time: number;

  setTime(func: () => void) {
    return setInterval(func, 1000);
  }

  clearTime() {
    clearInterval(this.time);
  }
}
