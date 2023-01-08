import React from "react";
import Script from "next/script";

export default function Contact() {
  return (
    <div className="grid grid-cols-2 grid-rows-1 relative" id="contact">
      <img src="imgs/thinking.webp" className="pl-24 pr-0 pt-12 w-fit" />
      <div className="pt-32 w-max absolute contactHeader">
        <h1 className="text-5xl font-black">Still Didn’t Find Your Answer?</h1>
        <p className="pt-3">
          Send an e-mail to us.Though we can answer your question.Our answer
          will available{" "}
          <a href="#docs" className="underline decoration-2 contactHereLink">
            here
          </a>
          .
        </p>
        <button
          id="contactButton"
          className="relative px-4 py-2 bg-purple-700 ml-7 rounded-md text-white hover:bg-purple-900 mr-32 mt-5 contactBtn"
        >
          <a
            href="https://www.facebook.com/profile.php?id=100088233897810"
            target="_blank"
          >
            Contact Us
          </a>
        </button>
      </div>
      <Script src="/javascript/contact.js"></Script>
    </div>
  );
}
