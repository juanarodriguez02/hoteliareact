import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import Home from './pages/home/home.js';
import Header from './pages/login/login.js';
import Formusu from './pages/formusuario/formusu';
import Dashboard2 from './pages/dashboard1/dashboard2';
import Err404 from './pages/error404/error';

const router = createBrowserRouter([
{
  path: "/",
  element:<Home/>,
},
{
  path: "/Login",
  element:<Header/>,
},
{
  path:"/Dashboard",
  element:<Dashboard2/>,
},
{
  path:"*",
  element:<Err404 />
},
{
  path: "/formusuario",
  element: <Formusu />

},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);