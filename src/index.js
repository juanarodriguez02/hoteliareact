import React from 'react';
import  ReactDOM  from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

import './index.css';
import Dashboard from './pages/dashboard1/dashboard2';
import Home from './pages/home/Home.js';


const router = createBrowserRouter([
{
  path: "/",
  element:<Home/>,
},
{
  path:"/Dashboard",
  element:<Dashboard/>
}  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);