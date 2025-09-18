import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  FaHome,
  FaListUl,
  FaRobot,
  FaMicrochip,
  FaCommentDots,
  FaPaperPlane,
  FaRegQuestionCircle,
  FaClipboardList,
  FaExchangeAlt
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
          <NavLink
            to="/"
            className={location.pathname === "/" ? "active" : ""}
          >
            <FaHome /> Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/agenda"
            className={location.pathname === "/agenda" ? "active" : ""}
          >
            <FaListUl /> AI vs ML vs DL vs LLM
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/gpt"
            className={location.pathname === "/gpt" ? "active" : ""}
          >
            <FaRobot /> What is GPT?
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/llm-providers"
            className={location.pathname === "/llm-providers" ? "active" : ""}
          >
            <FaMicrochip /> LLM Providers
          </NavLink>
        </li>

        {/* RAG App Link */}
        <li>
          <NavLink
            to="/rag"
            className={location.pathname === "/rag" ? "active" : ""}
          >
            <FaCommentDots /> Gen AI Basic RAG App
          </NavLink>
        </li>

        {/* New Link for Prompt vs Fine Tune vs RAG */}
        <li>
          <NavLink
            to="/prompt-rag-finetune"
            className={location.pathname === "/prompt-rag-finetune" ? "active" : ""}
          >
            <FaExchangeAlt /> Prompt/RAG/Finetune
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/feedback"
            className={location.pathname === "/feedback" ? "active" : ""}
          >
            <FaPaperPlane /> Feedback
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/quiz"
            className={location.pathname === "/quiz" ? "active" : ""}
          >
            <FaRegQuestionCircle /> 1st Quiz Session
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/leaderboard"
            className={location.pathname === "/leaderboard" ? "active" : ""}
          >
            <FaClipboardList /> Leaderboard
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;