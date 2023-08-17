import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './preguntas.css';

function Preguntas() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  useEffect(() => {
    // Realizar la solicitud GET para obtener las preguntas
    axios.get('http://localhost:3001/questions')
      .then(response => {
        setQuestions(response.data);
      })
      .catch(error => {
        console.error('Error al obtener las preguntas:', error);

      });
  }, []);

  const handleOptionSelect = (questionId, optionScore) => {
    const updatedQuestions = questions.map(question =>
      question.id === questionId
        ? { ...question, userScore: optionScore }
        : question
    );

    console.log ("que trae esto", updatedQuestions)

    axios.post('http://localhost:3001/questions/', { questions: updatedQuestions })
      .then(response => {
        console.log('User responses saved successfully:', response.data);
        setQuestions(updatedQuestions); // Actualizar el estado local con las puntuaciones actualizadas
        setCurrentQuestionIndex(currentQuestionIndex + 1); // Avanzar a la siguiente pregunta
      })
      .catch(error => {
        console.error('Error saving user responses:', error);
      });
  };
  
  

  const currentQuestion = questions[currentQuestionIndex];

  if (!currentQuestion) {
    return <div>Cargando preguntas...</div>;
  }

  return (
    <div className='container'>
      <div className='containerPreguntas'>
        <h1 className='quiz-title'>Encuesta</h1>
        <form>
          <div key={currentQuestion.questionText} className='question-container'>
            <h2 className='pregunta'>{currentQuestion.questionText}</h2>
            <ul className='respuesta'>
              {currentQuestion.options.map(option => (
                <li key={option.optionText} className=''>
                  <label className=''>
                    <input
                      type='radio'
                      name={`question-${currentQuestion.questionText}`}
                      value={option.score}
                      onChange={() => handleOptionSelect(currentQuestion.id, option.score)}
                    />
                    {option.optionText}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Preguntas;
