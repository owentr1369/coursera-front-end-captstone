import { initializeTimes, updateTimes } from './bookingUtils';

jest.mock('../api');

describe('initializeTimes', () => {
  test('returns a non-empty array of available times', () => {
    const times = initializeTimes();
    expect(Array.isArray(times)).toBe(true);
    expect(times.length).toBeGreaterThan(0);
  });
});

describe('updateTimes', () => {
  test('returns new times array for UPDATE_DATE action', () => {
    const state = ['17:00', '18:00'];
    const action = { type: 'UPDATE_DATE', payload: { date: '2026-07-10' } };
    const result = updateTimes(state, action);
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBeGreaterThan(0);
  });

  test('returns current state unchanged for an unknown action type', () => {
    const state = ['17:00', '18:00', '19:00'];
    const result = updateTimes(state, { type: 'UNKNOWN_ACTION' });
    expect(result).toBe(state);
  });
});
