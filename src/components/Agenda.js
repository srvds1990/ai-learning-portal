import React from "react";
import { FaBrain, FaRobot, FaChartLine, FaProjectDiagram } from "react-icons/fa";
import ExpandableCard from "./ExpandableCard";
import AI from "./AI";
import ML from "./ML";
import DL from "./DL";
import LLM from "./LLM";
import GPT from "./GPT"; // Import the new GPT component

const Agenda = () => {
  return (
    <div className="card agenda-card">
      <div className="card-header">
        <h3 style={{ margin: 0 }}>Agenda: AI vs ML vs DL vs LLM</h3>
      </div>
      <div className="card-body">
        <div className="diagram">
          <img
            src="/assets/ai-ml-dl-llm.jpeg"
            alt="AI → ML → DL → Generative AI → LLMs"
            className="diagram-image"
          />
          <div className="diagram-caption">Visual overview: AI, ML, DL & LLMs</div>
        </div>

        <div className="table-wrap">
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Concept</th>
                <th>Description</th>
                <th>Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><FaBrain /> AI</td>
                <td>Broad field of making machines intelligent</td>
                <td>Chess-playing computer, Chatbots</td>
              </tr>
              <tr>
                <td><FaChartLine /> ML</td>
                <td>Subset of AI where systems learn from data</td>
                <td>Spam filter, Recommendation system</td>
              </tr>
              <tr>
                <td><FaProjectDiagram /> DL</td>
                <td>Subset of ML using deep neural networks</td>
                <td>Image recognition, Speech-to-text</td>
              </tr>
              <tr>
                <td><FaRobot /> LLM</td>
                <td>Specialized deep learning models for language</td>
                <td>GPT, BERT, Claude</td>
              </tr>
            </tbody>
          </table>
        </div>

        <ExpandableCard title={<> <FaBrain /> Artificial Intelligence (AI) </>}>
          <AI />
        </ExpandableCard>

        <ExpandableCard title={<> <FaChartLine /> Machine Learning (ML) </>}>
          <ML />
        </ExpandableCard>

        <ExpandableCard title={<> <FaProjectDiagram /> Deep Learning (DL) </>}>
          <DL />
        </ExpandableCard>

        <ExpandableCard title={<> <FaRobot /> Large Language Models (LLM) </>}>
          <LLM />
        </ExpandableCard>

        <ExpandableCard title={<> <FaRobot /> What is GPT? </>}>
          <GPT />
        </ExpandableCard>

      </div>
    </div>
  );
};

export default Agenda;