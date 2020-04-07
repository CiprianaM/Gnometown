import React from "react";
import GnomeTile from "../GnomeTile";
import "./styles.css";

export default function GnomeList ({gnomes}) {
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
        />)) :
        "Still loading..."
      }
    </div>
  )
}