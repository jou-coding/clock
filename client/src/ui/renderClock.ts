function $(id: string): HTMLElement | null {
  return document.getElementById(id);
}

export function renderClock({
  hour,
  minute,
  second,
}: {
  hour: number;
  minute: number;
  second: number;
}) {
  const hourEl = $("hour");
  const minEl = $("min");
  const secEl = $("second");

  if (hourEl && minEl && secEl) {
    hourEl.textContent = String(hour);
    minEl.textContent = String(minute);
    secEl.textContent = String(second);
  }
}
