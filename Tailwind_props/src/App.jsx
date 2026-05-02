import { useState } from "react";
import Card from "./components/Card";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-green-400 p-4 rounded-xl">Tailwind test</h1>
      <Card username="chaiaurcode" btnText="click me" />
      <Card username="Himanshu" />
    </>
  );
}

export default App;
