import React from "react";

const HeaderBar = () => {
  return (
    <nav
      className="navbar navbar-expand-sm  navbar-dark"
      style={{ fontFamily: "Gamer" }}
    >
      <div className="container-fluid ">
        <a className="navbar-brand" href="#10">
          <img
            src={require("../../Asserts/applogo.jpg")}
            alt="Avatar Logo"
            style={{ width: "40px" }}
            className="rounded-pill"
          />
        </a>
        <a className="navbar-brand" href="#1">
          Gamers_World
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="collapsibleNavbar"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#2">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#3">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#4">
                Link
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default HeaderBar;
