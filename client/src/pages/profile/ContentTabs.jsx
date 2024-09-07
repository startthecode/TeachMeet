import { Icon } from "@iconify/react/dist/iconify.js";
import { Tabs, rem } from "@mantine/core";
import styling from "./tabs.module.scss";
export const ContentTabs = () => {
  let iconStyle = "text-[35px]";

  let metaData = {
    all: {
      icon: (
        <Icon
          className={iconStyle}
          icon="material-symbols-light:border-all-outline"
        />
      ),
      text: "All",
    },
    video: {
      icon: <Icon className={iconStyle} icon="ph:video-camera-light" />,
      text: "Video",
    },
    material: {
      icon: <Icon className={iconStyle} icon="lets-icons:materials-light" />,
      text: "Materials",
    },
    live: {
      icon: <Icon className={iconStyle} icon="fluent:live-20-regular" />,
      text: "Live",
    },
  };
  return (
    <Tabs
      defaultValue={metaData.all.text}
      classNames={{
        tab: styling.tabButton,
        root: "mt-24 max-w-[80rem] mx-auto",
      }}
    >
      <Tabs.List grow>
        <Tabs.Tab
          onClick={() => console.log("aa")}
          value={metaData.all.text}
          leftSection={metaData.all.icon}
        >
          {metaData.all.text}
        </Tabs.Tab>

        <Tabs.Tab value={metaData.video.text} leftSection={metaData.video.icon}>
          {metaData.video.text}
        </Tabs.Tab>
        <Tabs.Tab
          value={metaData.material.text}
          leftSection={metaData.material.icon}
        >
          {metaData.material.text}
        </Tabs.Tab>
        <Tabs.Tab value={metaData.live.text} leftSection={metaData.live.icon}>
          {metaData.live.text}
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value={metaData.all.text}>Gallery tab content</Tabs.Panel>

      <Tabs.Panel value={metaData.video.text}>Messages tab content</Tabs.Panel>

      <Tabs.Panel value={metaData.material.text}>
        Settings tab content
      </Tabs.Panel>
      <Tabs.Panel value={metaData.live.text}>Live tab content</Tabs.Panel>
    </Tabs>
  );
};
