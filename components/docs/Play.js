import React from "react";

export default function Play() {
  return (
    <div className="boxShadow w-11/12 p-20 m-10 rounded" id="htp">
      <h1 className="text-2xl font-black mt-5 text-purple-700 pb-5">
        How can I win at Tic-Tac-Toe?
      </h1>
      <p>
        To beat the computer , you need to make use of a little bit of strategy.
        Strategy means figuring out what you need to do to win. Part of your
        strategy is trying to figure out how to get three Xs in a row. The other
        part is trying to figure out how to stop the computer from getting three
        Os in a row. After you put an X in a square, you start looking ahead.
        Where's the best place for your next X? You look at the empty squares
        and decide which ones are good choices—which ones might let you make
        three Xs in a row. You also have to watch where the computer puts its O.
        That could change what you do next. If the computer gets two Os in a
        row, you have to put your next X in the last empty square in that row,
        or the computer will win. You are forced to play in a particular square
        or lose the game. If you always pay attention and look ahead, you'll
        never lose a game of Tic-Tac-Toe. You may not win, but at least you'll
        tie.{/*  */}
      </p>
    </div>
  );
}
