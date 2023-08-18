import React from "react";

function TextareaAtom({ id, rows, cols, value, onChange, onClick }) {
  return (
    <textarea
      id={id}
      rows={rows}
      cols={cols}
      className="form-control"
      value={value}
      onChange={onChange}
      onClick={onClick}
      readOnly
    ></textarea>
  );
}

export default TextareaAtom;
