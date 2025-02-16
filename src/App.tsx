import { useState } from "react";

import "./App.css";

export default function App() {
  return (
    <>
      <Game />
    </>
  );
}

function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [xIsNext, setXIsNext] = useState(true);
  const currentSquares = history[history.length - 1];

  function handlePlay(nextBoard:any){
    setHistory([...history,nextBoard]);   // ...history is for all history items
    setXIsNext(!xIsNext);
  }

  function jumpTo(nextMove:number){

  }

  const moves = history.map((nextBoard,move) => {
    let description = move>0 ? "Go to move #"+move : "Go to game start";

    return(
      <li key={move}>
        <button onClick={()=>{jumpTo(move)}}>
          {description}
        </button>
      </li>
    );

  });

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} board={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

function Board({xIsNext,board,onPlay}:any) {

  function handleClick(index: number) {
    if (board[index] || calculateWinner(board)) {
      return;
    }

    const temp = board.slice();
    if (xIsNext) temp[index] = "X";
    else temp[index] = "O";

    onPlay(temp);

    console.log(temp); //React schedules the state update and it will
    console.log(board); //happen after the function completes and the component re-renders.
  }

  const winner = calculateWinner(board);
  let status;
  if (winner) {
    status = "The winner is: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
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
      <h4>{status}</h4>
      <div className="board-row">
        <Square
          value={board[0]}
          onSquareClick={function () {
            handleClick(0);
          }}
        />
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

function calculateWinner(board: Array<string>): string | null {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    if (
      board[lines[i][0]] == board[lines[i][1]] &&
      board[lines[i][0]] == board[lines[i][2]]
    ) {
      return board[lines[i][0]];
    }
  }

  return null;
}
