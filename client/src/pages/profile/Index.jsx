import React from "react";
import Profile_quote_header from "./Profile_quote_header";
import { Profile_meta } from "./Profile_meta";
import { ContentTabs } from "./ContentTabs";

const Index = () => {
  return (
    <div>
      <Profile_quote_header />
      <Profile_meta />
      <ContentTabs/>
    </div>
  );
};

export default Index;
