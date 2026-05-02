import { useState } from "react";

function App() {
  let [counter, setCounter] = useState(15);

  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
      console.log("Clicked", Math.random());
    }
  };

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
      console.log("Clicked", Math.random());
    }
  };

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value:{counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}

export default App;
