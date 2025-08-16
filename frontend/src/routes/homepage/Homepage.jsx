import React from "react";
import { useNavigate } from "react-router-dom";
import "./homepage.css";

const Homepage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="home">
        <div className="left">
          <h1>Dev-GPT</h1>
          <h2>One of your closest friends</h2>
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            nobis adipisci recusandae.
          </h3>
        </div>

        <div className="right">
          <h1>Right</h1>
        </div>
      </div>
    </>
  );
};

export default Homepage;
