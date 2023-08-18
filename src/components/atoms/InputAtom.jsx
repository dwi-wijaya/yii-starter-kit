import React from "react";

function InputAtom({ value, onChange, placeholder }) {
  return (
    <input
      type="text"
      className="form-control"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}

export default InputAtom;
