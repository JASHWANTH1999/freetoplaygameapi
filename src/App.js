import React, { useEffect } from "react";
import "./App.css";
import HomePage from "./components/homepage/HomePage";
import HeaderBar from "./components/homepage/HeaderBar";

function App() {
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "298b6cf17amsh15d4dee6ed86a82p1730a6jsn09a3d5db2424",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    fetch(
      "https://free-to-play-games-database.p.rapidapi.com/api/games?category=sci-fi",
      options
    )
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <HeaderBar />
      <HomePage />
    </>
  );
}

export default App;
