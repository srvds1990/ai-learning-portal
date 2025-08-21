import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import Header from "./Header";

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (feedback.trim() === "") {
      alert("Please enter your feedback before submitting.");
      return;
    }
    
    // In a real application, you would send this data to a backend server.
    // For this example, we'll just log it to the console.
    console.log("Feedback submitted:", feedback);

    setSubmitted(true);
    setFeedback("");
  };

  return (
    <div className="content-container">
      <Header />
      <div style={{ padding: "20px" }}>
        <h2><FaPaperPlane style={{ marginRight: "10px" }} />Feedback</h2>
        <p>We'd love to hear your thoughts! Please use the form below to provide your feedback on this portal.</p>

        {submitted ? (
          <div style={{ padding: "20px", border: "1px solid #28a745", borderRadius: "8px", backgroundColor: "#e8f5e9", textAlign: "center", color: "#28a745" }}>
            <p>Thank you for your feedback! Your submission has been received.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
            <div className="form-group">
              <label htmlFor="feedback-text" style={{ fontWeight: "bold" }}>Your Feedback:</label>
              <textarea
                id="feedback-text"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Enter your feedback here..."
                rows="6"
                style={{ width: "100%", padding: "12px", borderRadius: "8px", border: "1px solid #ccc", boxSizing: "border-box" }}
              />
            </div>
            <button
              type="submit"
              style={{ padding: "12px 20px", border: "none", borderRadius: "8px", backgroundColor: "#007BFF", color: "white", cursor: "pointer", fontSize: "16px" }}
            >
              Submit Feedback
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default FeedbackForm;