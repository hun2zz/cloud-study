import React from "react";
import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Products from "./pages/Products";
import RootLayout from "./layout/RootLayout";
import ErrorPage from "./pages/ErrorPage";
import Events, { loader as eventListLoader } from "./pages/Events";
import EventDetail, {
  loader as eventDetailLoader,
  action as deleteAction,
} from "./pages/EventDetail";
import EventLayout from "./layout/EventLayout";
import NewEvent from "./pages/NewEvent";
import EditPage from "./pages/EditPage";
import { action as saveAction } from "./components/EventForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { index: true, element: <Home /> },
      {
        path: "events",
        element: <EventLayout></EventLayout>,
        children: [
          {
            index: true,
            element: <Events />,

            //이페이지가 열릴 때 자동으로 트리거되어 호출되는 함수
            //이 함수에는 페이지가 열리자마자 해야할 일을 적을 수 있음.
            // loader: eventListLoader,
          },
          {
            path: ":prodId",

            loader: eventDetailLoader,
            id: "event-detail",
            children: [
              { index: true, element: <EventDetail />, action: deleteAction },
              { path: "edit", element: <EditPage />, action: saveAction },
            ],
          },
          { path: "new", element: <NewEvent />, action: saveAction },
        ],
      },
    ],
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
