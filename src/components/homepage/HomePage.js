import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import "./HomePage.css";
import { useTransition, animated } from "react-spring";

import { searchvalueactions } from "../../redux/SearchBarvalue";
const HomePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [bar, setbar] = useState(false);
  const [gname, setgname] = useState("");
  const [cname, setcname] = useState("");
  const [pname, setpname] = useState("");
  const [sname, setsname] = useState("");
  const transition = useTransition(bar, {
    from: { x: -100, y: 0, width: 100, opacity: 0.5, delay: 200 },
    enter: { x: 0, y: 0, width: 800, opacity: 1 },
    leave: { x: 40, y: 800, width: 20, opacity: 0 },
  });

  const storeGamingName = (e) => {
    setgname(e.target.value);
  };
  const categoryvalue = (e) => {
    setcname(e.target.value);
  };
  const platformHandler = (e) => {
    setpname(e.target.value);
  };
  const submithandler = (event) => {
    event.preventDefault();
    dispatch(searchvalueactions.getsearchvalue({ gname, cname, pname, sname }));
    // dispatch(searchvalueactions.getgamesapi());
    navigate("/gameslistpage");
  };
  const sortedHandler = (e) => {
    setsname(e.target.value);
  };

  return (
    <div className="container-fluid">
      <div>
        <div
          className="GamerQuotes"
          style={{ fontFamily: "jash", paddingTop: "10%" }}
        >
          {bar ? <p>Keep calm and game on.</p> : ""}
        </div>
        <form className="mt-3" onSubmit={submithandler}>
          <div>
            {!bar ? (
              <div className="SearchButton m-2">
                <div
                  className="popuptext"
                  onClick={() => {
                    setbar(true);
                  }}
                >
                  Do you wanna show Case Your Gaming Name.Click Me!!!!!
                </div>
              </div>
            ) : (
              ""
            )}
            <div className="SearchTab mb-4">
              {transition((style, item) =>
                item ? (
                  <animated.input
                    placeholder="Give you Gaming Name"
                    name="gameName"
                    id="searchBar"
                    type="text"
                    style={style}
                    onChange={storeGamingName}
                  />
                ) : (
                  ""
                )
              )}
            </div>
            <div className="categorys mb-4">
              <label htmlFor="category" className="categorylabel ">
                Category:-
              </label>
              <select name="category" id="category" onChange={categoryvalue}>
                <option>select the option</option>
                <option value="shooter">shooter</option>
                <option value="moba">moba</option>
                <option value="anime">anime</option>
                <option value="mmorpg">mmorpg</option>
                <option value="battle-royale">battle-royale</option>
                <option value="strategy">strategy</option>
                <option value="fantasy">fantasy</option>
                <option value="sci-fi">sci-fi</option>
                <option value="card-games">card-games</option>
                <option value="racing">racing</option>
                <option value="fighting">fighting</option>
                <option value="social">social</option>
                <option value="sports">sports</option>
              </select>
            </div>
            <div className="platformdiv mb-4">
              <p>Do want to select certain platform of games: </p>
              <input
                type="radio"
                id="platformvalue"
                name="platform"
                value="pc"
                style={{ accentColor: "green" }}
                onChange={platformHandler}
              />
              <label htmlFor="platformvalue">pc</label>
              <br />
              <input
                type="radio"
                id="platformvalue"
                name="platform"
                value="browser"
                style={{ accentColor: "yellow" }}
                onChange={platformHandler}
              />
              <label htmlFor="platformvalue">web-browser</label>
              <br />
            </div>

            <div className="platformdiv mb-4">
              <p>Do you want list to be sorted:- </p>
              <input
                type="radio"
                id="sorted"
                name="sorted"
                value="alphabetical"
                style={{ accentColor: "green" }}
                onChange={sortedHandler}
              />
              <label htmlFor="html">alphabetical</label>
              <br />
              <input
                type="radio"
                id="sorted"
                name="sorted"
                value="release-date"
                style={{ accentColor: "yellow" }}
                onChange={sortedHandler}
              />
              <label htmlFor="css">release-date</label>
              <br />
            </div>

            <div className="SearchButton mb-6 pb-4">
              <button
                className="searchbuttontype m-3 rounded-pill ps-4 pe-4 pt-1 pb-1"
                type="submit"
              >
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HomePage;
