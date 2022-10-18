import React from "react";
import HomePage from "./HomePage";
import HeaderBar from "./HeaderBar";
import "../../App.css";

const startingPage = () => {
  return (
    <>
      <HeaderBar />
      <div className="HomeBody">
        <HomePage />
      </div>
    </>
  );
};

export default startingPage;
