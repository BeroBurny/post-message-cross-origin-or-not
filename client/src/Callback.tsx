import './App.css'
import {useEffect} from "react";

function Callback() {
  const sendMessage = () => {
    window.parent.postMessage("Callback - Parent", "http://localhost:42070");
    window.opener.postMessage("Callback - Opener", "http://localhost:42070");
  }

  useEffect(() => {
    sendMessage();
  }, []);

  return (
    <>
    <h1>Callback OPEN!</h1>
    <div className="card" style={{display: "flex", flexDirection: "column"}}>
      <button onClick={sendMessage}>
        Post Message
      </button>
    </div>
    </>
  );
}

export default Callback;
