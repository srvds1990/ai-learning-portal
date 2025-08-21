import React from "react";
import { FaHome } from "react-icons/fa";

const Home = () => {
  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const presenterName = "Your Name Here"; // Replace with the actual presenter's name

  return (
    <div className="home-container">
      <h1>
        <FaHome style={{ marginRight: "10px" }} />
        Welcome Everyone 👋
      </h1>
      <p>
        This is your <strong>AI Learning Portal</strong>, where we’ll explore{" "}
        <span style={{ color: "#ffcc70", fontWeight: "bold" }}>
          AI, ML, DL, LLM, and GPT
        </span>{" "}
        step by step 🚀. Let’s start your journey into the world of{" "}
        <em>Artificial Intelligence</em>!
      </p>

      <div style={{ marginTop: "40px", textAlign: "center" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "10px", color: "#fff" }}>
          Agenda Date: {today}
        </h2>
        <p style={{ fontSize: "1.25rem", color: "#fff" }}>
          Presented by: {presenterName}
        </p>
      </div>
    </div>
  );
};

export default Home;