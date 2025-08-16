import { SignIn } from "@clerk/clerk-react";
import "./signin.css"

const Signin = () => {
  return (
    <div className="signin">
      <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up"/>
    </div>
  );
};

export default Signin;
