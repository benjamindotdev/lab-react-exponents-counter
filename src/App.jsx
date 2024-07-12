import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import Exponent from "./components/Exponent";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <h2>
        <em>Counter</em>
      </h2>

      <Counter count={count} setCount={setCount} />

      <br />
      <h2>
        <em>Exponents</em>
      </h2>

      <div className="container">
        <Exponent count={count} number={1} />
        <Exponent count={count} number={2} />
        <Exponent count={count} number={3} />
        <Exponent count={count} number={4} />
        <Exponent count={count} number={5} />
      </div>
    </div>
  );
}

export default App;
