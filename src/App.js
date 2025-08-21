import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Agenda from "./components/Agenda";
import Home from "./components/Home";
import GPT from "./components/GPT";
import LLMProviders from "./components/LLMProviders"; // Import the new component

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/agenda" element={<Agenda />} />
            <Route path="/gpt" element={<GPT />} />
            <Route path="/llm-providers" element={<LLMProviders />} /> {/* New route */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;