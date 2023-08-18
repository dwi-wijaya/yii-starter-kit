import React from "react";

function TextareaAtom({ id, rows, cols, value, onChange }) {
  return (
    <textarea
      id={id}
      rows={rows}
      cols={cols}
      className="form-control"
      value={value}
      onChange={onChange}
    ></textarea>
  );
}

export default TextareaAtom;
