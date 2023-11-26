import React from "react";

function Input({ handleAdd, inputValue, setInputValue }) {
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <div className="input-box-el">
        <input
          type="text"
          id="input"
          className="input-el"
          placeholder="add items"
          value={inputValue}
          onChange={handleChange}
        />
      </div>
      <div className="btn-box-el">
        <button id="add-btn" onClick={() => handleAdd(inputValue)}>
          Add
        </button>
        <button id="filter-btn">Filter</button>
      </div>
    </>
  );
}

export default Input;
