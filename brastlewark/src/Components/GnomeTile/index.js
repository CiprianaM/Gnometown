import React from "react";

export default function GnomeTile (props) {
  return (
    <div>
      <h4>{props.name}</h4>
      <img alt="gnome-img" src={props.thumbnail}/>
      <p>Proffessions: {props.professions}</p>
      <p>Friends: {props.friends}</p>
    </div>
  )
}