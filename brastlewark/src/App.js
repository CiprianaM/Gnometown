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

  const [gnomes, setGnomes] = useState([]);
  const [extendedGnomes, setExtendedGnomes] = useState([]);

  useEffect(()=> {
    ApiClient.getInitialGnomes()
      .then(gnomes => {
        setGnomes(gnomes);
      })
      ApiClient.cacheGnomes();
      ApiClient.getApiGnomes()
        .then(gnomes => {
          setExtendedGnomes(gnomes);
        });
  }, []);


  return (
      <GnomeContext.Provider value={({gnomes, extendedGnomes})}>
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
