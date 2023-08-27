import React, { useState } from "react";
import "./index.css";
import SearchTap from "../../assets/search.png";
import axios from "axios";

function Search() {
  const [searchInput, setSearchInput] = useState("");
  const [userData, setUserData] = useState([]);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://gitfoback.anys.kro.kr/search/users/${searchInput}?page=1`,
      );
      setUserData(response.data);
      setError("");
      console.log(response.data);
    } catch (error) {
      console.error("Error:", error);
      setUserData([]);
      setError("정보를 불러올 수 없습니다.");
    }
  };

  return (
    <div>
      <div id="search">
        <input
          id="searchInput"
          value={searchInput}
          placeholder="Search users name"
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <img
          id="SearchTap"
          src={SearchTap}
          alt="Search"
          onClick={handleSearch}
        />
      </div>
      <div id="searchResult">
        {error && <h2 id="error">{error}</h2>}
        {userData.map((user, index) => {
          const { total, ...rest } = user;
          return total === undefined ? (
            <div id="searchResultBox" key={index}>
              <img id="profile" src={rest.profile_img} alt={rest.name} />
              <div id="infoBox">
              <div id="info">
                <div id="personal">
                  <p id="name">{rest.name}</p>
                  <p id="id">{rest.id}</p>
                </div>
                <p id="bio">{rest.bio}</p>
                <p id="repo">{rest.public_repos}</p>
              </div>
              <div id="detail">
                <p id="follower">{rest.followers}</p>
                <p id="follow">{rest.follow}</p>
              </div>
              </div>
            </div>
          ) : null;
        })}
      </div>
    </div>
  );
}

export default Search;
