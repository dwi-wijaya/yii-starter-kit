import React from "react";
import TextareaAtom from "../atoms/TextareaAtom";

function ComposerCommandsTextareaOrganism({ commands, onCommandsChange }) {
  return (
    <div className="group-textarea mt-1">
      <label className="label-textarea">Composer Commands</label>
      <TextareaAtom
        id="composerCommands"
        rows="11"
        cols="60"
        value={commands}
        onChange={onCommandsChange}
      />
      {/* ... */}
    </div>
  );
}

export default ComposerCommandsTextareaOrganism;
