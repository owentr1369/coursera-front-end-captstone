import { fetchAPI, submitAPI } from './api';

describe('fetchAPI', () => {
  test('returns an array', () => {
    expect(Array.isArray(fetchAPI(new Date()))).toBe(true);
  });

  test('only returns valid time slot strings', () => {
    const validSlots = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    const result = fetchAPI(new Date('2026-07-07'));
    result.forEach((slot) => expect(validSlots).toContain(slot));
  });

  test('is deterministic — same date produces same result', () => {
    const a = fetchAPI(new Date('2026-07-10'));
    const b = fetchAPI(new Date('2026-07-10'));
    expect(a).toEqual(b);
  });

  test('can produce different results for different days', () => {
    const day1 = fetchAPI(new Date('2026-07-01'));
    const day15 = fetchAPI(new Date('2026-07-15'));
    expect(Array.isArray(day1)).toBe(true);
    expect(Array.isArray(day15)).toBe(true);
  });
});

describe('submitAPI', () => {
  test('returns true for valid booking data', () => {
    const booking = { date: '2026-07-10', time: '17:00', guests: 2, occasion: 'Birthday' };
    expect(submitAPI(booking)).toBe(true);
  });
});
