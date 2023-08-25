import React, { useState } from "react";
import "./index.css";
import SearchTap from "../../assets/search.png";
import axios from "axios";

function Search() {
  const [searchInput, setSearchInput] = useState("");
  const [userData, setUserData] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://gitfoback.anys.kro.kr/search/users/${searchInput}?page=1`,
      );
      setUserData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error:", error);
      setUserData([]);
    }
  };

  return (
    <div>
      <div id="search">
        <input
          id="searchInput"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <img
          id="SearchTap"
          src={SearchTap}
          alt="Search"
          onClick={handleSearch}
        />
      </div>
      <div>
        {userData.length === 0 ? (
          <p id="noSearch">No search results found</p>
        ) : (
          userData.map((user, index) => {
            const { total, ...rest } = user; 
            return total === undefined ? (
              <div id="searchResult" key={index}>
                <img id="profile" src={rest.profile_img} alt={rest.name} />
                <div id="info">
                  <p id="name">{rest.name}</p>
                  <p id="bio">{rest.bio}</p>
                </div>
              </div>
            ) : null;
          })
        )}
      </div>
    </div>
  );
}

export default Search;
