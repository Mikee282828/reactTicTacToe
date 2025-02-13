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
        <Square/>
        <Square/>
        <Square/>
      </div>
      <div className="board-row">
      <Square/>
      <Square/>
      <Square/>

      </div>
      <div className="board-row">
      <Square/>
      <Square/>
      <Square/>

      </div>
    </>
  );
}

function Square(){
  return <button className="square">1</button>;
}
