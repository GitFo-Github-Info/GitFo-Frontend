import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Routes 추가
import Search from "../pages/search/index";
import UserPage from "../pages/userPage/index";

function App() {
  return (
    <Router>
      <Routes>
        {" "}
        {/* <Routes>로 감싸기 */}
        <Route path="/" element={<Search />} /> {/* 검색 페이지 */}
        <Route path="/user/:userId" element={<UserPage />} /> {/* UserPage */}
      </Routes>
    </Router>
  );
}

export default App;
