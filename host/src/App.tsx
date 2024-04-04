import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const onParent = () => {
    window.parent.postMessage("onParent", "http://localhost:42070");
  }

  const onOpener = () => {
    window.opener.postMessage("onOpener", "http://localhost:42070");
  }

  const onRedirect = () => {
    window.location.href = "http://localhost:42070/callback";
  }

  const onRedirectReplace = () => {
    window.location.replace("http://localhost:42070/callback");
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card" style={{display: "flex", flexDirection: "column"}}>
        <button onClick={onParent}>
          Sent to "parent"
        </button>
        <button onClick={onOpener} style={{marginTop: "20px"}}>
          Sent to "opener"
        </button>
        <button onClick={onRedirect} style={{marginTop: "20px"}}>
          Redirect to callback
        </button>
        <button onClick={onRedirectReplace} style={{marginTop: "20px"}}>
          Redirect (replace) to callback
        </button>
      </div>
    </>
  )
}

export default App
