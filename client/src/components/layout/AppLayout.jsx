import { Outlet } from "react-router-dom";
import Header from "./Header";
import { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { SideBar } from "./SideBar";
import Scrollbars from "react-custom-scrollbars-2";

export const AppLayout = () => {
  let [expand, setExand] = useState(true);
  return (
    <div className="flex h-screen bg-white">
      {/* Side Bar */}
      <div
        className={`sideBar px-3 relative h-full bg-white  overflow-hidden ease-linear duration-200 border-r-2 border-slate-50 shadow-lg ${
          expand ? "w-[15vw] largeDESK:w-[13vw]" : "w-[100px]"
        }`}
      >
        {/* Side Bar */}
        <Scrollbars
          style={{ height: "100%", width: "100%" }}
          renderThumbVertical={({ style, ...props }) => {
            const thumbStyle = {
              backgroundColor: `#D9E0CE`,
              right: "-4px",
              width: "2px",
              height: "20px",
              padding: "0",
            };
            return <div style={{ ...style, ...thumbStyle }} {...props} />;
          }}
        >
          <div className="py-5">
            <SideBar expand={expand} />
          </div>
        </Scrollbars>
        {/* Arrow Right */}
        <div className="absolute top-[50%] translate-[-50%] right-1">
          <Icon
            icon="formkit:right"
            className={`text-clr_primary-500 origin-center cursor-pointer`}
            height={20}
            onClick={() => setExand(!expand)}
          />
        </div>
      </div>
      {/* Right Content */}
      <div
        className="content ease-linear duration-200 h-screen overflow-hidden"
        style={{ width: expand ? "calc(100vw - 13vw)" : "calc(100vw - 100px)" }}
      >
        {/* Header */}
        <Scrollbars
          style={{ height: "100%", width: "100%" }}
          renderThumbVertical={({ style, ...props }) => {
            const thumbStyle = {
              backgroundColor: `#3A5B22`,
              right: "-4px",
              width: "2px",
              height: "20px",
              padding: "0",
            };
            return <div style={{ ...style, ...thumbStyle }} {...props} />;
          }}
        >
          <div className="px-6">
            <Header />
            <div className="content my-5 overflow-hidden rounded-t-[20px]">
              {/* Content */}
              <Outlet />
            </div>
          </div>
        </Scrollbars>
      </div>
    </div>
  );
};
