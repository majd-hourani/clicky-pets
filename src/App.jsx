import { useState } from "react";
import AnimalShow from "./AnimalShow";

function getRandomAnimal() {
  const animals = ["bird", "cat", "cow", "dog", "gator", "horse"];

  return animals[Math.floor(Math.random() * animals.length)];
}

function App() {
  const [animals, setAnimals] = useState([]);

  function handleClick() {
    setAnimals([...animals, getRandomAnimal()]);
  }

  const renderedAnimals = animals.map((animal, index) => {
    return <AnimalShow animal={animal} key={index} />;
  });

  return (
    <div className="app">
      <button className="add-button" onClick={handleClick}>
        Add Animal
      </button>
      <p className="zoo">{renderedAnimals}</p>
    </div>
  );
}

export default App;
