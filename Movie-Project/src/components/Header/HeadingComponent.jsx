import React, { useState } from "react";
import reactMovie_logo from "../../assets/images/reactMovie_logo.png"; // React Movie Logo
import tmdb_logo from "../../assets/images/tmdb_logo.png";
import './header.css'
import { Link, NavLink, useNavigate } from "react-router-dom";


function HeadingComponent() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

    const onImageClick = (ev) => {
      ev.preventDefault()
      navigate("/")
    }


  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
         
          <div className="flex items-center">
            <img src={reactMovie_logo} className="logo" ></img>
          </div>

          <div className="navbar-menu">
                <ul className="flex space-x-6 text-white">
                    <li>
                        <NavLink to="/" className="hover:text-gray-300">
                            Home
                        </NavLink>
                    </li>
                    <li><NavLink to="/contact" className="hoover:text-gray-300">Contact</NavLink></li>
                    <li>
                        <NavLink to="/about" className="hover:text-gray-300">
                            About
                        </NavLink>
                    </li>
                </ul>
            </div>
         
       
      {/* <div className="search-section">
      
        <input type="text" placeholder="Search..." className="search-input" />
        <button className="search-button">Search</button>
      </div> */}

          <div className="flex items-center">
            <img onClick={onImageClick} src={tmdb_logo} className="logo" ></img>
          </div>


        </div>
      </div>

      {/* Mobile Menu */}
     
    </nav>
  );
}

export default HeadingComponent;
