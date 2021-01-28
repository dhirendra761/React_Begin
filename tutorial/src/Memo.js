import React, { useState, Suspense, lazy } from "react";
// import MemoChildren from "./MemoChildren";
const MemoChildren = lazy(() => import("./MemoChildren"));
const Refs = lazy(() => import("./Refs"));
const Memo = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(100);
  return (
    <div>
      <h1>Memo Component {count}</h1>
      <Suspense fallback={<h2>Please wait.....</h2>}>
        <MemoChildren data={data} />
      </Suspense>
      <button onClick={() => setCount(count + 1)}>Increse Count</button>
      <button>Incrense Data</button>
      <Suspense fallback={<h2>Please wait....Refs.</h2>}>
        <Refs />
      </Suspense>
    </div>
  );
};

export default Memo;
