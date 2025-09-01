import React from "react";
import Header from "./Header";
import { FaCommentDots } from "react-icons/fa";

const StreamlitApp = () => {
  const streamlitAppUrl = "https://my-first-ragv1-2szkamrktwjpgrf4k8gtfw.streamlit.app/";

  return (
    <div className="content-container">
      <Header />
      <div style={{ padding: "20px" }}>
        <h2>
          <FaCommentDots style={{ marginRight: "10px" }} />
          Gen AI RAG Application
        </h2>
        <p>
          This is a RAG application hosted on Streamlit.  
          Click the button below to launch it in a new tab.
          Upload any PDF as a source and try out Q/A 
        </p>

        <a
          href={streamlitAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            marginTop: "20px",
            padding: "12px 24px",
            backgroundColor: "#2563eb",
            color: "#fff",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "bold",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          }}
        >
          🚀 Launch RAG App
        </a>
      </div>
    </div>
  );
};

export default StreamlitApp;
