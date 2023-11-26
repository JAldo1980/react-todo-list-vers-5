import React from "react";
import Container from "./Container";
import Input from "./Input";
import "./App.css";

function App() {
  const [item, setItem] = React.useState([]);

  function handleAdd() {
    setItem((prevItem) => +prevItem);
    console.log(item);
  }

  return (
    <>
      <Container>
        <Input handleAdd={handleAdd} />
      </Container>
    </>
  );
}

export default App;
