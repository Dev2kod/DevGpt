import { BrowserRouter,Routes,Route } from "react-router-dom"
import Homepage from "./routes/homepage/homepage.jsx"
import Dashboard from "./routes/dashboard/Dashboard.jsx"
import Chat from "./routes/chatpage/Chatpage.jsx"
import Rootlayout from '../layouts/rootLayout/Rootlayout.jsx'
import { Dlayout } from "../layouts/dashboardLayout/Dashboard.jsx"
import Signin from "./routes/signin/Signin.jsx"
import Signup from "./routes/signup/Signup.jsx";


const App = () => {
  return (
    <BrowserRouter>
    <Routes >
      <Route element={<Rootlayout/>}>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/sign-in/*" element={<Signin/>}/>
        <Route path="/sign-up/*" element={<Signup/>}/>
        <Route path="/dashboard" element={<Dlayout/>}>
          <Route index element={<Dashboard/>}/>
          <Route path="chats/:id" element={<Chat/>}/>
        </Route>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App