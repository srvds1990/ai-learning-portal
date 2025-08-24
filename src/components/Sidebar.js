import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaListUl, FaRobot, FaMicrochip, FaCommentDots, FaPaperPlane, FaRegQuestionCircle } from "react-icons/fa";

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
            to="/gpt"
            className={location.pathname === "/gpt" ? "active" : ""}
          >
            <FaRobot /> What is GPT?
          </Link>
        </li>
        <li>
          <Link
            to="/llm-providers"
            className={location.pathname === "/llm-providers" ? "active" : ""}
          >
            <FaMicrochip /> LLM Providers
          </Link>
        </li>
        <li>
          <Link
            to="/rag"
            className={location.pathname === "/rag" ? "active" : ""}
          >
            <FaCommentDots /> My RAG App
          </Link>
        </li>
        <li>
          <Link
            to="/feedback" // New link for the feedback form
            className={location.pathname === "/feedback" ? "active" : ""}
          >
            <FaPaperPlane /> Feedback
          </Link>
        </li>
        {/* New Quiz Link */}
        <li>
          <Link
            to="/quiz"
            className={location.pathname === "/quiz" ? "active" : ""}
          >
            <FaRegQuestionCircle /> 1st quiz sessions
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;