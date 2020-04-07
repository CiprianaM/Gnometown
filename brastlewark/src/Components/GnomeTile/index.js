import React from "react";
import "./styles.css";

export default function GnomeTile (props) {
  return (
    <div className="gnome_container">
      <img alt="gnome-img" src={props.thumbnail} className="gnome_img"/>
      <div className="gnome_headline">
  <p className="gnome_headline_title">{props.name}, {props.gender}</p>
      </div>
    </div>
  )
}