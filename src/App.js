import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount((prev) => prev + 1);
  };
  const decrementCount = () => {
    if (count > 0) {
      setCount((prev) => prev - 1);
    }
  };
  return (
    <div className="App">
      <h3>count : {count}</h3>
      <button onClick={incrementCount}>increment</button>
      <button onClick={decrementCount}>increment</button>
    </div>
  );
}

export default App;
