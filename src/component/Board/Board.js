import React, { useState, useEffect } from "react";
import "../Board/Board.css";
import Char from "../Char/Char";
import { Link } from "react-router-dom";

function Board() {
  return (
    <div>
      <div id="board">
        <Char />
      </div>
      <div>
        <Link to="/">
          <button id="backbtn">Turn Back</button>
        </Link>
      </div>
    </div>
  );
}

export default Board;
