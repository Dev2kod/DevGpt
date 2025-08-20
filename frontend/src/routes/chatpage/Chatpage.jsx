import { useEffect, useRef } from "react"
import "./chatpage.css"


const Chatpage = () => {
  const endref = useRef(null);

  useEffect(() => {
    endref.current.scrollIntoView({behaviour: "smooth"})
  
  }, [])
  
  return (

    <div className="chatpage">
      <div className="wrapper">
        <div className="chat">
          <div className="messageUser">Test Message from user</div>
          <div className="messageAi">Test Message from ai</div>
          <div className="messageUser">Test Message from user</div>
          <div className="messageAi">Test Message from ai</div>
          <div className="messageUser">Test Message from user</div>
          <div className="messageAi">Test Message from ai</div>
          <div className="messageUser">Test Message from user</div>
          <div className="messageAi">Test Message from ai</div>
          <div className="messageUser">Test Message from user</div>
          <div className="messageAi">Test Message from ai</div>
          <div className="messageUser">Test Message from user</div>
          <div className="messageAi">Test Message from ai</div>
          <div className="messageUser">Test Message from user</div>
          <div className="messageAi">Test Message from ai</div>
          <div className="messageUser">Test Message from user</div>
          <div className="messageAi">Test Message from ai</div>
          <div className="messageUser">Test Message from user</div>
          <div className="messageAi">Test Message from ai</div>
          <div ref={endref}></div>
        </div>
      </div>

      
    </div>
  )
}

export default Chatpage