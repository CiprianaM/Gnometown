import React, {useState, useEffect} from 'react';
import './App.css';
import GnomeList from "./Components/GnomeList";
import ApiClient from "./Services/ApiClient";

function App() {
  const [gnomes, setGnomes] = useState([]);
  useEffect(()=> {
    ApiClient.getAllGnomes()
  .then(gnomes => setGnomes(gnomes)
  )}, [])
  return (
    <div className="App">
      <GnomeList gnomes={gnomes} />
    </div>
  );
}

export default App;
