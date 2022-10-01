import React from 'react';
import  ReactDOM  from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

import './index.css';
import Dashboard2 from './pages/dashboard1/dashboard2';
import Home from './pages/home/Home.js';
import Err404 from './pages/error404/error';


const router = createBrowserRouter([
{
  path: "/",
  element:<Home/>,
},
{
  path:"/Dashboard",
  element:<Dashboard2/>,
},
{
  path:"*",
  element:<Err404 />
}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);