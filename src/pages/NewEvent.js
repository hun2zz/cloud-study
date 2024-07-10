import React from "react";
import EventForm from "../components/EventForm";


const NewEvent = () => {
  return <EventForm method="post" />;
};

export default NewEvent;

// 서버에 갱신요청을 보내는 트리거함수
// App.js에서 router에 설정

