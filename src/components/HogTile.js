import React, { useState } from "react";

const HogTile = ({ hog }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="ui eight wide column pigTile">
      <div className="ui card" onClick={toggleDetails}>
        <div className="image">
          <img src={hog.image} alt={hog.name} />
        </div>
        <div className="content">
          <div className="header">{hog.name}</div>
          {showDetails && (
            <div className="meta">
              <span className="date">Specialty: {hog.specialty}</span>
              <span className="date">Weight: {hog.weight}</span>
              <span className="date">Greased: {hog.greased ? "Yes" : "No"}</span>
              <span className="date">Highest Medal: {hog["highest medal achieved"]}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HogTile;