import React from "react";
import { Form, useRouteLoaderData } from "react-router-dom";

const Main = () => {
  const userData = useRouteLoaderData("user-data");
  console.log(userData.email);
  return (
    <>
      <h2>{userData.email}</h2>
      <h3>현재 권한 : [ {userData.role} ]</h3>
      {/* 다른 라우트의 액션을 트리거하는 방법 */}

      <Form action="/logout" method="POST">
        <button>LogOut</button>
      </Form>
    </>
  );
};

export default Main;
