import React, {useState} from "react";
import GnomeTile from "../GnomeTile";
import Spinner from "../Spinner";
import "./styles.css";

export default function GnomeList ({gnomes}) {
  // const [gender, setGender]=useState('');

  function decideGender (gnome) {
    const {name} = gnome;
    const firstName = name.split(' ')[0]
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    // const gender = vowels.indexOf(firstName[firstName.length-1])
    // console.log(firstName, gender)
    const gender = vowels.indexOf(firstName[firstName.length-1])>=0 ? 'Gnomette' : 'Gnome';
    return gender
  }

  return (
    <div className="tile_cont">
      {gnomes.Brastlewark ?
        gnomes.Brastlewark.slice(0, 50).map(gnome => (
        <GnomeTile
          key={gnome.id}
          name={gnome.name}
          thumbnail={gnome.thumbnail}
          professions={gnome.friends.length}
          friends={gnome.friends.length}
          gender={decideGender(gnome)}
        />)) :
        <Spinner />
      }
    </div>
  )
}