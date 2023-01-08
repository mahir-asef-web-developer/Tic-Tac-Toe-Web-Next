import MagicSVG from "./svgs/MagicSVG";
import Rules from "./svgs/Rules";
import Win from "./svgs/Win";
import History from "./svgs/History";

export default function Topics() {
  return (
    <div className="mt-12 overflow-x-hidden" id="topics">
      <h1 className="font-black text-5xl ml-32">Browse Your Topics</h1>
      <div className="overflow-x-scroll grid grid-cols-4 grid-rows-1 pb-14">
        <a href="#features" className="p-5 w-72 border-black mt-14 boxShadow ml-10">
          <MagicSVG />
          <h1 className="font-md mt-3 text-2xl pl-16">Features</h1>
          <p>
            You probably already know how to play Tic-Tac-Toe. It's a really
            simple game, right? That's what most people think. But if you really
            wrap your brain around it, you'll discover that Tic-Tac-Toe isn't
            quite as simple as you think! <a href="#features">...</a>
          </p>
        </a>
        <a href="#rules" className="p-5 w-72 border-black mt-14 boxShadow ml-10">
          <Rules />
          <h1 className="font-md mt-3 text-2xl pl-16">Rules</h1>
          <p>
            The game is played on a grid that's 3 squares by 3 squares.You are
            X, your friend is O. Players take turns putting their marks in empty
            squares.
          </p>
        </a>
        <a href="#htp" className="p-5 w-72 border-black mt-14 boxShadow ml-10">
          <Win />
          <h1 className="font-md mt-3 text-2xl pl-16">How to Win</h1>
          <p>
            To beat the computer , you need to make use of a little bit of
            strategy. Strategy means figuring out what you need to do to win.
            Part of your strategy is trying to figure out how to get three Xs in
            a row. The other
          </p>
        </a>
        <a
          href="#history"
          className="p-5 w-72 border-black mt-14 boxShadow mr-32 ml-10"
        >
          <History />
          <h1 className="font-md mt-3 text-2xl pl-16">History</h1>
          <p>
            Games played on three-in-a-row boards can be traced back to ancient
            Egypt, where such game boards have been found on roofing tiles
            dating from around 1300 BC.
          </p>
        </a>
        <div className="mr-32"></div>
      </div>
      <hr />
    </div>
  );
}
