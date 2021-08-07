import React, { useEffect, useState } from "react";
import "../Char/Char.css";
import KeyPress from "../hooks/keyPress";

const keySetting={
  SPACE_KEY:32
}
function Char() {
  const [char, setChar] = useState('');
  const [speed, setSpeed] = useState(false);
 
  function handleChange(e) {
    setChar(e.target.value);
    console.log("tıkladnı");
  }
//   // const [direction, setDirection] = useState('up');

  const keyPress = KeyPress([
    "ArrowUp",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
  ]);
  
  const [vertical, setVertical] = useState(0);
  const [horizontal, setHorizontal] = useState(0);

  const handleKey = (key) => {
    let arrowUp = 0;
    console.log(key);
    if (key === "ArrowUp") {
      setVertical((arrowUp) => arrowUp - 10);
      if (vertical < 1) {
        setVertical(0);
      }
    
    
      /* Space ile yukarı tuşuna aynı anda basılırsa hız iki katına çıkar. Bütün tuşlar için ayrı ayarlanmalı
                     setVertical(arrowUp => arrowUp - 10)
             */
    }
    if (key === "ArrowDown") {
      setVertical((arrowDown) => arrowDown + 20);
      if (vertical > 430) {
        setVertical(430);
      }
    }
    if (key === "ArrowLeft") {
      setHorizontal((arrowLeft) => arrowLeft - 20);
      if (horizontal < 1) {
        setHorizontal(1);
      }
    }
    if (key === "ArrowRight") {
      setHorizontal((arrowRight) => arrowRight + 20);
      if (horizontal > 420) {
        setHorizontal(420);
      }
    }

    if(key.keyCode===keySetting.SPACE_KEY){
      setVertical((arrowUp) => arrowUp -10);
      if (vertical < 1) {
        setVertical(0);
      }
    }
    // if(key.keyCode===keySetting.SPACE_KEY){
    //   console.log("HELLLOOO")

    // }
  }


  useEffect(() => {

    if (keyPress) {
      handleKey(keyPress);
      console.log("TIKLANDI");
    }
  }, [keyPress]);
  useEffect(()=>{
    window.addEventListener('keyup',handleKey)
        window.addEventListener('keydown',handleKey);
        return()=>{
          window.removeEventListener('keydown',handleKey);
            window.removeEventListener('keyup',handleKey);
        }
  },[keyPress]);

  return (
    <div className="App">
      <select name="option" onChange={handleChange}>
        <option value="Beste" id="char1">
          Char1
        </option>
        <option value="Bastet" id="char2">
          Char2
        </option>
      </select>
      <p
        id={char === "Beste" ? "char1" : "char2"}
        onKeyPress={handleKey}
        style={{ top: `${vertical}px`, left: `${horizontal}px` }}
      >
        {char}
      </p>
    </div>
  );
  
}

export default Char;
