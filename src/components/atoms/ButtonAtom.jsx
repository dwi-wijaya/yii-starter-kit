import React from "react";

function ButtonAtom({ onClick, text,icon,color }) {
  return (
    <button className={`btn btn-outline-${color}`} onClick={onClick}>
      {text} <li className={`${icon}`}></li>
      

    </button>
  );
}

export default ButtonAtom;
