import React from "react";

export default function Rules() {
  return (
    <div className="boxShadow w-11/12 p-28 m-10 rounded" id="rules">
      <h1 className="text-2xl font-black text-purple-700 pb-5">
        Rules for Tic-Tac-Toe
      </h1>
      <ul>
        <li>1. The game is played on a grid that's 3 squares by 3 squares.</li>
        <li>
          2. You are X, your friend is O. Players take turns putting their marks
          in empty squares.
        </li>
        <li>
          3. The first player to get 3 of her marks in a row is the winner.
        </li>
        <li>
          4. When all 9 squares are full, the game is over. If no player has 3
          marks in a row, the game ends in a tie.
        </li>
      </ul>
    </div>
  );
}
