import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { searchvalueactions } from "../../redux/SearchBarvalue";
import { useEffect, useState } from "react";

const GamesBody = () => {
  const [values, setvalues] = useState(false);
  const categoryname = useSelector((state) => state.searchvalue.category);
  const platformname = useSelector((state) => state.searchvalue.platform);
  const sortedname = useSelector((state) => state.searchvalue.sorted);
  const dispatch = useDispatch();

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/games?platform=${platformname}&category=${categoryname}&sort-by=${sortedname}`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        dispatch(searchvalueactions.getgamesapi({ gamesmultiple: response }));
        setvalues(true);
      })
      .catch((err) => console.error(err));
  }, [platformname, categoryname, sortedname, dispatch]);
  const games = useSelector((state) => state.searchvalue.games);

  return (
    <main className="container-fluid row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4 mt-3">
      {values
        ? games.map((state) => (
            <div className="col" key={state.id}>
              <div
                className="card h-100"
                style={{ backgroundColor: "black", color: "rgb(204, 53, 204)" }}
              >
                <img
                  src={state.thumbnail}
                  className="img-fluid card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title" style={{ fontFamily: "Designer" }}>
                    {state.title}
                  </h5>
                  <p className="card-text" style={{ fontFamily: "disney" }}>
                    {state.short_description}
                  </p>
                  <span>
                    <a
                      href={state.freetogame_profile_url}
                      className="btn btn-primary me-2"
                      style={{
                        backgroundColor: "black",
                        color: "rgb(204, 53, 204)",
                      }}
                    >
                      Game Profile
                    </a>

                    <a
                      href={state.game_url}
                      className="btn btn-primary"
                      style={{
                        backgroundColor: "black",
                        color: "rgb(204, 53, 204)",
                      }}
                    >
                      Game link
                    </a>
                  </span>
                </div>
                <div className="card-footer">
                  <small className="text-light">
                    Developed by {state.developer} and Published by{" "}
                    {state.publisher}
                  </small>
                </div>
              </div>
            </div>
          ))
        : "sorru went to problem"}
    </main>
  );
};

export default GamesBody;
