
const BASE_URL = 'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json';


export default {
  getAllGnomes: () => {
    return fetchRequest(BASE_URL)
  }
};

const fetchRequest = (url) => {
    return fetch(url)
      .then(res => res.status <= 400 ? res : Promise.reject(res))
      .then(res => res.json())
      .then(res=>{
        const {Brastlewark: response} = res;
        const partialResp = response.slice(0, 100)
        localStorage.setItem('myData', JSON.stringify(partialResp));
        // console.log('this is res: ', res)
        const loc = localStorage.getItem('myData');
        // console.log('this is localstorage: ', JSON.parse(loc));
        return res;
      })
      .catch((err) => {
        console.log(`${err.message} while fetching /${url}`)
      });
};