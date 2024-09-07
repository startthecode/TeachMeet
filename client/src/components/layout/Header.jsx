import React from "react";
import { getHeadingState } from "../../redux/stores";
import { useSelector } from "react-redux";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Menu, Button, Text, rem, Avatar, Select } from "@mantine/core";
const Header = () => {
  let heading = useSelector(getHeadingState);
  return (
    <div className=" py-4 border-b-2 border-slate-100 w-full flex justify-between ">
      <div>
        <h1 className="Header_heading  font-medium my-0"> {heading.heading}</h1>
        <p className="text-[1rem] text-gray-600">Welcome to the teach meet</p>
      </div>

      <div className="flex items-center">
        <Select
          rightSection={" "}
          leftSection={
            <Icon
              icon="carbon:search"
              className="w-5 h-6  text-clr_primary-500"
            />
          }
          classNames={{
            wrapper: "mr-4",
            input:
              "block w-full px-4 py-6 ps-10 text-sm text-gray-900 border border-slate-50 rounded-lg bg-white bg-opacity-80 outline-none text-lg",
          }}
          placeholder="Search"
          data={["React", "Angular", "Vue", "Svelte"]}
          searchable
        />

        <Menu shadow="md" width={200}>
          <Menu.Target>
            <Avatar
              src="https://media.istockphoto.com/id/1353379172/photo/cute-little-african-american-girl-looking-at-camera.jpg?s=612x612&w=0&k=20&c=RCOYytwS2nMGfEb80oyeiCcIiqMQu6wnTluAaxMBye4="
              alt="it's me"
              className="h-12 w-12 border-2 border-slate-50 shadow-md cursor-pointer"
            />
          </Menu.Target>

          <Menu.Dropdown>
            <Menu.Label>Application</Menu.Label>
            <Menu.Item leftSection={"a"}>Settings</Menu.Item>
            <Menu.Item leftSection={"a"}>Messages</Menu.Item>
            <Menu.Item leftSection={"a"}>Gallery</Menu.Item>
            <Menu.Divider />

            <Menu.Label>Danger zone</Menu.Label>
            <Menu.Item leftSection={"a"}>Transfer my data</Menu.Item>
            <Menu.Item color="red" leftSection={"a"}>
              Delete my account
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </div>
    </div>
  );
};

export default Header;
