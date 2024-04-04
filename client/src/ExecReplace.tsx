import {useEffect} from "react";

function ExecReplace() {
  useEffect(() => {
    window.parent.postMessage("ExecReplace - Parent", "http://localhost:42070");
    window.opener.postMessage("ExecReplace - Opener", "http://localhost:42070");

    window.location.replace("http://localhost:42069/");
  }, []);

  return (
    <h1>Redirecting</h1>
  );
}

export default ExecReplace;
