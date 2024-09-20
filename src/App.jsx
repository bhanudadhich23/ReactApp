import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import './App.css'
import { createBrowserRouter } from "react-router-dom";
// import main from "./main";
import Navbar from "../Components/Navbar";
import TextForm from "../Components/TextForm";
import About from "../Components/About";
import Alert from "../Components/Alert";

function App() {
  return (
    <>
      <Alert alert={"you can change the theme also"}></Alert>
      <div className="container my-3">
        <TextForm heading={"Enter the text to analyze below"}></TextForm>

        {/* <About></About> */}
      </div>
    </>
  );
}

export default App;
