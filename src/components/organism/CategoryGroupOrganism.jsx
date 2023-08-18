import React from "react";
import CategoryCheckboxMolecule from "../molecules/CategoryCheckboxMolecule";
import ComponentTableOrganism from "./ComponentTableOrganism"; // Import the ComponentTableOrganism component

function CategoryGroupOrganism({
  categories,
  onCategoryChange,
  onCheckboxChange,
}) {
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          {categories.map((category) => (
            <th key={category.key}>
              <CategoryCheckboxMolecule
                label={category.label}
                onChange={onCategoryChange}
                category = {category.key}
              />
            </th>
          ))}
        </tr>
      </thead>
      <ComponentTableOrganism
        categories={categories}
        onCheckboxChange={onCheckboxChange}
      />{" "}
      {/* Include the ComponentTableOrganism */}
    </table>
  );
}

export default CategoryGroupOrganism;
