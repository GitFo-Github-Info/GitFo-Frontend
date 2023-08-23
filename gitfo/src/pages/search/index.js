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
        {userData.map((user, index) => (
          <div key={index}>
            <img src={user.profile_img} alt={user.name} />
            <p>{user.name}</p>
            <p>{user.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;
