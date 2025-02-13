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
        <Square value={1} />
        <Square value={2} />
        <Square value={3} />
      </div>
      <div className="board-row">
        <Square value={1} />
        <Square value={1} />
        <Square value={1} />
      </div>
      <div className="board-row">
        <Square value={1} />
        <Square value={1} />
        <Square value={1} />
      </div>
    </>
  );
}

function Square({ value }: any) {
  return <button className="square">{value}</button>;
}
