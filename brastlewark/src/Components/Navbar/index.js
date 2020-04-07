import React from "react";
import Filter from "../Filter"
import "./styles.css";

export default function Navbar () {
  return (
    <div className="navbar_container">
      <div className="filter_title">Choose your destiny! </div>
      <Filter />
    </div>
  )
}