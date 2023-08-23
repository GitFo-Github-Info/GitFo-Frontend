import React from "react";
import "./index.css";
import Logo from "../../assets/logo.png";
import SearchTap from "../../assets/search.png";

function Search() {
  return (
    <div>
      <img id="logo" src={Logo} alt="logo" />
      <div id="hr" />
      <div id="search">
        <input id="searchInput" />
        <img id="SearchTap" src={SearchTap} alt="" />
      </div>
    </div>
  );
}

export default Search;
