export class ManageTime {
  constructor() {
    this.time = 0;
  }
  private time: number | undefined;

  setTime(func: () => void) {
    return setInterval(func, 1000);
  }

  clearTime() {
    clearInterval(this.time);
  }

  // テスト用に追加
  getTime(): number | undefined {
    return this.time;
  }
}
