import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Search from "../pages/search/index";
import UserPage from "../pages/userPage/index";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/user/:userId" element={<UserPage />} /> 
      </Routes>
    </Router>
  );
}

export default App;
