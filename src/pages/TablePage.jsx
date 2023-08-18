import React, { useState, useEffect } from "react";
import jsonData from "../assets/json-category.json";
import TableTemplate from "../components/templates/TableTemplate";

function TablePage() {
  const [projectName, setProjectName] = useState("my-app");
  const [template, setTemplate] = useState("basic");
  const [commands, setCommands] = useState(
    `composer create-project --prefer-dist yiisoft/yii2-app-${template} ${projectName} && cd ${projectName}`
  );
  const [copied, setCopied] = useState(false);

  const handleCategoryChange = (cat) => {
    const input = cat.target;
    const key = input.getAttribute("category");

    const childCheckboxes = document.querySelectorAll("." + key);

    const isChecked = input.checked;
    console.log(isChecked);
    childCheckboxes.forEach((childCheckbox) => {
      // childCheckbox.checked = isChecked;
      // handleCheckboxChange(childCheckbox);
      if (input.checked == true) {
        if (childCheckbox.checked == true) {
          childCheckbox.checked = true;
        } else {
          childCheckbox.checked = isChecked;
          handleCheckboxChange(childCheckbox);
        }
      } else {
        childCheckbox.checked = isChecked;
        handleCheckboxChange(childCheckbox);
      }
    });
  };

  const handleCheckboxChange = (childCheckbox) => {
    const input = childCheckbox.target ? childCheckbox.target : childCheckbox;
    const val = childCheckbox.target
      ? childCheckbox.target.value
      : childCheckbox.value;

    if (input.checked) {
      setCommands((prevCommands) =>
        prevCommands ? prevCommands + ` && ` + val : val
      );
    } else {
      setCommands((prevCommands) => prevCommands.replace(` && ` + val, ""));
    }
    // Check if all checkboxes in the category are checked
    const key = input.getAttribute("flag");
    const categoryCheckboxes = document.querySelectorAll("." + key);

    const allCategoryChecked = [...categoryCheckboxes].every(
      (checkbox) => checkbox.checked
    );
    // Update the category checkbox state
    const categoryCheckbox = document.querySelector(`input[category="${key}"]`);
    if (categoryCheckbox) {
      categoryCheckbox.checked = allCategoryChecked;
    }
  };

  const handleProjectNameChange = (event) => {
    let projectName = event.target.value.replace(/\s+/g, "-");
    setProjectName(projectName);
    setCommands(
      `composer create-project --prefer-dist yiisoft/yii2-app-${template} ${projectName} && cd ${projectName}`
    );
  };

  const handleTemplateChange = (event) => {
    handleResetCheckboxes();
    setTemplate(event.target.value);
    setCommands(
      `composer create-project --prefer-dist yiisoft/yii2-app-${event.target.value} ${projectName} && cd ${projectName}`
    );
  };

  const handleReset = () => {
    setProjectName("my-app");
    setTemplate("basic");
    handleResetCheckboxes();

    setCommands(
      `composer create-project --prefer-dist yiisoft/yii2-app-basic my-app && cd my-app`
    );
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(commands);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const handleResetCheckboxes = () => {
    const allCheckboxes = document.querySelectorAll('input[type="checkbox"]');
    allCheckboxes.forEach((checkbox) => {
      checkbox.checked = false;
    });
  };
  return (
    <TableTemplate
      projectName={projectName}
      template={template}
      categories={jsonData}
      commands={commands}
      copied={copied}
      onProjectNameChange={handleProjectNameChange}
      onTemplateChange={handleTemplateChange}
      onCategoryChange={(e) => {
        handleCategoryChange(e);
      }}
      onCheckboxChange={(e, command) => {
        handleCheckboxChange(e, command);
      }}
      onCommandsChange={(e) => {}}
      onReset={handleReset}
      onCopy={handleCopy}
      onCommandsClick={handleCopy}
    />
  );
}

export default TablePage;
