import './App.css';
import React,{useState,useEffect} from 'react';
import Board from './component/Board/Board';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import StartGame from './component/StartGame/StartGame';
import {BsSun,BsMoon} from 'react-icons/bs'



function App() {
 
  const storedDarkMode = localStorage.getItem("DARK_MODE");
 
  const [darkMode, setDarkMode]=useState(storedDarkMode);
 
  const toggleDarkMode =()=>setDarkMode(darkMode ? false :true);
  useEffect(() => {
    console.log(`Is in dark mode? ${darkMode}`);
  }, [darkMode]);
  localStorage.setItem("DARK_MODE", darkMode);

  return(
    <div className="App" data-theme={darkMode ? 'dark' :'light'}>
      <div id ='icon'  onClick={toggleDarkMode} >
      {darkMode ? <BsSun size='sm'/> : <BsMoon size='sm' />}
    </div>
    <BrowserRouter>
    <Switch>
      <Route path="/" exact><StartGame /></Route>
      <Route path='/board'><Board /></Route>
    </Switch>
    
    </BrowserRouter>

    </div>
  );
}
export default App;
