import React, { useState, useEffect } from "react";
import axios from "axios";

function UserPage({ user }) {
  const [userDetails, setUserDetails] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(
          `https://gitfoback.anys.kro.kr/search/${user.id}`,
        );
        setUserDetails(response.data);
        setError("");
      } catch (error) {
        console.error("Error:", error);
        setUserDetails(null);
        setError("사용자 정보를 불러올 수 없습니다.");
      }
    };

    fetchUserDetails();
  }, [user.id]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!userDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
        {user.id}
    </div>
  );
}

export default UserPage;
