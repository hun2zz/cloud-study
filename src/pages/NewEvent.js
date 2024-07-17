import React, { useContext, useEffect } from "react";
import EventForm from "../components/EventForm";
import EventContext from "../components/context/event-context";
import { useNavigate, useRouteLoaderData } from "react-router-dom";

const NewEvent = () => {
  const navigate = useNavigate();
  const { totalEventCount } = useContext(EventContext);

  const { role } = useRouteLoaderData("user-data");

  //라우트 가드 (권한, 개수 검증)
  useEffect(() => {
    if (totalEventCount >= 4 && role === "COMMON") {
      alert("일반 회원은 이벤트 생성이 4개로 제한됩니다.");
      navigate("/events");
    }
  }, [totalEventCount]);
  return <EventForm method="post" />;
};

export default NewEvent;

// 서버에 갱신요청을 보내는 트리거함수
// App.js에서 router에 설정
