import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as ReactDOM from "react-dom/client";
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import Pawns from './pawns';


const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "endgame-website/pawns",
        element: <Pawns></Pawns>, 
      },
      {
        path: "endgame-website/knights-vs-pawns",
        element: <div><Root></Root><div>A venir</div></div>,
      },
      {
        path: "endgame-website/knights",
        element: <div><Root></Root><div>A venir</div></div>,
      },
      {
        path: "endgame-website/bishop-vs-pawns",
        element: <div><Root></Root><div>A venir</div></div>
      }
    ],
  },
  
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
