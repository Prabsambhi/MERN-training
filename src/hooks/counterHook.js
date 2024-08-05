import  {useState} from "react";

const UseCounter = (initialValue) => {
  const [count, setCount] = useState(initialValue);

  function add() {
    setCount(count + 1);
  }

  function subtract() {
    setCount(count - 1);
  }

  return { count, add, subtract };
};

export default UseCounter;
