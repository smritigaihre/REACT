import React, { useState } from "react";
import reactMovie_logo from "../../assets/images/reactMovie_logo.png"; // React Movie Logo
import tmdb_logo from "../../assets/images/tmdb_logo.png";
import './header.css'


function HeadingComponent() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
         
          <div className="flex items-center">
            <img src={reactMovie_logo} className="logo" ></img>
          </div>

         
       
      <div className="search-section">
      
        <input type="text" placeholder="Search..." className="search-input" />
        <button className="search-button">Search</button>
      </div>

          <div className="flex items-center">
            <img src={tmdb_logo} className="logo" ></img>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
     
    </nav>
  );
}

export default HeadingComponent;
