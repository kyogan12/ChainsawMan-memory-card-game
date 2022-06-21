import { useState } from "react";
import React from "react";
import "../src/styles/App.css";
import Cards from "./components/Cards";
import Title from "./components/Title";

const App = () => {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const [arr, setArr] = useState([]);

  function checkForIds(id) {
    checkHighScore();
    if (arr.includes(id)) {
      setScore(0);
      setArr([]);
    } else {
      setScore(score + 1);
      setArr((ids) => [...ids, id]);
    }
  }

  function checkHighScore() {
    score > highScore && setHighScore(score);
  }

  return (
    <div>
      <Title />
      <div className="score">
        <h1 style={{ color: "#fff" }}>Score : {score}</h1>
        <h1 style={{ color: "#fff" }}>High Score: {highScore}</h1>
      </div>
      <Cards checkForIds={checkForIds} />
    </div>
  );
};

export default App;
