import { useLocation } from "react-router-dom";
import { SideMenuCard } from "../ui/SideMenuCard";

export const SideBar = ({ expand }) => {
  return (
    <div>
      <img src="../" alt="" />
      <SideMenuCard
        expand={expand}
        iconColor={"text-[#3A5B22]"}
        icon="mdi-light:home"
        text="Home"
        link={"/profile/asd"}
      />
      <SideMenuCard
        expand={expand}
        iconColor={"text-[#3A5B22]"}
        icon="carbon:user-profile"
        text="Profile"
        link={"/"}
      />
      <SideMenuCard
        expand={expand}
        iconColor={"text-[#3A5B22]"}
        icon="material-symbols-light:live-tv-outline-sharp"
        text="Lives"
        link={"/"}
      />

      <SideMenuCard
        expand={expand}
        iconColor={"text-[#3A5B22]"}
        icon="carbon:subject-usage"
        text="Subjects"
        link={"/"}
      />
      <SideMenuCard
        expand={expand}
        iconColor={"text-[#3A5B22]"}
        icon="carbon:subject-usage"
        text="Subjects"
        link={"/"}
      />
    </div>
  );
};
