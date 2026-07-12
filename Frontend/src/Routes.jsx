import { Component } from "react";
import { createBrowserRouter } from "react-router-dom";

function Root() {
  return <h1>Hello world</h1>;
}

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "/level/:gameLevel", Component: GameLevel },
    ],
  },
]);

export default router;
