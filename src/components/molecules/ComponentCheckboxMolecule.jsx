import React from "react";
import CheckboxAtom from "../atoms/CheckboxAtom";

function ComponentCheckboxMolecule({component, onChange, category }) {
  return (
    <div className="w-100 text-start">
      <CheckboxAtom
        value={component.command}
        onChange={(e) => onChange(e, component.command)}
        category={category}
        type="package"
      />
      <a className="ms-2" target="_blank" href={component.source}>{component.name}</a>
    </div>
  );
}

export default ComponentCheckboxMolecule;
