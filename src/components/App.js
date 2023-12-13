import React, { useState } from "react";
import Nav from "./Nav";
import HogTile from "./HogTile";

import hogsData from "../porkers_data";

function App() {
  const [hogs, setHogs] = useState(hogsData);
  const [greasedFilter, setGreasedFilter] = useState(false);
  const [sortType, setSortType] = useState("name");

  const filterHogs = () => {
    return greasedFilter ? hogs.filter((hog) => hog.greased) : hogs;
  };

  const sortHogs = (filteredHogs) => {
    return filteredHogs.sort((a, b) => {
      if (sortType === "name") {
        return a.name.localeCompare(b.name);
      } else if (sortType === "weight") {
        return a.weight - b.weight;
      }
      return 0;
    });
  };

  const handleToggleGreased = () => {
    setGreasedFilter(!greasedFilter);
  };

  const handleSortChange = (type) => {
    setSortType(type);
  };

  return (
    <div className="App">
      <Nav
        onToggleGreased={handleToggleGreased}
        onSortChange={handleSortChange}
      />
      <div className="ui grid container">
        {sortHogs(filterHogs()).map((hog, index) => (
          <HogTile key={index} hog={hog} />
        ))}
      </div>
    </div>
  );
}

export default App;