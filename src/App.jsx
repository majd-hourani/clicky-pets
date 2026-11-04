import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    console.log("Button was clicked");
    setCount(count + 1);
  }

  return (
    <div>
      <button onClick={handleClick}>Add Animal</button>
      <p>Number of animals: {count}</p>
    </div>
  );
}

export default App;
