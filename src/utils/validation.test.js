import { validate } from './validation';

// ─────────────────────────────────────────────────────────────
//  Date field
// ─────────────────────────────────────────────────────────────
describe('validate — date field', () => {
  test('VALID: returns null when a date string is provided', () => {
    const { date } = validate('2026-07-10', '17:00', 2);
    expect(date).toBeNull();
  });

  test('INVALID: returns an error message when date is an empty string', () => {
    const { date } = validate('', '17:00', 2);
    expect(date).toBe('Please choose a date.');
  });
});

// ─────────────────────────────────────────────────────────────
//  Time field
// ─────────────────────────────────────────────────────────────
describe('validate — time field', () => {
  test('VALID: returns null when a time string is provided', () => {
    const { time } = validate('2026-07-10', '17:00', 2);
    expect(time).toBeNull();
  });

  test('INVALID: returns an error message when time is an empty string', () => {
    const { time } = validate('2026-07-10', '', 2);
    expect(time).toBe('Please select an available time.');
  });
});

// ─────────────────────────────────────────────────────────────
//  Guests field
// ─────────────────────────────────────────────────────────────
describe('validate — guests field', () => {
  test('VALID: returns null for the minimum allowed value (1)', () => {
    const { guests } = validate('2026-07-10', '17:00', 1);
    expect(guests).toBeNull();
  });

  test('VALID: returns null for the maximum allowed value (10)', () => {
    const { guests } = validate('2026-07-10', '17:00', 10);
    expect(guests).toBeNull();
  });

  test('VALID: returns null for a typical mid-range value (5)', () => {
    const { guests } = validate('2026-07-10', '17:00', 5);
    expect(guests).toBeNull();
  });

  test('INVALID: returns an error message for 0 (below minimum)', () => {
    const { guests } = validate('2026-07-10', '17:00', 0);
    expect(guests).toBe('Number of guests must be between 1 and 10.');
  });

  test('INVALID: returns an error message for 11 (above maximum)', () => {
    const { guests } = validate('2026-07-10', '17:00', 11);
    expect(guests).toBe('Number of guests must be between 1 and 10.');
  });

  test('INVALID: returns an error message for a negative number', () => {
    const { guests } = validate('2026-07-10', '17:00', -1);
    expect(guests).toBe('Number of guests must be between 1 and 10.');
  });

  test('INVALID: returns an error message for NaN (non-numeric input)', () => {
    const { guests } = validate('2026-07-10', '17:00', NaN);
    expect(guests).toBe('Number of guests must be between 1 and 10.');
  });
});

// ─────────────────────────────────────────────────────────────
//  Full-form validation
// ─────────────────────────────────────────────────────────────
describe('validate — full form', () => {
  test('VALID: all fields correct → every error property is null', () => {
    const errors = validate('2026-07-10', '19:00', 4);
    expect(Object.values(errors).every((e) => e === null)).toBe(true);
  });

  test('INVALID: empty date and time → date and time have error messages', () => {
    const errors = validate('', '', 3);
    expect(errors.date).not.toBeNull();
    expect(errors.time).not.toBeNull();
    expect(errors.guests).toBeNull(); // 3 guests is valid
  });

  test('INVALID: all fields invalid → all three error properties are non-null', () => {
    const errors = validate('', '', 0);
    expect(errors.date).not.toBeNull();
    expect(errors.time).not.toBeNull();
    expect(errors.guests).not.toBeNull();
  });
});
