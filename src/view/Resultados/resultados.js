import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './resultados.css';

function Resultados() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    // Realizar la solicitud GET para obtener los resultados
    axios.get('http://localhost:3001/questions')
      .then(response => {
        setResults(response.data);
      })
      .catch(error => {
        console.error('Error al obtener los resultados:', error);
      });
  }, []);

  const calculateTotalScore = (question) => {
    return question.options.reduce((total, option) => total + option.score, 0);
  };

  const calculatePercentage = (userScore, total) => {
    const percentage = ((userScore / total) * 100).toFixed(2);
    console.log(`User Score: ${userScore}, Total Score: ${total}, Percentage: ${percentage}%`);
    return percentage;
  };

  return (
    <div className='containerResult'>
      <h1 className="results-title">Resultados de la Encuesta</h1>
      {results.map((result, index) => (
        <div key={index} className='result-container'>
          <h2 className='question-text'>{result.questionText}</h2>
          <ul className='options-list'>
            {result.options.map((option, optionIndex) => (
              <li key={optionIndex} className='option'>
                <p className='option-text'>{option.optionText}</p>
              </li>
            ))}
          </ul>
          <p className='user-score'>User Score: {result.userScore}</p>
          <p className='percentage'>
            {calculatePercentage(result.userScore, calculateTotalScore(result))}%
          </p>
        </div>
      ))}
    </div>
  );
}

export default Resultados;
