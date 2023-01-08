import Image from "next/image";
import Listnav from "./Listnav";

export default function Header() {
  return (
    <header
      className="bg-white p-3 mb-20 pt-10 mx-0 my-auto gird grid-cols-2 h-max"
      id="home"
    >
      <a
        href="/"
        className="grid grid-rows-1 ml-32 relative grid-cols-2 md:order-1"
      >
        <Image
          src="/favicon.ico"
          width={50}
          height={50}
          className="absolute left-0"
        />
        <h1 className="text-4xl font-bold ml-14 w-max pt-1">Tic-Tac-Toe</h1>
      </a>
      <div className="absolute top-9 right-5 pt-2 grid grid-cols-2 grid-rows-1 md:order-2">
        <Listnav />
        <a href="#contact">
          <button className="px-4 py-2 bg-purple-500 ml-7 rounded-md text-white hover:bg-purple-800 mr-32">
            Contact
          </button>
        </a>
      </div>
    </header>
  );
}
