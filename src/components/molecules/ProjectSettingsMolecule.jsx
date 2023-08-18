import React from "react";
import InputAtom from "../atoms/InputAtom";
import RadioAtom from "../atoms/RadioAtom"; // Import the RadioAtom component

function ProjectSettingsMolecule({ projectName, template, onProjectNameChange, onTemplateChange }) {
  return (
    <div className="input-group mb-3">
      <InputAtom
        value={projectName}
        onChange={onProjectNameChange}
        placeholder="Project name"
      />
        <RadioAtom
          id="btnradio1"
          name="btnradio"
          value="basic"
          checked={template === "basic"}
          onChange={onTemplateChange}
        >
          Basic
        </RadioAtom>
        <RadioAtom
          id="btnradio2"
          name="btnradio"
          value="advanced"
          checked={template === "advanced"}
          onChange={onTemplateChange}
        >
          Advanced
        </RadioAtom>
    </div>
  );
}

export default ProjectSettingsMolecule;
