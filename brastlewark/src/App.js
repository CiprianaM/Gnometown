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
  const [chipData, setChipData] = React.useState([
    { key: 0, label: 'Gnome', clicked: false },
    { key: 1, label: 'Gnomette', clicked: false },
    { key: 2, label: 'Has jobs', clicked: false },
    { key: 3, label: 'Has friends', clicked: false },
  ]);

  const handleClick = (clickedChip) => () => {
    setChipData((chips) => chips.map((chip) => chip.key !== clickedChip.key ? chip : {...chip, clicked: !chip.clicked}));
  };
  useEffect(()=> {
    ApiClient.getAllGnomes()
  .then(gnomes => setGnomes(gnomes)
  )}, [])
  return (
      <GnomeContext.Provider value={({gnomes, chipData, handleClick})}>
        <MuiThemeProvider theme={myTheme}>
            <div className="App">
              <Navbar />
              <GnomeList gnomes={gnomes} />
            </div>
        </MuiThemeProvider>
      </GnomeContext.Provider>
  );
}

export default App;
