export const uniqueValues = (values, property) => {
  const allValues = values.flatMap(product => product[property]);
  const unique = new Set(allValues);
  const uniqueValues = [...unique].sort((a, b) => a - b);
  return uniqueValues;
};

export const getRandomValue = value => {
  if (!value.length) return null;

  const randomIdx = Math.floor(Math.random() * value.length);
  return value[randomIdx];
};
