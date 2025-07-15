import { describe, it, expect, vi } from "vitest";

import { Clock } from "../src/app/Clock";

describe("Clockクラスのテスト", () => {
  it("getTime()が正しい時間を返す", () => {
    const mockData = new Date("2025-07-15T09:24:00");
    // Vitestの時間を[モック（偽装）する]関数
    vi.setSystemTime(mockData);

    const clock = new Clock();
    const time = clock.getTime();

    // 値や構造が完全に同じか比較
    expect(time).toStrictEqual({ hour: 9, minute: 24, second: 0 });
    // モックした時間やタイマー（setTimeoutなど）を元の本物に戻する関数
    vi.useRealTimers();
  });
});
