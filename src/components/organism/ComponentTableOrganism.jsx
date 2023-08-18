import React from "react";
import ComponentCheckboxMolecule from "../molecules/ComponentCheckboxMolecule";

function ComponentTableOrganism({ categories, onCheckboxChange }) {
  return (
    <tbody>
      <tr>
        {categories.map((category) => (
          <td key={category.key}>
            <div className="input-group-text w-100">
              <div className="w-100">
                {category.components.map((component) => (
                  <ComponentCheckboxMolecule
                    category={category.key}
                    component={component}
                    onChange={onCheckboxChange}
                  />
                ))}
              </div>
            </div>
          </td>
        ))}
      </tr>
    </tbody>
  );
}

export default ComponentTableOrganism;
