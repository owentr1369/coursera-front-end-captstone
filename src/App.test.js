import { initializeTimes, updateTimes } from './utils/bookingUtils';

// Activates the manual mock at src/__mocks__/api.js
// fetchAPI is stubbed to always return a non-empty array of available times
jest.mock('./api');

test('initializeTimes returns a non-empty array of available times', () => {
  const times = initializeTimes();
  expect(Array.isArray(times)).toBe(true);
  expect(times.length).toBeGreaterThan(0);
});

test('updateTimes returns updated times for a pre-selected date', () => {
  const initialState = ['17:00', '18:00', '19:00', '20:00', '21:00'];
  const action = {
    type: 'UPDATE_DATE',
    payload: { date: '2026-07-10' },
  };
  const result = updateTimes(initialState, action);
  expect(Array.isArray(result)).toBe(true);
  expect(result.length).toBeGreaterThan(0);
});
