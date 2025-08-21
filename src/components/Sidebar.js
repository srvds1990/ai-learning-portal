import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaListUl, FaRobot } from "react-icons/fa"; // Import FaRobot icon

function Sidebar() {
  const location = useLocation();

  return (
    <div className="sidebar">
      <h2>
        <FaListUl style={{ marginRight: "10px" }} />
        Agenda
      </h2>
      <ul>
        <li>
          <Link to="/" className={location.pathname === "/" ? "active" : ""}>
            <FaHome /> Home
          </Link>
        </li>
        <li>
          <Link
            to="/agenda"
            className={location.pathname === "/agenda" ? "active" : ""}
          >
            <FaListUl /> AI vs ML vs DL vs LLM
          </Link>
        </li>
        <li>
          <Link
            to="/gpt" // This is the new link for the GPT page
            className={location.pathname === "/gpt" ? "active" : ""}
          >
            <FaRobot /> What is GPT?
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;