import React from "react";

function Header() {
  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  return (
    <div className="header">
      <h1>AI Learning Portal</h1>
      <p>{today}</p>
    </div>
  );
}

export default Header;