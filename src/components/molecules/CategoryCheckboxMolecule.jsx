import React from "react";
import CheckboxAtom from "../atoms/CheckboxAtom";

function CategoryCheckboxMolecule({ label, onChange, category,source }) {
  return (
    <div className="input-group-text w-100">
      <CheckboxAtom 
      value="" 
      onChange={(e) => onChange(e)}
      category={category}
      type="category"
      />
      &nbsp;&nbsp;{label}
    </div>
  );
}

export default CategoryCheckboxMolecule;
