import { Link } from 'react-router-dom'
import "./chatlist.css"

const Chatlist = () => {
  return (
    <div className='chatList'>
      <div className='links'>
        <span className='title'>Dashboard</span>
        <Link to="/dashboard">Create New Chat</Link>
        <Link to="/">Explore DevGPT</Link>
        <Link to="/">Contact</Link>
      </div>

      <hr />

      <div className='title'>Recent Chats</div>
      <div className="list">
        <Link to="/">My chat title</Link>
        <Link to="/">My chat title</Link>
        <Link to="/">My chat title</Link>
        <Link to="/">My chat title</Link>
        <Link to="/">My chat title</Link>
        <Link to="/">My chat title</Link>
        <Link to="/">My chat title</Link>
        <Link to="/">My chat title</Link>
        <Link to="/">My chat title</Link>
        <Link to="/">My chat title</Link>
        <Link to="/">My chat title</Link>
        <Link to="/">My chat title</Link>
        <Link to="/">My chat title</Link>
        <Link to="/">My chat title</Link>
        <Link to="/">My chat title</Link>
        <Link to="/">My chat title</Link>
        <Link to="/">My chat title</Link>
        <Link to="/">My chat title</Link>
        <Link to="/">My chat title</Link>
        <Link to="/">My chat title</Link>
        <Link to="/">My chat title</Link>
      </div>

      <hr />

      <div className="upgrade" onClick={()=>{}}>
        <img src="/logo.png" alt="Upgrade Logo" />
        <div className="texts">
          <span>Upgrade to Pro Version</span>
          <span>Unlock all features</span>
        </div>
      </div>
    </div>
  )
}

export default Chatlist
