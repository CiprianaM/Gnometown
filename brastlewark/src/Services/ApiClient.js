
const BASE_URL = 'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json';
const CACHE_URL ='';

export default {
  getAllGnomes: () => {
    return fetchRequest(BASE_URL);
  },
  getDetails: (id) => {
    return fetchRequest(`${CACHE_URL}/${id}`)
  }
};

const fetchRequest = (url) => {
  return fetch(url)
    .then(res => res.status <= 400 ? res : Promise.reject(res))
    .then(res => res.json())
    .catch((err) => {
      console.log(`${err.message} while fetching /${url}`)
    });
};