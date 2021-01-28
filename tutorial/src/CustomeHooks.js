import React, { useState } from "react";
import useCount from "./useCount";
export default function CustomeHooks() {
  const [count, setCount] = useState(0);
  const increaseCount = () => {
    setCount(count + 1);
  };
  useCount(count);
  return (
    <div>
      <h1>Custom Hooks</h1>
      <p>No of hits: {count}</p>
      <button onClick={increaseCount}>Click Me!.</button>
    </div>
  );
}
