import { Icon } from "@iconify/react/dist/iconify.js";
import { Avatar } from "@mantine/core";
import React from "react";

const Profile_quote_header = () => {
  let quote = `The goal of life is living in agreement with nature`;
  return (
    <>
      <div className="relative bg-clr_primary-500 rounded-3xl overflow-hidden">
        <video
          className="h-full w-full absolute top-0 left-0 object-cover object-right opacity-70"
          src="/src/assets/images/theme_leaves.mp4"
          muted
          autoPlay
          loop
        ></video>
        {/* <img src="/src/assets/images/wave-bg.png" alt="" className="h-[90px] w-full absolute bottom-0 left-0 object-cover object-top " /> */}
        <p className="pb-32 pt-20 relative text-center text-white text-[2rem] font-light italic max-w-[40rem] mx-auto">
          {" "}
          <Icon icon="oui:quote" className="inline-block" /> {quote}{" "}
          <Icon className="inline-block" icon="entypo:quote" />
        </p>
      </div>
      <Avatar
        src="https://media.istockphoto.com/id/1353379172/photo/cute-little-african-american-girl-looking-at-camera.jpg?s=612x612&w=0&k=20&c=RCOYytwS2nMGfEb80oyeiCcIiqMQu6wnTluAaxMBye4="
        alt="it's me"
        size="10rem"
        classNames={{
          root: "-mt-20 mx-auto border-4 border-clr_primary-100 shadow-lg",
        }}
      />
    </>
  );
};

export default Profile_quote_header;
