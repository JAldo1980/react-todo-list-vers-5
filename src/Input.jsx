import React from "react";

function Input({ handleAdd }) {
  const itemValue = document.getElementById("input").value;
  return (
    <>
      <div className="input-box-el">
        <input
          type="text"
          id="input"
          className="input-el"
          placeholder="Add items..."
        />
      </div>
      <div className="btn-box-el">
        <button id="add-btn" onClick={handleAdd}>
          Add
        </button>
        <button id="filter-btn">Filter</button>
      </div>
    </>
  );
}

export default Input;
