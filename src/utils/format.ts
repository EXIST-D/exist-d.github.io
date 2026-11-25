export function formatDate(value: Date) {
  return new Intl.DateTimeFormat('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'Asia/Shanghai',
  }).format(value);
}

/** "11-10" style date for compact lists that are already grouped by year. */
export function formatShortDate(value: Date) {
  const parts = new Intl.DateTimeFormat('en-CA', {
    month: '2-digit',
    day: '2-digit',
    timeZone: 'Asia/Shanghai',
  }).formatToParts(value);
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? '';
  return `${get('month')}-${get('day')}`;
}

export function formatIsoDate(value: Date) {
  return new Intl.DateTimeFormat('en-CA', { year: 'numeric', month: '2-digit', day: '2-digit', timeZone: 'Asia/Shanghai' }).format(value);
}

export function yearOf(value: Date) {
  return Number(new Intl.DateTimeFormat('en-CA', { year: 'numeric', timeZone: 'Asia/Shanghai' }).format(value));
}

export function xmlEscape(input: string) {
  return input
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}
