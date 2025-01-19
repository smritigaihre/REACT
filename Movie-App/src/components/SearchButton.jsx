import '../App.css'

// SearchBar.js
import React, { useState } from 'react';

const SearchBar = (props) => {
  
  // props == {onTextChange : f()}
  

  return (
    <div className="search-bar">
      <input
        type="text"
        onChange={(ev)=>props.onTextChange(ev.target.value)} 
        placeholder="Search..."
        className="search-input"
      />
     
    </div>
  );
};

export default SearchBar;

