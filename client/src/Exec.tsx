import {useEffect} from "react";

function Exec() {
  useEffect(() => {
    window.parent.postMessage("Exec - Parent", "http://localhost:42070");
    window.opener.postMessage("Exec - Opener", "http://localhost:42070");

    window.location.href = "http://localhost:42069/";
  }, []);

  return (
    <h1>Redirecting</h1>
  );
}

export default Exec;
