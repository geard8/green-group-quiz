import React, { useState } from 'react';
//import Question from './question';

const Questions = ({ onAnswerChange, onAnswerSubmit, onReset }) => {
  const [answers, setAnswers] = useState({
    question1: '',
    question2: '',
    question3: '',
    question4: '',
    question5: '',
    question6: '',
    question7: '',
  });

  const handleAnswerChange = (question, value) => {
    setAnswers(prevAnswers => ({ ...prevAnswers, [question]: value }));
    onAnswerChange(question, value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Check if all questions are answered
    if (Object.values(answers).every(answer => answer !== '')) {
      onAnswerSubmit(answers);
    } else {
      alert("Please answer all questions before submitting.");
    }
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
    onReset();
  };

  return (
    <div>
      <h2>Questions</h2>
      <form onSubmit={handleSubmit} onReset={handleReset}>
        {/* <Question question="question 1" name="question1"/>
        <Question question="question 2" name="question2"/>
        <Question question="question 3" name="question3"/>
        <Question question="question 4" name="question4"/>
        <Question question="question 5" name="question5"/>
        <Question question="question 6" name="question6"/>
        <Question question="question 7" name="question7"/> */}
        <fieldset>
          <legend>Hur mycket tid vill du spendera på ditt djur?</legend>
          <label>
            <input type="radio" name="question1" value="A" onChange={e => handleAnswerChange('question1', e.target.value)} />
            Mycket
          </label>
          <label>
            <input type="radio" name="question1" value="B" onChange={e => handleAnswerChange('question1', e.target.value)} />
            Mellan
          </label>
          <label>
            <input type="radio" name="question1" value="C" onChange={e => handleAnswerChange('question1', e.target.value)} />
            Lite
          </label>
        </fieldset>
        <fieldset>
          <legend>Hur mycket pengar är du beredd på att spendera på ditt djur?</legend>
          <label>
            <input type="radio" name="question2" value="A" onChange={e => handleAnswerChange('question2', e.target.value)} />
            Mycket
          </label>
          <label>
            <input type="radio" name="question2" value="B" onChange={e => handleAnswerChange('question2', e.target.value)} />
            Mellan
          </label>
          <label>
            <input type="radio" name="question2" value="C" onChange={e => handleAnswerChange('question2', e.target.value)} />
            Lite
          </label>
        </fieldset>
        <fieldset>
          <legend>Hur mycket är du hemma?</legend>
          <label>
            <input type="radio" name="question3" value="A" onChange={e => handleAnswerChange('question3', e.target.value)} />
            Mycket
          </label>
          <label>
            <input type="radio" name="question3" value="B" onChange={e => handleAnswerChange('question3', e.target.value)} />
            Mellan
          </label>
          <label>
            <input type="radio" name="question3" value="C" onChange={e => handleAnswerChange('question3', e.target.value)} />
            Lite
          </label>
        </fieldset>
        <fieldset>
          <legend>Hur mycket plats har du i hemmet?</legend>
          <label>
            <input type="radio" name="question4" value="A" onChange={e => handleAnswerChange('question4', e.target.value)} />
            Mycket
          </label>
          <label>
            <input type="radio" name="question4" value="B" onChange={e => handleAnswerChange('question4', e.target.value)} />
            Mellan
          </label>
          <label>
            <input type="radio" name="question4" value="C" onChange={e => handleAnswerChange('question4', e.target.value)} />
            Lite
          </label>
        </fieldset><fieldset>
          <legend>Hur mycket plats har du runt hemmet?</legend>
          <label>
            <input type="radio" name="question5" value="A" onChange={e => handleAnswerChange('question5', e.target.value)} />
            Mycket
          </label>
          <label>
            <input type="radio" name="question5" value="B" onChange={e => handleAnswerChange('question5', e.target.value)} />
            Mellan
          </label>
          <label>
            <input type="radio" name="question5" value="C" onChange={e => handleAnswerChange('question5', e.target.value)} />
            Lite
          </label>
        </fieldset>
        <fieldset>
          <legend>Hur mycket vill du att ditt djur ska uppskatta dig?</legend>
          <label>
            <input type="radio" name="question6" value="A" onChange={e => handleAnswerChange('question6', e.target.value)} />
            Mycket
          </label>
          <label>
            <input type="radio" name="question6" value="B" onChange={e => handleAnswerChange('question6', e.target.value)} />
            Mellan
          </label>
          <label>
            <input type="radio" name="question6" value="C" onChange={e => handleAnswerChange('question6', e.target.value)} />
            Lite
          </label>
        </fieldset><fieldset>
          <legend>Hur mycket plats har en vän som kan hjälpa dig ta hand om djuret när du är bortrest?</legend>
          <label>
            <input type="radio" name="question7" value="A" onChange={e => handleAnswerChange('question7', e.target.value)} />
            Mycket
          </label>
          <label>
            <input type="radio" name="question7" value="B" onChange={e => handleAnswerChange('question7', e.target.value)} />
            Mellan
          </label>
          <label>
            <input type="radio" name="question7" value="C" onChange={e => handleAnswerChange('question7', e.target.value)} />
            Lite
          </label>
        </fieldset>
        <button type="submit">Submit</button>
        <button type="reset">Reset</button>
      </form>
    </div>
  );
};

export default Questions;
