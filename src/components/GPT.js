import React from "react";
import Header from "./Header"; // Import the Header component
import { SiOpenai } from "react-icons/si"; // A different icon for the GPT page

const GPT = () => {
  const pdfLink = "https://proceedings.neurips.cc/paper_files/paper/2017/file/3f5ee243547dee91fbd053c1c4a845aa-Paper.pdf";

  return (
    <div className="content-container"> {/* Use a content container for padding */}
      <Header />
      <div style={{ padding: "20px" }}> {/* Add padding to the content */}
        <h2><SiOpenai style={{ marginRight: "10px" }} />What is GPT?</h2>
        <p>
          Generative Pre-trained Transformer (GPT) is a family of large language models
          developed by OpenAI. It is based on the **Transformer architecture** and
          trained on a vast amount of text data from the internet.
        </p>
        
        <h4>High-Level Architecture</h4>
        <p>
          GPT's core is the **Transformer**, a neural network model that uses a mechanism
          called **self-attention**. Unlike older models that processed text sequentially,
          the Transformer can weigh the importance of different words in a sentence
          simultaneously, allowing it to understand context more effectively.
        </p>

        <h4>Use Cases</h4>
        <ul>
          <li>**Content Generation:** Writing articles, poems, and stories.</li>
          <li>**Summarization:** Condensing long documents into key points.</li>
          <li>**Translation:** Translating text between different languages.</li>
          <li>**Question Answering:** Providing direct and detailed answers to queries.</li>
        </ul>
        
        <h4>Source</h4>
        <p>
          For a deep dive into the architecture and research, you can refer to the official paper:
          <br />
          <a href={pdfLink} target="_blank" rel="noopener noreferrer">
            Attention Is All You Need (PDF Link)
          </a>
        </p>
      </div>
    </div>
  );
};

export default GPT;