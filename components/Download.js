import React from "react";

export default function Download() {
  return (
    <div id="download">
      <h1 className="text-5xl font-black pt-10 ml-32 pb-12">Download</h1>
      <p className="text-lg font-bold ml-32 mb-10">
        Tic-Tac-Toe is only available for windows. We are so sorry for not
        making it plartform independent. So, it can't run in MacOS or Linux.
      </p>
      <a
        href="/download/tic-tac-toe-win32-x64-installer.exe"
        className="px-4 py-2 bg-purple-700 rounded-md text-white hover:bg-purple-900 download font-bold"
        download
      >
        Download now
      </a>
    </div>
  );
}
