import React from "react";

export default function Listnav() {
  return (
    <div>
      <a
        href="#home"
        className="opacity-70 hover:opacity-100 hover:text-orange-400"
      >
        Home
      </a>
      <a
        href="#topics"
        className="opacity-70 hover:opacity-100 hover:text-orange-400 ml-7"
      >
        Topics
      </a>
      <a
        href="#docs"
        className="opacity-70 hover:opacity-100 hover:text-orange-400 ml-7"
      >
        Docs
      </a>
      <a
        href="#download"
        className="opacity-70 hover:opacity-100 hover:text-orange-400 ml-7"
      >
        Download
      </a>
    </div>
  );
}
