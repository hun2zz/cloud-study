import React, { useEffect, useState } from "react";
import LoginForm from "../components/auth/LoginForm";
import Main from "../components/Main";
import { useRouteLoaderData } from "react-router-dom";

const WelcomePage = () => {
  //로그인 여부

  const userData = useRouteLoaderData("user-data"); // 상위 라우트 페이지의 loader 데이터 불러오기
  // const [isLoggedIn, setIsLoggedIn] = useState(
  //   localStorage.getItem("userData") !== null
  // // );
  // useEffect(() => {
  //   const userData = localStorage.getItem("userData");
  //   if (userData) setIsLoggedIn(true);
  //   else setIsLoggedIn(false);
  // }, [isLoggedIn]);

  return (
    <>
      {!userData && <LoginForm></LoginForm>}
      {userData && <Main></Main>}
    </>
  );
};

export default WelcomePage;
