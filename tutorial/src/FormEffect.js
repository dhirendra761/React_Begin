import React, { useState, useEffect } from "react";

const FormEffect = () => {
  const [count, setCount] = useState(1);
  const setUpdate = () => {
    setCount(count + 1);
  };
  useEffect(() => {
    console.warn(count);
  }, []);
  return (
    <div>
      <h1>Hello The count is..{count}</h1>
      <button onClick={setUpdate}>Update</button>
    </div>
  );
};

export default FormEffect;
