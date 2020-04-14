import React, {useState, useEffect} from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import './App.css';
import GnomeList from "./Components/GnomeList";
import ApiClient from "./Services/ApiClient";
import Navbar from "./Components/Navbar";

export const GnomeContext = React.createContext();

function App() {
  const myTheme = createMuiTheme({
    typography: {
     "fontFamily": "\"Patrick Hand\", \"Helvetica\", \"Arial\", sans-serif",
     "fontSize": 16,
     "fontWeightLight": 300,
     "fontWeightRegular": 400,
     "fontWeightMedium": 500
    }
  });

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
    setFilteredGnomes(extendedGnomes);
  }, [extendedGnomes])

  return (
      <GnomeContext.Provider value={({handleChange, filteredGnomes, extendedGnomes})}>
        <MuiThemeProvider theme={myTheme}>
            <div className="App">
              <Navbar />
              <GnomeList />
            </div>
        </MuiThemeProvider>
      </GnomeContext.Provider>
  );
}

export default App;
