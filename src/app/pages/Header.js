import React from "react";

const Header = () => {
  return (
    <header style={headerStyle}>
      <h1>Task Manager</h1>
    </header>
  );
};

const headerStyle = {
  padding: "1px 20px",
  textAlign: "center",
  width: "100%",
};

export default Header;