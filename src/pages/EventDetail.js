import React from "react";
import { useLoaderData, useRouteLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";
import { redirect } from "react-router-dom";
import { EVENT_URL } from "../config/host-config";

const EventDetail = () => {
  // const ev = useLoaderData();
  const ev = useRouteLoaderData("event-detail");
  return <EventItem event={ev} />;
};

export default EventDetail;

export const loader = async ({ params }) => {
  const { prodId: id } = params;

  // console.log('abc: ', abc.params.eventId);

  // use로 시작하는 함수인 리액트 훅은 컴포넌트 내부에서만 사용가능
  // const { eventId: id } = useParams();
  // const [ev, setEv] = useState({});

  const response = await fetch(`${EVENT_URL}/${id}`);

  if (!response.ok) {
    // ... 예외처리
  }

  return await response.json();
  // console.log('json: ', json);
};

export const action = async (abc) => {
  // action 함수를 트리거하는 방법
  // 1. form이 있는 EventFormㄴ으로 이동
  const id = abc.params.prodId;

  // const formData = await request.formData();
  // // console.log(formData);

  // // console.log(payload);
  if (!window.confirm("정말 삭제하시겠어요?")) return;
  await fetch(`${EVENT_URL}/${id}`, {
    method: "DELETE",
  });

  return redirect("/events");
};
