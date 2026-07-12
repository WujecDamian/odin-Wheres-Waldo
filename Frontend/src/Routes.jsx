import { Component } from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import GameLevel from "./pages/Game/GameLevel";
import RootLayout from "./layouts/RootLayout";

//https://reactrouter.com/start/modes#data
const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "/level/:gameLevel", Component: GameLevel },
    ],
  },
]);

export default router;
