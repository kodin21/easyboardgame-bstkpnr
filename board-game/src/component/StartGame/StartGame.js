import React from "react";
import { Link } from "react-router-dom";
import "../StartGame/style.css";
function StartGame() {
  return (
    <div>
      <Link to="/board">
        <button id="start">
          <span>START GAME</span>
        </button>
      </Link>
    </div>
  );
}
export default StartGame;
