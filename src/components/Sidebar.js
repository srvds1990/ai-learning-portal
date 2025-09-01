import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaHome,
  FaListUl,
  FaRobot,
  FaMicrochip,
  FaCommentDots,
  FaPaperPlane,
  FaRegQuestionCircle,
  FaClipboardList,
} from "react-icons/fa";

function Sidebar() {
  const location = useLocation();

  return (
    <div className="sidebar">
      <h2>
        <FaListUl style={{ marginRight: "10px" }} />
        Navigation
      </h2>
      <ul>
        <li>
          <Link
            to="/"
            className={location.pathname === "/" ? "active" : ""}
          >
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

        {/* 🔥 RAG App Link */}
        <li>
          <Link
            to="/rag"
            className={location.pathname === "/rag" ? "active" : ""}
          >
            <FaCommentDots /> Gen AI Basic RAG App
          </Link>
        </li>

        <li>
          <Link
            to="/feedback"
            className={location.pathname === "/feedback" ? "active" : ""}
          >
            <FaPaperPlane /> Feedback
          </Link>
        </li>

        <li>
          <Link
            to="/quiz"
            className={location.pathname === "/quiz" ? "active" : ""}
          >
            <FaRegQuestionCircle /> 1st Quiz Session
          </Link>
        </li>

        <li>
          <Link
            to="/leaderboard"
            className={location.pathname === "/leaderboard" ? "active" : ""}
          >
            <FaClipboardList /> Leaderboard
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
