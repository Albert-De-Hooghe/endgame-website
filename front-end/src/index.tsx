import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import Pawns from './pawns';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/pawns",
    element: <Pawns></Pawns>, 
  },
  {
    path: "/knights-vs-pawns",
    element: <div><Root></Root><div>A venir</div></div>,
  },
  {
    path: "/knights",
    element: <div><Root></Root><div>A venir</div></div>,
  },
  {
    path: "/bishop-vs-pawns",
    element: <div><Root></Root><div>A venir</div></div>
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
