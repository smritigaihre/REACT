import React from "react";
import "./ButtonName.css"; // Import the CSS file

const ButtonName = (props) => {


  return (
    <div>
      <button onClick={props.onButtonNameClick} className="load-more-button">
        Load More
      </button>
    </div>
  );
};

export default ButtonName;
