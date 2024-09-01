import { Icon } from "@iconify/react/dist/iconify.js";
import { Link, NavLink } from "react-router-dom";

export const SideMenuCard = ({ icon, text, link, iconColor, expand }) => {
  return (
    // <NavLink
    //   activeclassname="active-link"
    //   to={link}
    //   className="relative group mb-4 max-w-[7rem] mx-auto block "
    // >
    //   <Icon
    //     icon="gravity-ui:triangle-right-fill"
    //     height={30}
    //     className="text-clr_primary-500 absolute top-[50%] translate-y-[-50%] -right-3 opacity-0 group-hover:opacity-100 group-[.active]:opacity-100 ease-linear duration-300 text-white "
    //   />
    //   <div
    //     className="flex flex-col justify-center items-center py-3
    //     border-clr_primary-50 border-[0.1px] rounded-[30px]
    //     group-hover:border-clr_primary-500 group-hover:bg-clr_primary-500
    //     ease-linear duration-300 bg-white relative z-1 group-[.active]:border-clr_primary-500 group-[.active]:bg-clr_primary-500"
    //   >
    //     <div className="h-[3rem] w-[3rem] bg-clr_primary-500 group-hover:bg-white rounded-full flex justify-center items-center mb-3 bg-opacity-5 group-hover:bg-opacity-10 ease-linear duration-300 group-[.active]:bg-opacity-10 group-[.active]:bg-white">
    //       <Icon
    //         icon={icon}
    //         height={28}
    //         className={`${iconColor} group-hover:text-white group-[.active]:text-white`}
    //       />
    //     </div>
    //     <p className="group-hover:text-white ease-linear duration-300 group-[.active]:text-white">
    //       {text}
    //     </p>
    //   </div>
    // </NavLink>

    <NavLink
      activeclassname="active-link"
      to={link}
      className="relative group mb-3 mx-auto block"
    >
      <Icon
        icon="gravity-ui:triangle-right-fill"
        height={30}
        className="text-clr_primary-500 absolute top-[50%] translate-y-[-50%] -right-3 opacity-0 group-hover:opacity-100 group-[.active]:opacity-100 ease-linear duration-300 text-white "
      />
      <div
        className={`${
          !expand ? "justify-center" : ""
        } flex px-3 items-center py-2
      border-white border-[0.1px] rounded-[10px]
      group-hover:border-clr_primary-500 group-hover:bg-clr_primary-500
      ease-linear duration-300 bg-white relative z-1 group-[.active]:border-clr_primary-500 group-[.active]:bg-clr_primary-500 `}
      >
        <div className="h-[2.4rem] w-[2.4rem] bg-clr_primary-500 group-hover:bg-white rounded-full flex justify-center items-center  bg-opacity-5 group-hover:bg-opacity-10 ease-linear duration-300 group-[.active]:bg-opacity-10 group-[.active]:bg-white ">
          <Icon
            icon={icon}
            height={20}
            width={20}
            className={`${iconColor} group-hover:text-white group-[.active]:text-white`}
          />
        </div>
        {expand && (
          <p className="group-hover:text-white ease-linear duration-300 group-[.active]:text-white ml-3">
            {text}
          </p>
        )}
      </div>
    </NavLink>
  );
};
