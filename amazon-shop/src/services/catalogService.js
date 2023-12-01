import data from '../data.json';

const getCatalogs = () => {
  return new Promise((resolve, reject) => {
    resolve(data);
  });
}

export const catalogService = {
  getCatalogs
}