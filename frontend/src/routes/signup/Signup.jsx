import { SignUp } from "@clerk/clerk-react"

const Signup = () => {
  return (
    <SignUp path="/signup" routing="path" signInUrl="/sign-in"/>
  )
}

export default Signup;