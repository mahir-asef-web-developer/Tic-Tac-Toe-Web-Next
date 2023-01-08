import React from "react";
import Facebook from "./svgs/Facebook";
import GitHub from "./svgs/GitHub";

export default function SocialMedia() {
  return (
    <div className="grid grid-cols-2 grid-rows-1 relative">
      <Facebook />
      <GitHub />
    </div>
  );
}
