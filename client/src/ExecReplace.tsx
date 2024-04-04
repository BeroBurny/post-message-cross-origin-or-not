import {useEffect} from "react";

function ExecReplace() {
  useEffect(() => {
    window.parent.postMessage("ExecReplace - Parent");
    window.opener.postMessage("ExecReplace - Opener");

    window.location.replace("http://localhost:42069/");
  }, []);

  return (
    <h1>Redirecting</h1>
  );
}

export default ExecReplace;
