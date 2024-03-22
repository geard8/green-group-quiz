import React, { useState } from 'react';
import './App.css';
import './components/style.css';
import './css/Footer.css';
import Questions from './components/Questions';
import StartPage from './components/StartPage';
import Footer from './components/Footer';
import Result from './components/Result';

const App = () => {
  const [showStartPage, setShowStartPage] = useState(true);
  const [showQuestions, setShowQuestions] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState({
    question1: '',
    question2: '',
    question3: '',
    question4: '',
    question5: '',
    question6: '',
    question7: '',
  });

  const handleStartButtonClick = () => {
    setShowStartPage(false);
    setShowQuestions(true);
  };

  const handleAnswerChange = (question, value) => {
    setAnswers(prevAnswers => ({ ...prevAnswers, [question]: value }));
  };

  const handleAnswerSubmit = submittedAnswers => {
    setAnswers(submittedAnswers);
    setShowQuestions(false);
    setShowResult(true);
  };

  const handleReset = () => {
    setAnswers({
      question1: '',
      question2: '',
      question3: '',
      question4: '',
      question5: '',
      question6: '',
      question7: '',
    });
    setShowResult(false);
    setShowQuestions(false);
    setShowStartPage(true); // Show the start page again
  };

  return (

    <>
      <div className="container">
        <article>
          {showStartPage && <StartPage onStartButtonClick={handleStartButtonClick} />}
          {showQuestions && (
            <Questions
              onAnswerChange={handleAnswerChange}
              onAnswerSubmit={handleAnswerSubmit}
              onReset={handleReset}
            />
          )}
          {showResult && <Result answers={answers} onReset={handleReset} />}
        </article>
      </div>
      <Footer />
    </>
  );
};

export default App;