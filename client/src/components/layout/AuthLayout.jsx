import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { imageFallbacks } from "../../constant/fallbacks";
import { Icon } from "@iconify/react/dist/iconify.js";

export const AuthLayout = () => {
  let { pathname } = useLocation();
  let quote = pathname.includes("signin")
    ? `allow nature's peace to flow into you`
    : `peace can be found in every piece of nature`;
  return (
    <div className=" relative">
      <div className="flex lg:items-center auth_block w-full lg:h-screen lg:container overflow-auto flex-wrap">
        <div className="lg:h-screen bg-[url('../../assets/images/auth_Side-leaves.jpg')] lg:w-[50%] lg:right-0 lg:top-0 bg-cover lg:absolute overflow-hidden h-[200px] w-full">
          <video
            className="h-full w-full object-cover object-right"
            src="https://assets.mixkit.co/videos/18310/18310-720.mp4"
            muted
            autoPlay
            loop
          ></video>
        </div>
        <div className="lg:basis-6/12 basis-full lg:px-6 px-[15px] 2xl:px-0 lg:order-1 bg-white relative lg:mt-0 md:mt-16 mt-10 lg:pb-0 pb-10">
          {/* <img src="/src/assets/images/TeachMeet.png" className="h-[5rem]" alt="" /> */}
          <div className="lg:max-w-[30rem] mx-auto">
            <Outlet />
          </div>
        </div>

        <div className="absolute lg:w-[50%] w-full right-0 top-0 z-[10] text-white lg:h-screen h-[200px] bg-black bg-opacity-60 italic flex justify-center items-center lg:text-[2rem] font-light text-center text-[1.4rem] px-4">
          <p className="lg:max-w-[500px]">
            <Icon icon="oui:quote" className="inline-block" /> {quote}{" "}
            <Icon className="inline-block" icon="entypo:quote" />
          </p>
        </div>
      </div>
    </div>
  );
};
