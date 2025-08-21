import React from "react";
import Header from "./Header";
import { FaMicrochip } from "react-icons/fa";

const LLMProviders = () => {
  return (
    <div className="content-container">
      <Header />
      <div style={{ padding: "20px" }}>
        <h2><FaMicrochip style={{ marginRight: "10px" }} />LLM Providers and Families</h2>
        <p>
          This section provides an overview of major Large Language Model (LLM) families
          and their key characteristics, including model size and core features.
        </p>

        <div className="table-wrap">
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Family</th>
                <th>Provider</th>
                <th>Models</th>
                <th>Key Features</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Llama Family</td>
                <td>Meta AI</td>
                <td>Llama 3 (8B, 70B, 400B+), Llama 2</td>
                <td>Open weights, strong performance on a variety of benchmarks. Llama 3 is a powerful new generation.</td>
              </tr>
              <tr>
                <td>Gemma Family</td>
                <td>Google</td>
                <td>Gemma (2B, 7B), Gemma 2</td>
                <td>Lightweight, open weights models derived from the Gemini family, designed for developers and researchers.</td>
              </tr>
              <tr>
                <td>Mistral Family</td>
                <td>Mistral AI</td>
                <td>Mistral 7B, Mixtral 8x7B, Mistral Large</td>
                <td>Open source and commercial models. Known for efficiency and strong performance with a smaller parameter count.</td>
              </tr>
              <tr>
                <td>DeepSeek Family</td>
                <td>DeepSeek AI</td>
                <td>DeepSeek Coder, DeepSeek LLM</td>
                <td>Specialized for code generation and general-purpose tasks, with models available under open licenses.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LLMProviders;