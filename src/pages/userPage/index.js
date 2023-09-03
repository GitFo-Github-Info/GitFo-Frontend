import React, { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";
import { Link, useParams } from "react-router-dom";
import Company from "../../assets/company.svg";
import Location from "../../assets/location.svg";

function UserPage() {
  const { userId } = useParams();
  const [userDetails, setUserDetails] = useState({});
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(
          `https://gitfoback.anys.kro.kr/search/${userId}`,
        );
        setUserDetails(response.data[0]);
        setError("");
        console.log(userId);
      } catch (error) {
        console.error("Error:", error);
        setUserDetails(null);
        setError("사용자 정보를 불러올 수 없습니다.");
      }
    };

    fetchUserDetails();
  }, [userId]);

  if (error) {
    return <div>{error}</div>;
  }
  if (!userDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div id="container">
      <Link to="/" id="back">
        Back to Search
      </Link>
      <div id="userpage">
        <img id="profile" src={userDetails.profile_img} alt={userDetails.name} />
        <div id="infoBox">
          <div id="info">
            <div id="personal">
              <p id="name">{userDetails.name !== null ? userDetails.name : userDetails.id}</p>
              <p id="id">{userDetails.id}</p>
            </div>
            <div id="bioBox">
              <p id="bio">{userDetails.bio}</p>
              <p id="repo">Repos : {userDetails.public_repos}</p>
            </div>
          </div>
          <div id="detailBox">
            <div id="follow">
              <p id="follower">{userDetails.followers}followers</p>
              <p id="followings">{userDetails.following}following</p>
            </div>
            <div id="detail">
              <p id="company">
                <img id="companyImg" src={Company} alt="company" />
                {userDetails.company}
              </p>
              <p id="location">
                <img id="locationImg" src={Location} alt="location" />
                {userDetails.location}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default UserPage;
