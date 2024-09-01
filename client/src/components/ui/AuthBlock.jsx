import React from "react";
import { imageFallbacks } from "../../constant/fallbacks";

export const AuthBlock = ({ title, imgdir = "right", imgPath, children }) => {
  return (
    <div className="flex min-h-svh justify-center items-center auth_block w-full flex-col">
      <h1 className="text-white text-[4rem] font-semibold uppercase opacity-70 text-center shadow-[0_20px_80px_15px_rgba(0,0,0,0.2)]">
        {title}
      </h1>
      <div className="md:flex justify-between bg-clr_primary max-w-[1100px] w-full rounded-3xl shadow-[0_20px_80px_15px_rgba(0,0,0,0.2)] -mt-8 relative overflow-hidden ">
        <div
          className={`basis-6/12 ${
            imgdir === "left" ? "order-2" : ""
          } h-[500px]`}
        >
          {children}
          <div className=""></div>
        </div>
        <div
          className={`basis-6/12 ${
            imgdir === "left" ? "order-1 " : ""
          } bg-red-500`}
        >
          <img src={imgPath || imageFallbacks.default} className="object-cover object-center h-full w-full" alt="" />
        </div>
      </div>
    </div>
  );
};
