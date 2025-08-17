import React from "react";
import { useNavigate } from "react-router-dom";
import "./homepage.css";


const Homepage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="home">
        <img src="./orbital.png" alt="" className="orbital" />
        <div className="left">
          <h1>DEVGPT</h1>
          <h2>One of your closest friends</h2>
           <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            nobis adipisci recusandae.
          </h3>
          <button onClick={()=>navigate('/dashboard')}>Get Started</button>
        </div>

        <div className="right">
          <div className="imgcontainer">
            <div className="bgcontainer">
              <div className="bg"></div>
            </div>
            <img src="./bot.png" alt="" className="bot"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
