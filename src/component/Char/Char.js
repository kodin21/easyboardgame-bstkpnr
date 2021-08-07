import React, { useEffect, useState } from "react";
import "../Char/Char.css";
import KeyPress from "../hooks/keyPress";

const keySetting={
  SPACE_KEY:32
}
function Char() {
  const [char, setChar] = useState('');
  
 
  function handleChange(e) {
    setChar(e.target.value);
    console.log("tıklandı");
  }
//   // const [direction, setDirection] = useState('up');

  const keyPress = KeyPress([
    "ArrowUp",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
  ]);
  
  let speed=20;
  const [vertical, setVertical] = useState(()=>{
    const localData=localStorage.getItem('position');
    return localData ? JSON.parse(localData).vertical:0;
  });
  const [horizontal, setHorizontal] = useState(()=>{
    const localData=localStorage.getItem('position');
    return localData ? JSON.parse(localData).horizontal:0;
  });
  useEffect(()=>{
    localStorage.setItem("position",JSON.stringify({vertical,horizontal}));
  },[vertical,horizontal]);

  const handleKey = (key) => {
    console.log(key);
    if (key === "ArrowUp") {
      setVertical((arrowUp) => arrowUp - speed);
      if (vertical < 1) {
        setVertical(0);
      }
    
    }
    if (key === "ArrowDown") {
      setVertical((arrowDown) => arrowDown + speed);
      if (vertical > 430) {
        setVertical(430);
      }
    }
    if (key === "ArrowLeft") {
      setHorizontal((arrowLeft) => arrowLeft - speed);
      if (horizontal < 1) {
        setHorizontal(1);
      }
    }
    if (key === "ArrowRight") {
      setHorizontal((arrowRight) => arrowRight + speed);
      if (horizontal > 420) {
        setHorizontal(420);
      }
    }
    if(key.keyCode===keySetting.SPACE_KEY){
      setVertical((arrowUp) => arrowUp - speed);
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
        vertical={vertical}
        horizontal={horizontal}
        value={{setChar}}
        style={{ top: `${vertical}px`, left: `${horizontal}px` }}
      >
        {char}
      </p>
    </div>
  );
  
}

export default Char;
