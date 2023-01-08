import React from "react";
import Features from "./docs/Features";
import Rules from "./docs/Rules";
import Play from "./docs/Play";
import History from "./docs/History";

export default function Docs() {
  return (
    <div id="docs">
      <h1 className="text-5xl font-black pb-14 pt-10 ml-32 pb-14">
        Mostly Asked Questions
      </h1>
      <div>
        <Features />
        <Rules />
        <Play />
        <History />
      </div>
      <hr />
    </div>
  );
}
