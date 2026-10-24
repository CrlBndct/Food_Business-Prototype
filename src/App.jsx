import { useRef } from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import React from 'react';
import {foodArray} from './foods';
import './App.css';

function App() {

const scrollTo = useRef(null);

const scrollToMenu = () => {
  scrollTo.current.scrollIntoView({behavior: "smooth"});
}

/* ======================================== */
  function Mybutton(props){
    const buttonStyle ={
      backgroundColor: "lightpink",
      borderRadius: 40,
      borderColor: "lightpink"
    };

    return(
      <>
        <button style={buttonStyle} className={props.class} onClick={props.func}>{props.name}</button>
      </>
    );
  }

  return (
    <BrowserRouter>
      <>
        <div className="nav-bar"> 
          <ul> 
            <li><a href='#intro-sec'>Home</a></li>
            <li><a href='#menu'>Menu</a></li>
            <li><a href=''>About</a></li>
          </ul>
        </div>

        <div className="intro-sec" id='intro-sec'> 
          <div className="text">
            <h3>welcome to our table and</h3>
            <h1 className="tagline">Taste the Passion Behind Every Creation</h1>
            <h3>Craving something extraordinary? Discover your favorite flavors, explore our menu, and let every bite bring a little more happiness to your day.</h3>
          </div>
          <Mybutton name = "See Our Menu" class = "btn1" func = {scrollToMenu}/> 
        </div>

        <div className="menu" ref = {scrollTo} id='menu'>
          <h1>Our Menu</h1>
          {foodArray.map((foodItem) => <div className = "item" key = {foodItem.foodId}>
            <img src = {foodItem.pic} alt = "Food Image"/>
            <h2>{foodItem.foodName}</h2>
            <h3>{foodItem.foodDes}</h3>
          </div>)}
        </div>
      </>
    </BrowserRouter>
  )
}

export default App
