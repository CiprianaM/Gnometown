import React, {useState, useEffect} from 'react';
import './App.css';
import GnomeList from "./Components/GnomeList";
import ApiClient from "./Services/ApiClient";
import Navbar from "./Components/Navbar";

export const GnomeContext = React.createContext();

function App() {
  const [extendedGnomes, setExtendedGnomes] = useState([]);
  const [filteredGnomes, setFilteredGnomes] = useState('');

  const handleChange = (event) => {
    var updatedList = extendedGnomes;
    updatedList = updatedList.filter(function(item){
      return item.name.toLowerCase().search(
        event.target.value.toLowerCase()) !== -1;
    });
    setFilteredGnomes(updatedList);
  }

  useEffect(()=> {
    ApiClient.getInitialGnomes()
      .then(gnomes => {
        setFilteredGnomes(gnomes);
      })
      ApiClient.cacheGnomes();
      ApiClient.getApiGnomes()
      .then(gnomes => {
        setExtendedGnomes(gnomes);
      })
  }, []);
  useEffect(() => {
    setFilteredGnomes((prevGnomes => [...prevGnomes, ...extendedGnomes.slice(200, extendedGnomes.length)]));
  }, [extendedGnomes])

  return (
      <GnomeContext.Provider value={({handleChange, filteredGnomes, extendedGnomes})}>
        <div className="App">
          <Navbar />
          <GnomeList />
        </div>
      </GnomeContext.Provider>
  );
}

export default App;
