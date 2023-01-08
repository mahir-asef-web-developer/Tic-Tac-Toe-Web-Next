import React from "react";
import Listnav from "./Listnav";
import SocialMedia from "./SocialMedia";

export default function Footer() {
  return (
    <div className="m-24">
      <div className="grid grid-rows-1 grid-cols-3 pb-10">
      <Listnav />
      <a href="/" className="grid grid-rows-1 grid-cols-2 relative ml-20">
        <img src="/imgs/favicon.ico" width={40} height={40} />
        <h1 className="text-4xl font-bold absolute left-10">Tic-Tac-Toe</h1>
      </a>
      <SocialMedia />
      </div>
      <hr />
<p className="ml-96 pl-36 opacity-60">Copyright &copy; </p>
    </div>
  );
}
