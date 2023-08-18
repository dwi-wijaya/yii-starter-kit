import React from "react";
import ButtonAtom from "../atoms/ButtonAtom";

function ButtonGroupOrganism({ onReset, onCopy, copied }) {
  return (
    <div className="btn-group mt-3 w-100">
      <ButtonAtom onClick={onReset} 
      text="Reset &nbsp; " 
      icon="fa fa-undo"
      color="danger"
      />
      
      <ButtonAtom
        onClick={onCopy}
        text={copied ? "Copied! \u00A0" : "Copy to clipboard \u00A0"}

        icon="fa-regular fa-copy"
        color="success"
      />
    </div>
  );
}

export default ButtonGroupOrganism;
