import React from "react";
import "./index.css";
import Logo from "../../assets/logo.png";
import SearchTap from "../../assets/search.png";

function Search() {
  return (
    <div>
      <div id="search">
        <input id="searchInput" />
        <img id="SearchTap" src={SearchTap} alt="" />
      </div>
    </div>
  );
}

export default Search;
