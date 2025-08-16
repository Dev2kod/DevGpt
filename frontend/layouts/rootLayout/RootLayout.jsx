import { Outlet, useNavigate } from "react-router-dom";
import "./rootLayout.css";
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';


const Rootlayout = () => {
  const navigate = useNavigate();

  return (
    <div className="rootLayout">
      <header>
        <div onClick={() => navigate("/")} className="logo">
          <img src="/logo.png" alt="Logo" />
          <span>DevGPT</span>
        </div>
        <div className="user">  
      <SignedIn>
        <UserButton />
      </SignedIn></div>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Rootlayout;
