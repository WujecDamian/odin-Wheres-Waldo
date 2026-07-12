import { Component } from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import GameLevel from "./pages/Game/GameLevel";

function Root() {
  return <h1>Hello world</h1>;
}
//https://reactrouter.com/start/modes#data
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
