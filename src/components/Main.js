import React from "react";
import { useRouteLoaderData } from "react-router-dom";

const Main = () => {
  const userData = useRouteLoaderData("user-data");
  console.log(userData.email);
  return (
    <>
      <h2>{userData.email}</h2>
      <h3>현재 권한 : [ {userData.role} ]</h3>
      <button>LogOut</button>
    </>
  );
};

export default Main;
