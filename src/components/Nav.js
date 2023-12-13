import React from "react";

const Nav = ({ onToggleGreased, onSortChange }) => {
  return (
    <div className="navWrapper">
      <button onClick={onToggleGreased}>Toggle Greased</button>
      <div>
        <span>Sort by: </span>
        <button onClick={() => onSortChange("name")}>Name</button>
        <button onClick={() => onSortChange("weight")}>Weight</button>
      </div>
    </div>
  );
};

export default Nav;
