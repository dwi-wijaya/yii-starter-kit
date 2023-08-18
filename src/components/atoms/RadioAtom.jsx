import React from "react";

function RadioAtom({ id, name, value, checked, onChange, children }) {
  return (
    <>
      <input
        type="radio"
        className="btn-check"
        name={name}
        id={id}
        autoComplete="off"
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <label className="btn btn-outline-primary" htmlFor={id}>
        {children}
      </label>
    </>
  );
}

export default RadioAtom;
