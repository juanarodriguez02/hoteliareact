import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './pages/home.js';
import Formusu from './pages/formusuario/formusu';
const root= createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },

  {
    path: "/formusuario",
    element: <Formusu />

  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={root} />
  </React.StrictMode>
);