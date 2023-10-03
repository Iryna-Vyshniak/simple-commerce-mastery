export const uniqueValues = (values, property) => {
  if (!values) return null;
  if (!values.length) return null;

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

const customId = 'custom-id-yes';

export const toastifyOptions = {
  position: 'top-left',
  autoClose: 2500,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'colored',
  toastId: customId
};
