import React from "react";
import MainNavigation from "./MainNavigation";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <MainNavigation></MainNavigation>
      {/* root LayOutdㅢ children 들이 outlet으로 렌더링 됨. */}
      <main>
        <Outlet></Outlet>
      </main>
    </>
  );
};

export default RootLayout;
