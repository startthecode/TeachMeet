import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

const Profile_quote_header = () => {
  let quote = `The goal of life is living in agreement with nature`;
  return (
    <div className="relative bg-black">
    <video class="h-full w-full absolute top-0 left-0 object-cover object-right opacity-60" src="/src/assets/images/theme_leaves.mp4" autoplay="" loop="" muted></video>
      <img src="/src/assets/images/wave-bg.png" alt="" className="h-[80px] w-full absolute bottom-0 left-0 object-cover object-top " />
      <p className="pb-32 pt-20 relative text-center text-white text-[1.8rem] font-light">
        {" "}
        <Icon icon="oui:quote" className="inline-block" /> {quote} {" "}
        <Icon className="inline-block" icon="entypo:quote" />
      </p>
    </div>
  );
};

export default Profile_quote_header;
