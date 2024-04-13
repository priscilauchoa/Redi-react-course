import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  function minus() {
    count < 1 ? count : setCount(count - 1);
  }
  function plus() {
    setCount(count + 1);
  }
  return (
    <div className="container">
      <h2>Counter exercise class 7</h2>
      <div className="counter">
        <CounterButton onClick={minus} label="-" bc="bc-red" />
        <CounterContent count={count} />
        <CounterButton onClick={plus} label="+" bc="bc-green" />
      </div>
    </div>
  );
}

export default Counter;

function CounterButton({ onClick, label, bc }) {
  return (
    <button className={bc} onClick={onClick}>
      {label}
    </button>
  );
}

function CounterContent({ count }) {
  return <div className="counter">{count}</div>;
}
