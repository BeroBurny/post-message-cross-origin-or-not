import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {open} from "./utils.ts";

function App() {
  const openHost = () => {
    open("http://localhost:42069/", "host");
  };

  const openClient = () => {
    open("http://localhost:42070/exec", "client");
  };

  const openClientRedirect = () => {
    open("http://localhost:42070/execr", "redirect");
  };

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
        <button onClick={openHost}>
          HOST {'->'} CLIENT
        </button>
        <button style={{marginTop: "20px"}} onClick={openClient}>
          CLIENT {'->'} HOST {'->'} CLIENT
        </button>
        <button style={{marginTop: "20px"}} onClick={openClientRedirect}>
          CLIENT (redirect) {'->'} HOST {'->'} CLIENT
        </button>
      </div>
    </>
  )
}

export default App
