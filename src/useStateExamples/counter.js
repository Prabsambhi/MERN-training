import React, { useState } from "react";
// import UseCounter from "../hooks/counterHook";
import { useCounter } from "../context/counterContext";

const Counter = () => {
  
  // const {count, add, subtract} = UseCounter(0)

  const { count, add, subtract } = useCounter();

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl text-yellow-500">{count}</h1>
      <div>
        <button className="px-3 py-2 border border-black" onClick={add}>
          +1
        </button>
        <button className="px-3 py-2 border border-black" onClick={subtract}>
          -1
        </button>
      </div>
    </div>
  );
};

export default Counter;
