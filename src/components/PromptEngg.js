// src/components/PromptEngg.js

import React, { useState } from 'react';
import Header from './Header';
import { FaPlus, FaMinus } from 'react-icons/fa';

const PromptEngg = () => {
  // State to manage the open/closed status of each card
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (sectionName) => {
    setOpenSection(openSection === sectionName ? null : sectionName);
  };

  return (
    <div className="content-container">
      <Header />
      <div style={{ padding: '20px' }}>
        <h2>Prompt Engineering vs. Fine-Tuning vs. RAG</h2>
        <p>
          As we interact with large language models (LLMs), there are three primary methods for customizing their behavior and knowledge. Each has a different use case, cost, and complexity.
        </p>
        <div style={{ textAlign: 'center', margin: '30px 0' }}>
          <img
            src="/assets/llm-customization-methods.png"
            alt="LLM Customization Methods: Prompt Engineering, Fine-Tuning, RAG"
            style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}
          />
        </div>

        <p style={{marginTop: '20px'}}>
          Below is a detailed comparison of these methods, covering their core aspects, use cases, and pros & cons.
        </p>

        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
          <thead>
            <tr style={{ backgroundColor: '#f2f2f2' }}>
              <th style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'left' }}>Aspect</th>
              <th style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'left' }}>Prompt Engineering</th>
              <th style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'left' }}>Fine-Tuning</th>
              <th style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'left' }}>RAG (Retrieval-Augmented Generation)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>**Method**</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>Crafting better inputs to guide the model.</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>Retraining a model on a smaller, specific dataset.</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>Connecting an LLM to an external knowledge base.</td>
            </tr>
            <tr>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>**Use Case**</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>General tasks, content generation, quick answers.</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>Specialized tasks, company-specific tone/style.</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>Up-to-date information, internal data, reducing hallucinations.</td>
            </tr>
            <tr>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>**Pros**</td>
              <td style={{ padding: '10px', border: '10px solid #ddd' }}>Fast, low cost, easy to start, no training required.</td>
              <td style={{ padding: '10px', border: '10px solid #ddd' }}>High accuracy, domain-specific expertise, high consistency.</td>
              <td style={{ padding: '10px', border: '10px solid #ddd' }}>Access to new data, transparent sourcing, reduced hallucinations.</td>
            </tr>
            <tr>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>**Cons**</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>Can be inconsistent, limited by model's existing knowledge.</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>High cost, requires a lot of data, can overfit.</td>
              <td style={{ padding: '10px', border: '10px solid #ddd' }}>Complex to set up, requires maintenance of a knowledge base.</td>
            </tr>
          </tbody>
        </table>

        {/* =======================================================
            Prompting Techniques Section
            ======================================================= */}
        <div style={{ marginTop: '40px' }}>
          <h3>Prompting Techniques</h3>
          <p>
            The art of crafting effective prompts goes beyond just asking a question. By structuring your prompts in specific ways, you can significantly improve the model's performance and the quality of its responses.
          </p>

          {/* Zero-Shot Section */}
          <div className="card">
            <div className="card-header" onClick={() => toggleSection('zero-shot')}>
              <h3>Zero-Shot Prompting 🎯</h3>
              <button className="toggle-btn">
                {openSection === 'zero-shot' ? <FaMinus /> : <FaPlus />}
              </button>
            </div>
            {openSection === 'zero-shot' && (
              <div className="card-body">
                <p>
                  Zero-shot prompting is the simplest form, where you provide no examples. You expect the model to perform the task based on its pre-trained knowledge alone.
                </p>
                <div style={{ padding: '15px', backgroundColor: '#f5f5f5', borderLeft: '4px solid #007bff', borderRadius: '4px' }}>
                  <p><strong>Example:</strong></p>
                  <p><code>Prompt: What is the capital of France?</code></p>
                  <p><code>Output: Paris</code></p>
                </div>
              </div>
            )}
          </div>

          {/* One-Shot Section */}
          <div className="card">
            <div className="card-header" onClick={() => toggleSection('one-shot')}>
              <h3>One-Shot Prompting ➡️</h3>
              <button className="toggle-btn">
                {openSection === 'one-shot' ? <FaMinus /> : <FaPlus />}
              </button>
            </div>
            {openSection === 'one-shot' && (
              <div className="card-body">
                <p>
                  One-shot prompting provides the model with a single example to demonstrate the desired output format or style. This is a quick and effective way to guide the model without providing a full dataset.
                </p>
                <div style={{ padding: '15px', backgroundColor: '#f5f5f5', borderLeft: '4px solid #007bff', borderRadius: '4px' }}>
                  <p><strong>Example:</strong></p>
                  <p><code>
                    Translate the following from English to Spanish.<br/><br/>
                    English: house -> Spanish: casa<br/><br/>
                    English: dog -> Spanish:
                  </code></p>
                </div>
              </div>
            )}
          </div>

          {/* Few-Shot Section */}
          <div className="card">
            <div className="card-header" onClick={() => toggleSection('few-shot')}>
              <h3>Few-Shot Prompting 🧩</h3>
              <button className="toggle-btn">
                {openSection === 'few-shot' ? <FaMinus /> : <FaPlus />}
              </button>
            </div>
            {openSection === 'few-shot' && (
              <div className="card-body">
                <p>
                  Few-shot prompting provides the model with a few examples of the task before asking it to complete a new one. This helps guide the model and allows it to infer the desired format or style.
                </p>
                <div style={{ padding: '15px', backgroundColor: '#f5f5f5', borderLeft: '4px solid #007bff', borderRadius: '4px' }}>
                  <p><strong>Example:</strong></p>
                  <p><code>
                    Translate the following sentences into French.<br/>
                    English: Hello, how are you?<br/>
                    French: Bonjour, comment allez-vous?<br/><br/>
                    English: Thank you very much.<br/>
                    French: Merci beaucoup.<br/><br/>
                    English: What time is it?<br/>
                    French: Il est quelle heure?
                  </code></p>
                </div>
              </div>
            )}
          </div>

          {/* Chain-of-Thought (CoT) Section */}
          <div className="card">
            <div className="card-header" onClick={() => toggleSection('cot')}>
              <h3>Chain-of-Thought (CoT) Prompting 🤔</h3>
              <button className="toggle-btn">
                {openSection === 'cot' ? <FaMinus /> : <FaPlus />}
              </button>
            </div>
            {openSection === 'cot' && (
              <div className="card-body">
                <p>
                  Chain-of-Thought prompting is a powerful technique that encourages the model to break down a complex problem into intermediate steps. By explicitly asking the model to "think step-by-step," you can improve its ability to reason and produce accurate answers for multi-step tasks.
                </p>
                <div style={{ padding: '15px', backgroundColor: '#f5f5f5', borderLeft: '4px solid #007bff', borderRadius: '4px' }}>
                  <p><strong>Example:</strong></p>
                  <p><code>
                    Prompt: The cafeteria had 23 apples. It used 15 for lunch and bought 5 more. How many apples does it have now?<br/><br/>
                    Please think step-by-step.<br/>
                    **Step 1:** The cafeteria started with 23 apples.<br/>
                    **Step 2:** It used 15 apples, so 23 - 15 = 8 apples remaining.<br/>
                    **Step 3:** It bought 5 more apples, so 8 + 5 = 13 apples.<br/>
                    **Final Answer:** The cafeteria has 13 apples now.
                  </code></p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* =======================================================
            Fine-Tuning Techniques Section
            ======================================================= */}
        <div style={{ marginTop: '40px' }}>
          <h3>Fine-Tuning Techniques</h3>
          <p>
            While full fine-tuning is resource-intensive, a range of techniques have emerged to make it more efficient. These methods, known as Parameter-Efficient Fine-Tuning (PEFT), allow you to adapt LLMs with minimal computational cost.
          </p>

          {/* PEFT Section */}
          <div className="card">
            <div className="card-header" onClick={() => toggleSection('peft')}>
              <h3>PEFT (Parameter-Efficient Fine-Tuning) 🛠️</h3>
              <button className="toggle-btn">
                {openSection === 'peft' ? <FaMinus /> : <FaPlus />}
              </button>
            </div>
            {openSection === 'peft' && (
              <div className="card-body">
                <p>
                  PEFT is an umbrella term for a family of methods that fine-tune only a small number of model parameters while freezing the majority of the pre-trained weights. This drastically reduces the computational and memory costs.
                </p>
                <p><strong>Key benefits:</strong> Significant cost reduction, lower memory usage, and faster training times.</p>
              </div>
            )}
          </div>

          {/* LoRA Section */}
          <div className="card">
            <div className="card-header" onClick={() => toggleSection('lora')}>
              <h3>LoRA (Low-Rank Adaptation) 📉</h3>
              <button className="toggle-btn">
                {openSection === 'lora' ? <FaMinus /> : <FaPlus />}
              </button>
            </div>
            {openSection === 'lora' && (
              <div className="card-body">
                <p>
                  LoRA is one of the most popular PEFT methods. It works by freezing the pre-trained model weights and injecting small, trainable low-rank matrices (A and B) into each layer of the model. These matrices are the only parameters updated during fine-tuning.
                </p>
              </div>
            )}
          </div>

          {/* Q-LoRA Section */}
          <div className="card">
            <div className="card-header" onClick={() => toggleSection('qlora')}>
              <h3>Q-LoRA (Quantized LoRA) ⚡</h3>
              <button className="toggle-btn">
                {openSection === 'qlora' ? <FaMinus /> : <FaPlus />}
              </button>
            </div>
            {openSection === 'qlora' && (
              <div className="card-body">
                <p>
                  Q-LoRA builds on LoRA by quantizing the base model's weights to a lower precision (e.g., 4-bit). This means the model consumes significantly less memory, allowing for fine-tuning on consumer-grade GPUs without sacrificing performance.
                </p>
              </div>
            )}
          </div>

          {/* LoRA+ Section */}
          <div className="card">
            <div className="card-header" onClick={() => toggleSection('loraplus')}>
              <h3>LoRA+ ➕</h3>
              <button className="toggle-btn">
                {openSection === 'loraplus' ? <FaMinus /> : <FaPlus />}
              </button>
            </div>
            {openSection === 'loraplus' && (
              <div className="card-body">
                <p>
                  LoRA+ is an improvement on LoRA that uses different learning rates for the up-projection and down-projection matrices. It's designed to improve the model's performance on some downstream tasks without increasing the number of trainable parameters.
                </p>
              </div>
            )}
          </div>

          {/* VeRA Section */}
          <div className="card">
            <div className="card-header" onClick={() => toggleSection('vera')}>
              <h3>VeRA (Vector-based Random Adaptation) 🎲</h3>
              <button className="toggle-btn">
                {openSection === 'vera' ? <FaMinus /> : <FaPlus />}
              </button>
            </div>
            {openSection === 'vera' && (
              <div className="card-body">
                <p>
                  VeRA is another PEFT technique that offers even greater memory efficiency than LoRA. Instead of training dense matrices, it uses pre-defined random matrices. This makes it a very cost-effective option for fine-tuning.
                </p>
              </div>
            )}
          </div>

          {/* Delta-LoRA Section */}
          <div className="card">
            <div className="card-header" onClick={() => toggleSection('delta-lora')}>
              <h3>Delta-LoRA 🔀</h3>
              <button className="toggle-btn">
                {openSection === 'delta-lora' ? <FaMinus /> : <FaPlus />}
              </button>
            </div>
            {openSection === 'delta-lora' && (
              <div className="card-body">
                <p>
                  Delta-LoRA is a technique that combines a fine-tuned LoRA adapter with the original model's weights to create a new, merged model. This allows the fine-tuned changes to be permanently baked into the model's parameters, rather than requiring the adapter to be loaded at runtime.
                </p>
              </div>
            )}
          </div>

          {/* Reference Links Section */}
          <div style={{ marginTop: '30px' }}>
            <h4>Further Reading & References 📚</h4>
            <ul>
              <li>
                <a href="https://huggingface.co/docs/peft/en/index" target="_blank" rel="noopener noreferrer">
                  **Hugging Face PEFT Library Documentation**
                </a>
                : The official resource for using PEFT methods like LoRA and Q-LoRA.
              </li>
              <li>
                <a href="https://arxiv.org/abs/2106.09685" target="_blank" rel="noopener noreferrer">
                  **LoRA: Low-Rank Adaptation of Large Language Models**
                </a>
                : The original research paper introducing the LoRA technique.
              </li>
              <li>
                <a href="https://arxiv.org/abs/2305.14314" target="_blank" rel="noopener noreferrer">
                  **Q-LoRA: Efficient Finetuning of Quantized LLMs**
                </a>
                : The original paper on Q-LoRA, explaining the quantization approach.
              </li>
              <li>
                <a href="https://huggingface.co/blog/peft" target="_blank" rel="noopener noreferrer">
                  **Hugging Face Blog Post on PEFT**
                </a>
                : A beginner-friendly overview of different PEFT methods and their use cases.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromptEngg;