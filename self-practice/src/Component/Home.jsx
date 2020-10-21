import React from "react";
import { Navibar } from "./Navigationbar/Navibar";
import { CenterBlogs } from "./BloggerArea/CenterBlogs";

export const Home = () => {
  return (
    <React.Fragment>
      <Navibar />
      <CenterBlogs/>
    </React.Fragment>
  );
};
