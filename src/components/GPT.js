import React, { useState } from "react";
import { FaLaptopCode, FaCommentDots, FaTimesCircle, FaFilePdf } from "react-icons/fa";
import Header from "./Header";

const GPT = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="content-container">
      <Header />
      <div style={{ padding: "20px" }}>
        <h2>
          <FaLaptopCode style={{ marginRight: "10px" }} />
          GPT (Generative Pre-trained Transformer)
        </h2>
        <p>
          GPT, or Generative Pre-trained Transformer, is a family of powerful
          language models developed by OpenAI. They are the technology behind
          popular tools like ChatGPT, known for their ability to understand and
          generate human-like text.
        </p>

        <div className="tab-navigation">
          <button
            className={activeTab === "overview" ? "active" : ""}
            onClick={() => setActiveTab("overview")}
          >
            Overview
          </button>
          <button
            className={activeTab === "how-it-works" ? "active" : ""}
            onClick={() => setActiveTab("how-it-works")}
          >
            How It Works
          </button>
          <button
            className={activeTab === "capabilities" ? "active" : ""}
            onClick={() => setActiveTab("capabilities")}
          >
            Capabilities
          </button>
          <button
            className={activeTab === "resources" ? "active" : ""}
            onClick={() => setActiveTab("resources")}
          >
            Resources
          </button>
        </div>

        {activeTab === "overview" && (
          <div className="tab-content">
            <h3>Model Overview</h3>
            <p>
              The GPT family has evolved significantly, with each new version
              (e.g., GPT-3, GPT-4, GPT-4o) introducing vast improvements in
              size, performance, and versatility. These models are "pre-trained"
              on a massive dataset of text and code from the internet, which
              allows them to learn the patterns, grammar, and nuances of human
              language.
            </p>
            <p>
              When a user provides a **prompt**, the model uses its pre-trained
              knowledge to predict and generate the most likely and relevant
              response.
            </p>
            <div className="diagram">
              <img
                src="/assets/GPT_Diagram.jpeg"
                alt="GPT Model Diagram"
                className="diagram-image"
                onClick={openModal}
                style={{ cursor: "pointer" }}
              />
              <p className="diagram-caption">Click the image for a better view.</p>
            </div>
          </div>
        )}

        {activeTab === "how-it-works" && (
          <div className="tab-content">
            <h3>How It Works: A Simple Explanation</h3>
            <p>
              Think of GPT as a very clever **text predictor**. It doesn't
              "think" or "understand" like a human does. Instead, it analyzes
              the words you give it and uses a vast amount of learned patterns
              to predict the next most logical word.
            </p>
            <p>
              **Analogy: A Super-Powered Autocomplete.**
              <br />
              Imagine your phone's autocomplete feature, but on a massive scale.
              When you type, "The sun is...", your phone might suggest "shining"
              or "hot." A GPT model does the same thing, but it has learned from
              almost all the text on the internet. It can predict not just the
              next word, but the next sentence, paragraph, or even a full
              article, based on the context you provide.
            </p>
            <p>
              Its core process is a cycle of:
              <ol>
                <li>**Reading the Prompt:** It takes your input.</li>
                <li>**Predicting the Next Word:** Based on your words, it calculates the most probable next word.</li>
                <li>**Adding the Word:** It adds that word to the text.</li>
                <li>**Repeating:** It repeats this process millions of times, building a complete, coherent response one word at a time.</li>
              </ol>
            </p>
          </div>
        )}

        {activeTab === "capabilities" && (
          <div className="tab-content">
            <h3>Key Capabilities</h3>
            <p>
              <FaCommentDots style={{ marginRight: "8px", color: "#3498db" }} />
              **Natural Language Generation:** Creates human-like text, from
              simple sentences to entire essays.
            </p>
            <p>
              <FaCommentDots style={{ marginRight: "8px", color: "#3498db" }} />
              **Content Summarization:** Can condense long articles or documents
              into key points.
            </p>
            <p>
              <FaCommentDots style={{ marginRight: "8px", color: "#3498db" }} />
              **Translation:** Translates text between various languages.
            </p>
            <p>
              <FaCommentDots style={{ marginRight: "8px", color: "#3498db" }} />
              **Code Generation:** Writes and debugs code in many programming
              languages.
            </p>
          </div>
        )}
        
        {activeTab === "resources" && (
          <div className="tab-content">
            <h3><FaFilePdf style={{ marginRight: "10px" }} />Resources</h3>
            <p>Explore these PDF documents for more in-depth information on GPT technology.</p>
            <ul>
              <li>
                <a href="https://proceedings.neurips.cc/paper_files/paper/2017/file/3f5ee243547dee91fbd053c1c4a845aa-Paper.pdf" target="_blank" rel="noopener noreferrer">
                  Attention Is All You Need (Transformer Paper)
                </a>
              </li>
              <li>
                <a href="https://cdn.openai.com/pdf/419b6906-9da6-406c-a19d-1bb078ac7637/oai_gpt-oss_model_card.pdf" target="_blank" rel="noopener noreferrer">
                  OpenAI GPT Model Card
                </a>
              </li>
              <li>
                <a href="/assets/GPT_basics.pdf" target="_blank" rel="noopener noreferrer">
                  Beginner's Guide to GPT
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>

      {isModalOpen && (
        <div className="image-modal-overlay" onClick={closeModal}>
          <div className="image-modal-content" onClick={e => e.stopPropagation()}>
            <FaTimesCircle className="modal-close-icon" onClick={closeModal} />
            <img src="/assets/GPT_Diagram.jpeg" alt="GPT Model Diagram Fullscreen" />
          </div>
        </div>
      )}
    </div>
  );
};

export default GPT;