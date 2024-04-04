import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Callback from "./Callback.tsx";
import Exec from "./Exec.tsx";
import ExecReplace from "./ExecReplace.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },{
    path: "/callback",
    element: <Callback />,
  },{
    path: "/exec",
    element: <Exec />,
  },{
    path: "/execr",
    element: <ExecReplace />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
