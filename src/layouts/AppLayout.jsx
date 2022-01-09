import React from "react";
import { Nav } from "../components/HomePage/Nav";

const AppLayout = ({ children, ...rest }) => {
  return (
    <div className="app-layout">
      <Nav />
      {children}
    </div>
  );
};

export default AppLayout;
