import React from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import "./styles.css";

export default function GnomeTile (props) {
  return (
    <div className="gnome_container">
      <LazyLoadImage
        alt="gnome-img"
        src={props.thumbnail}
        width="250px" />
      <div className="gnome_headline">
  <p className="gnome_headline_title">{props.name}, {props.gender}</p>
      </div>
    </div>
  )
}