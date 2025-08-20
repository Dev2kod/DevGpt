import "./dashboard.css";
import {useNavigate} from "react-router-dom"

const Dashboard = () => {

  const navigate = useNavigate();

  return (
    <div className="dashboard">
      <div className="texts">
        <div className="logo">
          <img src="/logo.png" alt="logo" />
          <h1>DEVGPT</h1>
        </div>

        <div className="options">
          <div className="option">
            <img src="/chat.png" alt="chat" />
            <span>Create New Chat</span>
          </div>
          <div className="option">
            <img src="/chat.png" alt="chat" />
            <span>Create New Chat</span>
          </div>
          <div className="option">
            <img src="/chat.png" alt="chat" />
            <span>Create New Chat</span>
          </div>
        </div>
      </div>

      <div className="formContainer">
        <input
          type="text"
          placeholder="Ask Me Anything..."
          className="input"
        />
        <button className="button" onClick={()=>navigate("/dashboard/chats/124")}>
          <img src="/arrow.png" alt="arrow" className="arrow" />
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
