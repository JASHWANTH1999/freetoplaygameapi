import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GamesfullPage from "./components/Gamespage/GamesfullPage";
// import Fetchapicall from "./components/fetching api/fetchapicall";

import StartingPage from "./components/homepage/startingPage";

function App() {
  // const personname = useSelector((state) => state.searchvalue.gamername);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<StartingPage />} />
          <Route path="/gameslistpage" element={<GamesfullPage />} />
        </Routes>
      </Router>

      {/* */}
    </>
  );
}

export default App;
