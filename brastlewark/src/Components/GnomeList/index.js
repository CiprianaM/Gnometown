import React, {useContext} from "react";
import GnomeTile from "../GnomeTile";
import {GnomeContext} from "../../App";

import Spinner from "../Spinner";
import "./styles.css";

export default function GnomeList () {
  const {filteredGnomes} = useContext(GnomeContext);
  function decideGender (gnome) {
    const {name} = gnome;
    const firstName = name.split(' ')[0]
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const gender = vowels.indexOf(firstName[firstName.length-1])>=0 ? 'Gnomette' : 'Gnome';
    return gender;
  }

  return (
    <div className="tile_cont">
      {
        filteredGnomes.length ?
        filteredGnomes.map(gnome => {
          return (
            <GnomeTile
              key={gnome.id}
              id={gnome.id}
              name={gnome.name}
              thumbnail={gnome.thumbnail}
              professions={gnome.friends.length}
              friends={gnome.friends.length}
              gender={decideGender(gnome)}
            />)}) :
        <Spinner />
      }
    </div>
  )
}