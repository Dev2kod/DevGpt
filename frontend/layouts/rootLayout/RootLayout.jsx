import { Outlet, useNavigate } from "react-router-dom";
import React from "react";
import "./rootLayout.css";

const Rootlayout = () => {
  const navigate = useNavigate();

  return (
    <div className="rootLayout">
      <header>
        <div onClick={() => navigate("/")} className="logo">
          <img src="/logo.png" alt="Logo" />
          <span>DevGPT</span>
        </div>
        <div className="user">User</div>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Rootlayout;
