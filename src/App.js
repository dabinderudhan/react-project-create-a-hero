import React, { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [height, setHeight] = useState(0);
  const [superPower, setSuperPower] = useState("");

  const [displayCharacters, setDisplayCharacters] = useState(false);
  const [infoObj, setInfoObj] = useState({});

  function clearInputFields() {
    setName("");
    setAge(0);
    setHeight(0);
    setSuperPower("");
  }

  return (
    <div className="App">
      <section>
        <h1>Build A Hero</h1>
        <div className="inputSection">
          <div>
            <label>Name: </label>
            <input
              type="text"
              style={{ margin: 10 }}
              value={name}
              onChange={(event) => setName(event.target.value)}
            ></input>
          </div>
          <div>
            <label>Age: </label>
            <input
              type="number"
              style={{ margin: 10 }}
              value={age}
              onChange={(event) => setAge(event.target.value)}
            ></input>
          </div>
          <div>
            <label>Height: </label>
            <input
              type="number"
              style={{ margin: 10 }}
              value={height}
              onChange={(event) => setHeight(event.target.value)}
            ></input>
          </div>
          <div>
            <label>SuperPower: </label>
            <input
              type="text"
              style={{ margin: 10 }}
              value={superPower}
              onChange={(event) => setSuperPower(event.target.value)}
            ></input>
          </div>
        </div>
      </section>
      <button
        onClick={() => {
          setDisplayCharacters(!displayCharacters);
          setInfoObj(
            (infoObj) => (infoObj = { name, age, height, superPower })
          );
          clearInputFields();
        }}
      >
        Display Characters
      </button>
      <section className="sectionInfo">
        <h1>Hero Info</h1>
        {displayCharacters && (
          <ul>
            <li>Name: {infoObj.name}</li>
            <li>Age: {infoObj.age}</li>
            <li>Height: {infoObj.height}</li>
            <li>SuperPower: {infoObj.superPower}</li>
          </ul>
        )}
      </section>
    </div>
  );
}

export default App;
