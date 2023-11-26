import React, { useEffect, useState } from "react";
import Container from "./Container";
import Input from "./Input";
import "./App.css";

function App() {
  const [items, setItem] = React.useState([]);
  const [inputValue, setInputValue] = useState("");

  function handleAdd(itemValue) {
    setItem((prevItems) => [...prevItems, itemValue]);

    // clear input value...
    setInputValue("");
  }

  useEffect(() => {
    console.log(items);
  }, [items]);

  return (
    <>
      <Container>
        <Input
          handleAdd={handleAdd}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
      </Container>
    </>
  );
}

export default App;
