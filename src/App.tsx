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
  const [board, setBoard] = useState(Array<string>(9)); // simile alle variabile reattive di vue

  function handleClick(index: number) {
    const temp = board.slice();
    temp[index] = "X";
    setBoard(temp);
    console.log(temp);  //React schedules the state update and it will 
    console.log(board); //happen after the function completes and the component re-renders.
  }

  return (
    <>
      {/* !!!!!! WHY YOU SHOULDN'T USE PROP={FUNCTION(SOMETHING)} */}
      {/* <Square value={squares[0]} onSquareClick={handleClick(0)} />
        Here is why this doesn’t work. The handleClick(0) call will be a part of rendering 
        the board component. Because handleClick(0) alters the state of the board component
        by calling setSquares, your entire board component will be re-rendered again. But this 
        runs handleClick(0) again, leading to an infinite loop: */}
      {/* Why didn’t this problem happen earlier? */}
      {/* When you were passing onSquareClick={handleClick}, you were passing 
      the handleClick function down as a prop. You were not calling it! But now
       you are calling that function right away—notice the parentheses 
      in handleClick(0)—and that’s why it runs too early. You don’t want to call
       handleClick until the user clicks! */}

      <div className="board-row">
        <Square value={board[0]} onSquareClick={function(){handleClick(0)}} />
        <Square value={board[1]} onSquareClick={() => handleClick(1)} />
        <Square value={board[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={board[3]} onSquareClick={() => handleClick(3)} />
        <Square value={board[4]} onSquareClick={() => handleClick(4)} />
        <Square value={board[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={board[6]} onSquareClick={() => handleClick(6)} />
        <Square value={board[7]} onSquareClick={() => handleClick(7)} />
        <Square value={board[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

function Square({ value, onSquareClick }: any) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}
