import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
// import main from "./main.jsx";

export default function Navbar() {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light bg-light border-bottom`}
    >
      <a className="navbar-brand" href="#">
        TextUtils
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
