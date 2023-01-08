import React from "react";
import Image from "next/image";

export default function Landing() {
  const landingImg = 500;

  return (
    <div className="grid grid-rows-1 truncate" id="home">
      <div className="pl-8 pt-10">
        <h1 className="font-black text-6xl ml-44 h-max">
          A Tic Tac Toe Game <br />{" "}
          <span className="text-purple-900 h-max"> By Md.Mahir Asef</span>
        </h1>
        <p className="ml-28 text-xl mt-6 pb-32">
          Tic-tac-toe is a game in which two players take turns in drawing
          either an 'O' or
          <br />
          an 'X' in one square of a grid consisting of nine squares.
        </p>
      </div>
      <Image
        width={landingImg}
        height={landingImg - 200}
        src="/imgs/usingLaptop.jpg"
        className="absolute right-0 px-10 landingImage rounded-full md:order-3"
      />
      <hr />
    </div>
  );
}
