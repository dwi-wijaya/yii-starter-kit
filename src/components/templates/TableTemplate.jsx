import React from "react";
import ProjectSettingsMolecule from "../molecules/ProjectSettingsMolecule";
import CategoryGroupOrganism from "../organism/CategoryGroupOrganism";
import ComposerCommandsTextareaOrganism from "../organism/ComposerCommandsTextareaOrganism";
import ButtonGroupOrganism from "../organism/ButtonGroupOrganism";
import iconYii from "../../assets/favicon.ico"; // Adjust the relative path as needed

function TableTemplate({
  projectName,
  template,
  categories,
  commands,
  copied,
  onProjectNameChange,
  onTemplateChange,
  onCategoryChange,
  onCheckboxChange,
  onCommandsChange,
  onReset,
  onCopy,
  onCommandsClick,
}) {
  return (
    <div>
      <div style={{borderRadius:"15px"}} className="card card-body">
        <div className="d-flex aling-items-center gap-3">
          <img src={iconYii} width="30px" alt="" />
          <h3 className="mb-0">Yii2 Starter Kit</h3>
        </div>
        <hr />
        <ProjectSettingsMolecule
          projectName={projectName}
          template={template}
          onProjectNameChange={onProjectNameChange}
          onTemplateChange={onTemplateChange}
        />
        <CategoryGroupOrganism
          categories={categories}
          onCategoryChange={onCategoryChange}
          onCheckboxChange={onCheckboxChange}
        />

        <ComposerCommandsTextareaOrganism
          commands={commands}
          onCommandsChange={onCommandsChange}
          onCommandsClick={onCommandsClick}
        />
        <ButtonGroupOrganism
          onReset={onReset}
          onCopy={onCopy}
          copied={copied}
        />
        <hr />
        <small style={{fontWeight:"100"}} className="text-muted">created by : <a className="text-muted" href="https://github.com/11Dwiwijaya/">Dwi Wijaya </a><li className="fa-brands fa-github"></li></small>
      </div>
    </div>
  );
}

export default TableTemplate;
