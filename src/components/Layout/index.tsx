import React, { FC } from "react";
import { Outlet } from "react-router-dom";

interface LayoutProps {}

const Layout: FC<LayoutProps> = () => {
  return (
    <div className="wrapper">
      <Outlet />
    </div>
  );
};

export default Layout;
