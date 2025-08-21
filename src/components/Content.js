import React from "react";
import ExpandableCard from "./ExpandableCard";
import Agenda from "./Agenda"; 
import { SiOpenai } from "react-icons/si";

function Content() {
  return (
    <div className="content" style={{ padding: "20px" }}>
      {/* Agenda Section */}
      <Agenda />

      {/* GPT Section */}
      <ExpandableCard title={<><SiOpenai /> What is GPT & How it Works</>}>
        <div style={{ fontSize: "16px", lineHeight: "1.6", color: "#2c3e50" }}>
          <p>
            <SiOpenai color="#2c3e50" /> <b>GPT:</b> A type of LLM trained on massive datasets.
          </p>
          <p>
            It uses <b>Transformer Architecture</b> with self-attention to generate human-like text.
          </p>
        </div>

        <div style={{ display: "flex", justifyContent: "center", marginTop: "15px" }}>
          <img 
            src="/gpt-diagram.png" 
            alt="GPT Diagram" 
            style={{
              maxWidth: "280px",   // ✅ smaller size
              width: "100%",
              borderRadius: "12px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
            }}
          />
        </div>
      </ExpandableCard>
    </div>
  );
}

export default Content;
