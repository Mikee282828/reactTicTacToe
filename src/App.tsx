import { useState } from "react";

import "./App.css";

export default function App() {
  return (
    <>
      <Board />
    </>
  );
}

function Board() {
  return (
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}

function Square() {
  const [value, setValue] = useState<null|string>(null);

  function handleClick() {
    setValue('X');
  }

  return (
    <button className="square" onClick={handleClick}>
      {value}
    </button>
  );
}
