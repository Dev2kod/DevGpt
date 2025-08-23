import { useEffect, useRef } from "react"
import "./chatpage.css"
import NewPrompt from "../../component/newPrompt/NewPrompt";


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
          <NewPrompt/>
          <div ref={endref}></div>
        </div>
      </div>

      
    </div>
  )
}

export default Chatpage