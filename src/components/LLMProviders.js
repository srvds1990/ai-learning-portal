import React from "react";
import Header from "./Header";
import { 
  FaMicrochip, FaGoogle, FaFacebook, FaMicrosoft, FaRocket, FaSearch
} from "react-icons/fa";
import { SiOpenai, SiAnthropic } from "react-icons/si";
import { GiBoltEye } from "react-icons/gi";

const LLMProviders = () => {
  return (
    <div className="content-container">
      <Header />
      <div style={{ padding: "20px" }}>
        <h2>
          <FaMicrochip style={{ marginRight: "10px" }} />
          LLM Providers and Families
        </h2>
        <p>
          This section provides an overview of major Large Language Model (LLM)
          families and their key characteristics, including model size,
          performance, and core features.
        </p>
        <div className="table-fixed-header">
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
                <td colSpan="4" style={{ textAlign: "center", backgroundColor: "#34495e", color: "white", fontWeight: "bold" }}>
                  Proprietary Models
                </td>
              </tr>
              <tr>
                <td><SiOpenai style={{ marginRight: "8px" }} />GPT Family</td>
                <td>OpenAI</td>
                <td>GPT-4o, GPT-4, GPT-3.5</td>
                <td>
                  Industry-leading models known for powerful reasoning and
                  multimodal capabilities. Available via API and in products like
                  ChatGPT.
                </td>
              </tr>
              <tr>
                <td><FaGoogle style={{ marginRight: "8px" }} />Gemini Family</td>
                <td>Google</td>
                <td>Gemini 1.5 Pro, Gemini 1.0 Ultra, Gemini 1.0 Pro</td>
                <td>
                  Google's latest, highly capable models designed for multimodal
                  reasoning, and available through the Google AI Studio and Vertex AI.
                </td>
              </tr>
              <tr>
                <td><SiAnthropic style={{ marginRight: "8px" }} />Claude Family</td>
                <td>Anthropic</td>
                <td>Claude 3 Opus, Claude 3 Sonnet, Claude 3 Haiku</td>
                <td>
                  Models known for superior performance in reasoning, coding, and
                  mathematics. Designed with an emphasis on safety and constitutional AI.
                </td>
              </tr>
              <tr>
                <td colSpan="4" style={{ textAlign: "center", backgroundColor: "#34495e", color: "white", fontWeight: "bold" }}>
                  Open-Weights Models
                </td>
              </tr>
              <tr>
                <td><FaFacebook style={{ marginRight: "8px" }} />Llama Family</td>
                <td>Meta AI</td>
                <td>Llama 3 (8B, 70B, 400B+), Llama 2</td>
                <td>
                  Powerful, open-weights models with a large and active developer
                  community. Known for strong performance and versatility.
                </td>
              </tr>
              <tr>
                <td><FaGoogle style={{ marginRight: "8px" }} />Gemma Family</td>
                <td>Google</td>
                <td>Gemma (2B, 7B, 9B), CodeGemma, PaliGemma</td>
                <td>
                  Lightweight, open-weights models derived from the Gemini family,
                  optimized for performance on various hardware, and ideal for
                  research and development.
                </td>
              </tr>
              <tr>
                <td><GiBoltEye style={{ marginRight: "8px" }} />Mistral Family</td>
                <td>Mistral AI</td>
                <td>Mistral 7B, Mixtral 8x7B, Mistral Large</td>
                <td>
                  Leading European AI company with a focus on efficiency and
                  performance. Known for models that are both powerful and small in size.
                </td>
              </tr>
              <tr>
                <td><FaMicrosoft style={{ marginRight: "8px" }} />Phi Family</td>
                <td>Microsoft</td>
                <td>Phi-3 Mini, Phi-3 Small, Phi-3 Medium</td>
                <td>
                  Small, high-quality open-weights models. Highly capable despite
                  their small size, making them perfect for on-device and edge
                  computing.
                </td>
              </tr>
              <tr>
                <td><FaSearch style={{ marginRight: "8px" }} />DeepSeek Family</td>
                <td>DeepSeek AI</td>
                <td>DeepSeek Coder, DeepSeek LLM</td>
                <td>
                  Models with a focus on code generation and programming-related tasks.
                  Available under an open license.
                </td>
              </tr>
              <tr>
                <td colSpan="4" style={{ textAlign: "center", backgroundColor: "#34495e", color: "white", fontWeight: "bold" }}>
                  Other Notable Models
                </td>
              </tr>
              <tr>
                <td><FaRocket style={{ marginRight: "8px" }} />Grok</td>
                <td>xAI</td>
                <td>Grok-1, Grok-1.5</td>
                <td>
                  Developed by Elon Musk's xAI. Known for its wit and rebellious streak.
                  It has access to real-time information from X (formerly Twitter).
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LLMProviders;