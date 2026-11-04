function App() {
  function handleClick() {
    console.log("Button was clicked");
  }

  return (
    <div>
      <button onClick={handleClick}></button>
    </div>
  );
}

export default App;
