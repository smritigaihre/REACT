import React from "react";
import "./loadmore.css"; // Import the CSS file

const LoadMore = (props) => {


  return (
    <div>
      <button onClick={props.onButtonNameClick} className="load-more-button">
        Load More
      </button>
    </div>
  );
};

export default LoadMore;