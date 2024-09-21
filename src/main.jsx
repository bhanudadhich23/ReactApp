import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "../Components/About.jsx";
import Navbar from "../Components/Navbar.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<App />}></Route>
      {/* <Route path="/about" element={<About />}></Route> */}
    </Routes>
  </BrowserRouter>
);
