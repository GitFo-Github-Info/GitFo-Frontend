  import React from "react";
  import "./index.css";
  import Logo from "../../assets/logo.png";

  function Header() {
    return (
      <div>
        <img id="logo" src={Logo} alt="logo" />
        <div id="hr" />
      </div>
    );
  }

  export default Header;
