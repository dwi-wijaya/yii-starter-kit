import React from "react";

function CheckboxAtom({ value, onChange,category,type }) {
  return (
    <input
      className={`form-check-input ${type == 'package' ? category : ''}`}
      type="checkbox"
      value={value}
      onChange={onChange}
      category={type == 'category' ? category : ''}
      flag={type == 'package' ? category : ''}
    />
  );
}

export default CheckboxAtom;
