import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import "../../node_modules/modern-normalize/modern-normalize.css";
import router from "./Routes";
import { RouterProvider } from "react-router-dom";

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
