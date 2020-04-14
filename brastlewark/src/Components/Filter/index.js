import React, {useContext} from "react";
import {GnomeContext} from "../../App";

export default function Filter () {
  const {handleChange} = useContext(GnomeContext);
  return (
    <form>
      <label>
        Name:
        <input type="text" name="name" autoComplete="off" onChange={handleChange}/>
      </label>
</form>
  )
}
