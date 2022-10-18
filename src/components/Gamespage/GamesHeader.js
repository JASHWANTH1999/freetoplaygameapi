import React from "react";
import { useSelector } from "react-redux";

const HeaderBar = () => {
  const gamername = useSelector((state) => state.searchvalue.gamername);
  return (
    <>
      <nav className="navbar navbar-dark bg-black">
        <div className="container-fluid">
          <span
            className="navbar-brand mb-0 h1 mx-auto"
            style={{ fontFamily: "Designer" }}
          >
            {gamername ? `Welcome ${gamername}` : " Welcome Solider"}
          </span>
        </div>
      </nav>
    </>
  );
};

export default HeaderBar;
