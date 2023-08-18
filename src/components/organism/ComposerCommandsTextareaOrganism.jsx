import React from "react";
import TextareaAtom from "../atoms/TextareaAtom";

function ComposerCommandsTextareaOrganism({ commands, onCommandsChange, onCommandsClick }) {
  return (
    <div className="group-textarea mt-3">
      <label className="label-textarea">Composer Commands</label>
      <TextareaAtom
        id="composerCommands"
        rows="11"
        cols="60"
        value={commands}
        onChange={onCommandsChange}
        onClick={onCommandsClick}
      />
      {/* ... */}
    </div>
  );
}

export default ComposerCommandsTextareaOrganism;
