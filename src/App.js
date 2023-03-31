import './App.css';
import data from './data';
import Card from './components/card';
import React, { useRef } from "react";


export default function App(){


  const [scrollPosition, setScrollPosition] = React.useState(0);
  const containerRef = useRef(null);

  const slides = document.querySelector(".container");

  const scrollLeft = () => {
    containerRef.scrollLeft -= 100;
    };
  
  
  const scrollRight = () => {
    containerRef.scrollLeft += 100;
  }

  return(
    <div className='app'>

      <button onClick = {scrollLeft} className ="btn btn-prev">{"<"}</button>

      <div ref={containerRef} className='container'>

      <h1 className='heading'>1. Take control of your financial data</h1>

        {data.map(item => (<Card data = {item} />))} 

      </div>
      <button onClick = {scrollRight} className ="btn btn-next">{">"}</button>

      <div style={{textAlign: "center"}}>
      <button className='signup-button'>Sign up</button>
      </div>

    </div>
  );
}
