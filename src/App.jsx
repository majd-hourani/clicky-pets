import { useState } from "react";

function getRandomAnimal() {
  const animals = ["bird", "cat", "cow", "dog", "gator", "horse"];

  return animals[Math.floor(Math.random() * animals.length)];
}

function App() {
  const [animals, setAnimals] = useState([]);

  function handleClick() {
    console.log("Button was clicked");
    setAnimals([...animals, getRandomAnimal()]);
  }

  return (
    <div>
      <button onClick={handleClick}>Add Animal</button>
      <p>Number of animals: {animals.length}</p>
    </div>
  );
}

export default App;
