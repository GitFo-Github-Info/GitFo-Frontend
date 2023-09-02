import React, { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";
import { Link, useParams } from "react-router-dom";

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
    <div>
      <Link to="/">Back to Search</Link>
      <h1>{userDetails.id}</h1>
      <img id="userprofile" src={userDetails.profile_img} alt={userDetails.name} />
      <p id="username">이름: {userDetails.name || "이름 없음"}</p>
      <p>{userDetails.bio || "소개 없음"}</p>
      <p>{userDetails.company || "회사 정보 없음"}</p>
      <p>Repos: {userDetails.public_repos}</p>
      <p>Followers: {userDetails.followers}</p>
      <p>Following: {userDetails.following}</p>
      <p>위치: {userDetails.location || "위치 정보 없음"}</p>
    </div>
  );
}

export default UserPage;
