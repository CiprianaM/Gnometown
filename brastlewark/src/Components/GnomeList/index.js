import React from "react";
import GnomeTile from "../GnomeTile";

export default function GnomeList ({gnomes}) {
  return (
    <ul>
      {gnomes.Brastlewark ?
        gnomes.Brastlewark.slice(0, 20).map(gnome => (
        <GnomeTile
          key={gnome.id}
          name={gnome.name}
          thumbnail={gnome.thumbnail}
          professions={gnome.friends.length}
          friends={gnome.friends.length}
        />)) :
        "Still loading..."
      }
    </ul>
  )
}