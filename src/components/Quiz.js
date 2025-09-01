import React, { useState, useEffect } from 'react';
import { FaLaptopCode } from 'react-icons/fa';
import Header from './Header';
import { db } from '../firebase';
import { collection, addDoc } from "firebase/firestore";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [userName, setUserName] = useState('');
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const questionSets = [
    [
      {
        questionText: 'Which of the following best describes the relationship between Artificial Intelligence (AI), Machine Learning (ML), and Deep Learning (DL)?',
        answerOptions: [
          { answerText: 'DL is a type of ML, and ML is a type of AI.', isCorrect: true, rationale: 'Deep Learning is a specialized subfield of Machine Learning, and Machine Learning is a subfield of the broader field of Artificial Intelligence.' },
          { answerText: 'AI is a type of ML, and DL is a type of AI.', isCorrect: false, rationale: 'AI is the overarching field, with ML being a subset of it.' },
          { answerText: 'ML is a type of DL, and DL is a type of AI.', isCorrect: false, rationale: 'DL is a type of ML, not the other way around.' },
          { answerText: 'All three are unrelated but work together in some applications.', isCorrect: false, rationale: 'The three concepts are hierarchically related, not separate.' },
        ],
      },
      {
        questionText: 'What is the primary function of a Large Language Model (LLM)?',
        answerOptions: [
          { answerText: 'To perform complex mathematical calculations with high accuracy.', isCorrect: false, rationale: 'This is a function of some AI models, but not the primary function of an LLM.' },
          { answerText: 'To classify images and detect objects within them.', isCorrect: false, rationale: 'This is a function of computer vision models, not primarily of LLMs.' },
          { answerText: 'To understand, generate, and manipulate human language based on learned patterns.', isCorrect: true, rationale: 'This is the core function of an LLM, which is a type of generative AI model trained on text data.' },
          { answerText: 'To organize and retrieve data from a structured database.', isCorrect: false, rationale: 'This is the function of a database management system, not an LLM.' },
        ],
      },
      {
        questionText: 'What company developed the GPT (Generative Pre-trained Transformer) family of models?',
        answerOptions: [
          { answerText: 'Google', isCorrect: false, rationale: 'Google developed models like BERT and Gemini, but not the GPT series.' },
          { answerText: 'Microsoft', isCorrect: false, rationale: 'Microsoft has a strong partnership with OpenAI, but did not develop GPT.' },
          { answerText: 'OpenAI', isCorrect: true, rationale: 'OpenAI is the developer of the GPT family of models, including GPT-3, GPT-4, and GPT-4o.' },
          { answerText: 'Meta', isCorrect: false, rationale: 'Meta developed the LLaMA family of models, but not the GPT series.' },
        ],
      },
      {
        questionText: 'Which of the following is NOT a common method for fine-tuning a Large Language Model?',
        answerOptions: [
          { answerText: 'Full fine-tuning', isCorrect: false, rationale: 'Full fine-tuning is a legitimate method where the entire model is retrained on a new dataset.' },
          { answerText: 'Parameter-Efficient Fine-Tuning (PEFT)', isCorrect: false, rationale: 'PEFT methods like LoRA are widely used to fine-tune models with limited computational resources.' },
          { answerText: 'Model decomposition', isCorrect: true, rationale: 'This is not a standard method for fine-tuning LLMs; fine-tuning focuses on adaptation, not breaking down the model.' },
          { answerText: 'Prompt engineering', isCorrect: false, rationale: 'Prompt engineering is not true fine-tuning but is a common practice used to guide an LLM\'s output without retraining.' },
        ],
      },
      {
        questionText: 'What company is known for its open-source LLM models, such as LLaMA?',
        answerOptions: [
          { answerText: 'Google', isCorrect: false, rationale: 'Google\'s models like Gemini are generally proprietary, not open-source.' },
          { answerText: 'OpenAI', isCorrect: false, rationale: 'OpenAI\'s models like GPT are generally not open-source.' },
          { answerText: 'Meta', isCorrect: true, rationale: 'Meta Platforms is the creator of the open-source LLaMA LLM family.' },
          { answerText: 'Hugging Face', isCorrect: false, rationale: 'Hugging Face is a platform for sharing AI models, but they do not develop the LLaMA family.' },
        ],
      },
    ],
    [
      {
        questionText: 'What is the main purpose of a Retrieval-Augmented Generation (RAG) system?',
        answerOptions: [
          { answerText: 'To convert text to speech.', isCorrect: false, rationale: 'This is a function of a text-to-speech model, not RAG.' },
          { answerText: 'To retrieve data from an external source to improve an LLM\'s answer.', isCorrect: true, rationale: 'RAG augments an LLM\'s knowledge by retrieving relevant information from a separate database or knowledge base.' },
          { answerText: 'To generate images from text descriptions.', isCorrect: false, rationale: 'This is a function of a text-to-image model, not RAG.' },
          { answerText: 'To translate text from one language to another.', isCorrect: false, rationale: 'This is a function of a machine translation model, not RAG.' },
        ],
      },
      {
        questionText: 'What is a "chatbot" typically built on?',
        answerOptions: [
          { answerText: 'A simple spreadsheet.', isCorrect: false, rationale: 'While some basic bots use simple data, a typical chatbot relies on more complex conversational AI.' },
          { answerText: 'A database of images.', isCorrect: false, rationale: 'Chatbots primarily use text, not images, for conversation.' },
          { answerText: 'A rules-based system or a conversational AI model (like an LLM).', isCorrect: true, rationale: 'Chatbots can be built on either simple rules or more advanced conversational models like LLMs to handle complex queries.' },
          { answerText: 'A weather forecasting algorithm.', isCorrect: false, rationale: 'A weather forecasting algorithm is used for predicting weather, not for conversation.' },
        ],
      },
      {
        questionText: 'What does the term "fine-tuning" an LLM mean?',
        answerOptions: [
          { answerText: 'Running the model on faster hardware.', isCorrect: false, rationale: 'Fine-tuning is a software process, not a hardware upgrade.' },
          { answerText: 'Adjusting a pre-trained model on a smaller, specific dataset to improve its performance on a particular task.', isCorrect: true, rationale: 'Fine-tuning customizes a large, general-purpose model for a specific use case, such as a customer service bot.' },
          { answerText: 'Making the model\'s output less detailed.', isCorrect: false, rationale: 'Fine-tuning generally improves the quality and relevance of the output, not just its length.' },
          { answerText: 'Training the model from scratch on a new, very large dataset.', isCorrect: false, rationale: 'Training a model from scratch is a much more intensive process than fine-tuning.' },
        ],
      },
      {
        questionText: 'What is "prompt engineering"?',
        answerOptions: [
          { answerText: 'The process of designing a new AI chip.', isCorrect: false, rationale: 'Prompt engineering relates to software and interaction with a model, not hardware design.' },
          { answerText: 'The field of robotics.', isCorrect: false, rationale: 'Robotics involves the design and use of robots.' },
          { answerText: 'The art of crafting effective inputs (prompts) to get a desired output from an AI model.', isCorrect: true, rationale: 'Prompt engineering is the practice of creating high-quality prompts to steer an LLM\'s behavior.' },
          { answerText: 'Building a new neural network architecture.', isCorrect: false, rationale: 'Prompt engineering is about using a pre-existing model effectively, not building a new one.' },
        ],
      },
      {
        questionText: 'Which company developed the Gemini family of LLMs?',
        answerOptions: [
          { answerText: 'OpenAI', isCorrect: false, rationale: 'OpenAI developed the GPT series.' },
          { answerText: 'Google', isCorrect: true, rationale: 'Google developed the Gemini series of models.' },
          { answerText: 'Microsoft', isCorrect: false, rationale: 'Microsoft has a partnership with OpenAI but developed models like Phi.' },
          { answerText: 'Meta', isCorrect: false, rationale: 'Meta developed the LLaMA series.' },
        ],
      },
    ],
    [
      {
        questionText: 'What is the role of a "token" in a Large Language Model?',
        answerOptions: [
          { answerText: 'It is the name of the model’s creator.', isCorrect: false, rationale: 'A token is a fundamental part of the model\'s input and output, not its name.' },
          { answerText: 'A unit of text or a sequence of characters that the model processes.', isCorrect: true, rationale: 'LLMs break down text into smaller pieces called tokens, which can be words, parts of words, or symbols.' },
          { answerText: 'A security key for accessing the model.', isCorrect: false, rationale: 'A token can also be a security key, but not in the context of an LLM processing text.' },
          { answerText: 'A type of data file used for model training.', isCorrect: false, rationale: 'Tokens are part of the text itself, not a file format.' },
        ],
      },
      {
        questionText: 'What is the purpose of an LLM\'s "temperature" setting?',
        answerOptions: [
          { answerText: 'To control the model\'s processing speed.', isCorrect: false, rationale: 'Temperature does not affect processing speed.' },
          { answerText: 'To increase the length of the model\'s response.', isCorrect: false, rationale: 'This is controlled by the `max_tokens` or similar setting.' },
          { answerText: 'To adjust the randomness and creativity of the model\'s output.', isCorrect: true, rationale: 'A higher temperature leads to more creative but potentially less coherent responses, while a lower temperature makes the output more deterministic.' },
          { answerText: 'To change the model\'s default language.', isCorrect: false, rationale: 'Language is determined by the input and the model\'s training data, not temperature.' },
        ],
      },
      {
        questionText: 'What does the acronym "LLM" stand for?',
        answerOptions: [
          { answerText: 'Low-Level Machine.', isCorrect: false, rationale: 'LLM stands for Large Language Model.' },
          { answerText: 'Language Learning Module.', isCorrect: false, rationale: 'LLM stands for Large Language Model.' },
          { answerText: 'Large Language Model.', isCorrect: true, rationale: 'LLM is the widely used acronym for Large Language Model.' },
          { answerText: 'Logical Language Maker.', isCorrect: false, rationale: 'LLM stands for Large Language Model.' },
        ],
      },
      {
        questionText: 'What is a "neural network"?',
        answerOptions: [
          { answerText: 'A physical network of computer hardware.', isCorrect: false, rationale: 'A neural network is a computational model, not physical hardware.' },
          { answerText: 'A model inspired by the human brain, used for machine learning.', isCorrect: true, rationale: 'Neural networks are a type of ML algorithm modeled on the structure and function of the human brain.' },
          { answerText: 'A type of database used for storing images.', isCorrect: false, rationale: 'Neural networks are for processing data, not for simple storage.' },
          { answerText: 'A system for routing internet traffic.', isCorrect: false, rationale: 'This describes network routing, not a neural network.' },
        ],
      },
      {
        questionText: 'Which of the following is an example of generative AI?',
        answerOptions: [
          { answerText: 'A system that detects spam emails.', isCorrect: false, rationale: 'Spam detection is a classification task, not generative AI.' },
          { answerText: 'A face recognition system.', isCorrect: false, rationale: 'Face recognition is a classification task, not generative AI.' },
          { answerText: 'A model that creates a new image from a text description.', isCorrect: true, rationale: 'Generative AI creates new content (text, images, audio, etc.).' },
          { answerText: 'A calculator app.', isCorrect: false, rationale: 'A calculator performs deterministic mathematical operations, not generative tasks.' },
        ],
      },
    ]
  ];

  useEffect(() => {
    const randomSetIndex = Math.floor(Math.random() * questionSets.length);
    setQuestions(questionSets[randomSetIndex]);
  }, []);

  useEffect(() => {
    if (showScore && userName && !quizSubmitted) {
      const saveScore = async () => {
        try {
          await addDoc(collection(db, "scores"), {
            name: userName,
            score: score,
            totalQuestions: questions.length,
            timestamp: new Date()
          });
          setQuizSubmitted(true);
          console.log("Score saved successfully!");
        } catch (e) {
          console.error("Error adding document: ", e);
        }
      };
      saveScore();
    }
  }, [showScore, userName, questions.length, score, quizSubmitted]);

  const handleAnswerOptionClick = (isCorrect, answerText) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    setHasAnswered(true);
    setSelectedAnswer(answerText);
    
    const currentQuestionData = questions[currentQuestion];
    setUserAnswers([
      ...userAnswers,
      {
        question: currentQuestionData.questionText,
        userAnswer: answerText,
        isCorrect: isCorrect,
        correctAnswer: currentQuestionData.answerOptions.find(opt => opt.isCorrect).answerText
      }
    ]);
  };

  const handleNextQuestion = () => {
    setHasAnswered(false);
    setSelectedAnswer(null);
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      const name = prompt("Please enter your name to save your score:");
      if (name) {
        setUserName(name);
      }
      setShowScore(true);
    }
  };
  
  const handleRestartQuiz = () => {
    const randomSetIndex = Math.floor(Math.random() * questionSets.length);
    setQuestions(questionSets[randomSetIndex]);
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setUserAnswers([]);
    setSelectedAnswer(null);
    setHasAnswered(false);
    setUserName('');
    setQuizSubmitted(false);
  };

  return (
    <div className="content-container">
      <Header />
      <div style={{ padding: '20px' }}>
        <h2><FaLaptopCode style={{ marginRight: '10px' }} />Basic AI Concepts Quiz</h2>
        <p>Test your knowledge on AI, ML, DL, LLMs, and GPT with this short quiz.</p>
        
        {showScore ? (
          <div className="score-section">
            <h3 className="score-title">You scored {score} out of {questions.length}</h3>
            {userName && <p className="thank-you-message">Thank you, {userName}! Your score has been submitted.</p>}
            <div className="review-section">
              {userAnswers.map((answer, index) => (
                <div key={index} className="review-card">
                  <p className="question-text-review"><strong>Question {index + 1}:</strong> {answer.question}</p>
                  <p className={`review-answer ${answer.isCorrect ? 'correct-review' : 'incorrect-review'}`}>
                    <strong>Your Answer:</strong> {answer.userAnswer}
                    <span className="icon-status">{answer.isCorrect ? ' ✔️' : ' ❌'}</span>
                  </p>
                  {!answer.isCorrect && (
                    <p className="correct-answer-text">
                      <strong>Correct Answer:</strong> {answer.correctAnswer}
                    </p>
                  )}
                </div>
              ))}
            </div>
            <button className="quiz-button" onClick={handleRestartQuiz}>
              Go back to quiz start page
            </button>
          </div>
        ) : (
          <div className="quiz-container">
            {questions.length > 0 && (
              <>
                <div className="question-section">
                  <div className="question-count">
                    <span>Question {currentQuestion + 1}</span>/{questions.length}
                  </div>
                  <div className="question-text">{questions[currentQuestion].questionText}</div>
                </div>
                <div className="answer-section">
                  {questions[currentQuestion].answerOptions.map((answerOption, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswerOptionClick(answerOption.isCorrect, answerOption.answerText)}
                      className={`answer-button ${hasAnswered ? (answerOption.isCorrect ? 'correct' : (selectedAnswer === answerOption.answerText ? 'incorrect' : '')) : ''}`}
                      disabled={hasAnswered}
                    >
                      {answerOption.answerText}
                    </button>
                  ))}
                </div>
                {hasAnswered && (
                  <div className="rationale-section">
                    <p>
                      <strong>Rationale:</strong>{' '}
                      {questions[currentQuestion].answerOptions.find(opt => opt.isCorrect).rationale}
                    </p>
                    <button className="quiz-button" onClick={handleNextQuestion}>
                      {currentQuestion === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;