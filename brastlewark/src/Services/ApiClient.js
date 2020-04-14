// import { getAllGnomes } from "../../../server/controllers.js/cache";

const BASE_URL = 'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json';
const HOME_URL = 'http://localhost:3005';


export default {
  getInitialGnomes: async () => {
    const data = await fetch('http://localhost:3005/all')
      .then(res => res.json());
      const dataArr = Object.values(data);
      if (dataArr.length) {
      return dataArr;
    } else {
      return fetchRequest(BASE_URL);
    }
  },
  getApiGnomes: async () => {
    return fetchRequest(BASE_URL);
  },
  cacheGnomes:async () => {
    const data = await fetchRequest(BASE_URL);
      const info =data.slice(0, 200).map(element => ({key: element.id, val: element}))
       fetch(HOME_URL+'/all', {
        method: 'POST',
        body: JSON.stringify(info),
        headers: {
          'Content-Type': 'application/json'
        }
      })
  }
};

const fetchRequest = (url) => {
    return fetch(url)
      .then(res => res.status <= 400 ? res : Promise.reject(res))
      .then(res => res.json())
      .then(res=>{
        const {Brastlewark: response} = res;
        console.log(response)
        return response;
      })
      .catch((err) => {
        console.log(`${err.message} while fetching /${url}`)
      });
};