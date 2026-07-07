const seededRandom = (seed) => {
  const m = 2 ** 35 - 31;
  const a = 185852;
  let s = seed % m;
  return () => (s = (s * a) % m) / m;
};

export const fetchAPI = (date) => {
  const result = [];
  const random = seededRandom(date.getDate());
  if (random() < 0.5) result.push('17:00');
  if (random() < 0.5) result.push('18:00');
  if (random() < 0.5) result.push('19:00');
  if (random() < 0.5) result.push('20:00');
  if (random() < 0.5) result.push('21:00');
  if (random() < 0.5) result.push('22:00');
  return result;
};

export const submitAPI = (formData) => true;
