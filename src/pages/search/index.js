import React, { useState } from "react";
import "./index.css";
import SearchTap from "../../assets/search.png";
import Company from "../../assets/company.svg";
import Location from "../../assets/location.svg";
import axios from "axios";
import UserPage from "../userPage/index.js";

function Search() {
  const [searchInput, setSearchInput] = useState("");
  const [userData, setUserData] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
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

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  return (
    <div id="container">
      <div id="search">
        <input
          id="searchInput"
          value={searchInput}
          placeholder="Search users name"
          onChange={(e) => setSearchInput(e.target.value)}
          onKeyPress={handleKeyPress}
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
            <div
              id="searchResultBox"
              key={index}
              onClick={() => handleUserClick(user)}
            >
              <img id="profile" src={rest.profile_img} alt={rest.name} />
              <div id="infoBox">
                <div id="info">
                  <div id="personal">
                    <p id="name">{rest.name !== null ? rest.name : rest.id}</p>
                    <p id="id">{rest.id}</p>
                  </div>
                  <div id="bioBox">
                    <p id="bio">{rest.bio}</p>
                    <p id="repo">Repos : {rest.public_repos}</p>
                  </div>
                </div>
                <div id="detailBox">
                  <div id="follow">
                    <p id="follower">{rest.followers}followers</p>
                    <p id="followings">{rest.following}following</p>
                  </div>
                  <div id="detail">
                    <p id="company">
                      <img id="companyImg" src={Company} alt="company" />
                      {rest.company}
                    </p>
                    <p id="location">
                      <img id="locationImg" src={Location} alt="location" />
                      {rest.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : null;
        })}
      </div>
      {selectedUser && <UserPage user={selectedUser} />}
    </div>
  );
}
export default Search;
