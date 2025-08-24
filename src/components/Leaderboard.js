// src/components/Leaderboard.js
import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import Header from './Header';

const Leaderboard = () => {
  const [scores, setScores] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchScores = async () => {
      setLoading(true);
      const scoresRef = collection(db, "scores");
      const q = query(scoresRef, orderBy("score", "desc"), orderBy("timestamp", "asc"), limit(10));
      const querySnapshot = await getDocs(q);
      const scoresList = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setScores(scoresList);
      setLoading(false);
    };

    fetchScores();
  }, []);

  return (
    <div className="content-container">
      <Header />
      <div style={{ padding: '20px' }}>
        <h2>Quiz Leaderboard</h2>
        {loading ? (
          <p>Loading scores...</p>
        ) : scores.length === 0 ? (
          <p>No scores submitted yet. Be the first!</p>
        ) : (
          <ul className="leaderboard-list">
            {scores.map((score, index) => (
              <li key={score.id} className="leaderboard-item">
                <span><strong>{index + 1}. {score.name || 'Anonymous'}</strong></span>
                <span>{score.score} / {score.totalQuestions}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Leaderboard;