export class Clock {
  getTime(): { hour: number; minute: number; second: number } {
    const now = new Date();
    return {
      hour: now.getHours(),
      minute: now.getMinutes(),
      second: now.getSeconds(),
    };
  }
}
