import React, { useState } from "react";

import HeadingComponent from './components/Header/HeadingComponent'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";


function App() {

  const myRoutes=createBrowserRouter([
    {path: "/", element: <Home/>},
    {path: "/about", element: <About/>},
    {path: "/contact", element: <Contact/>},
    {path: "/MovieDetails/:id", element: <MovieDetails/>},
    {path: "*", element: <div>404 Not Found</div>}
  ])

  return (
  
      
        <>
        <HeadingComponent/>
        <RouterProvider router={myRoutes}/>
      </>
  
  )
}

export default App
