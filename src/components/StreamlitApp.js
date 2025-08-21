import React from "react";
import Header from "./Header";
import { FaCommentDots } from "react-icons/fa";

const StreamlitApp = () => {
  const streamlitAppUrl = "https://your-streamlit-app.streamlit.app/";

  return (
    <div className="content-container">
      <Header />
      <div style={{ padding: "20px" }}>
        <h2><FaCommentDots style={{ marginRight: "10px" }} />Gen AI RAG Application</h2>
        <p>This is a RAG application hosted on Streamlit. Please interact with the model below.</p>

        <iframe
          src={streamlitAppUrl}
          title="Streamlit RAG Application"
          style={{
            width: "100%",
            height: "80vh",
            border: "none",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
          }}
        ></iframe>
      </div>
    </div>
  );
};

export default StreamlitApp;