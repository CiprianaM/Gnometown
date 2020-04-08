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
  const [filteredGnomes, setFilteredGnomes] = useState([]);
  const [filtered, setFiltered] = useState(false);
  const [chipData, setChipData] = React.useState([
    { key: 0, label: 'Has jobs', selected: false, gnomeField: "professions" },
    { key: 1, label: 'Has friends', selected: false, gnomeField: "friends" },
  ]);

  const handleClick = (clickedChip) => () => {
    setChipData((chips) => chips.map((chip) => {
      if (chip.key !== clickedChip.key) {
        return {...chip, selected: false}
      }else {
        setFiltered(!chip.selected);
        return {...chip, selected: !chip.selected}
      }
    }))
  };

  const handleFilter = () => {
    const [{gnomeField}] = chipData.filter(chip => chip.selected);
    setFilteredGnomes(gnomes.Brastlewark.filter(gnome => gnome[gnomeField].length>0))
  }

  useEffect(()=> {
    ApiClient.getAllGnomes()
  .then(gnomes =>{
    setGnomes(gnomes);
    setFilteredGnomes(gnomes.Brastlewark);

  }
  )}, []);

  useEffect(() => filtered? handleFilter() : setFilteredGnomes(gnomes)
    , [filtered, chipData])

  return (
      <GnomeContext.Provider value={({gnomes, chipData, handleClick, filteredGnomes})}>
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
