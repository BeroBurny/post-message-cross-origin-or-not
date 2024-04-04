import {useEffect} from "react";

function Exec() {
  useEffect(() => {
    window.parent.postMessage("Exec - Parent");
    window.opener.postMessage("Exec - Opener");

    window.location.href = "http://localhost:42069/";
  }, []);

  return (
    <h1>Redirecting</h1>
  );
}

export default Exec;
