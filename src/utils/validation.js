export const validate = (date, time, guests) => ({
  date: date !== "" ? null : "Please choose a date.",
  time: time !== "" ? null : "Please select an available time.",
  guests:
    !isNaN(guests) && guests >= 1 && guests <= 10
      ? null
      : "Number of guests must be between 1 and 10.",
});
