import React, { useEffect, useState } from 'react';

const Result = ({ answers, onReset }) => {
  const [mostSelected, setMostSelected] = useState('');

  const [animalResult, setAnimalResult] = useState('Hund');

  useEffect(() => {
    // Calculate the most selected answer
    const count = {};
    Object.values(answers).forEach(answer => {
      count[answer] = (count[answer] || 0) + 1;
    });
    const mostSelectedAnswer = Object.keys(count).reduce((a, b) => count[a] > count[b] ? a : b, '');
    setMostSelected(mostSelectedAnswer);
    if (mostSelectedAnswer == 'B' ) {
      setAnimalResult('Katt');
    }
    if (mostSelectedAnswer == 'C') {
      setAnimalResult('Köttätandeväxt');
    }
  }, [answers]);

  const handleReset = () => {
    onReset();
  };

  return (
    <div>
      <h2>Result</h2>
      <p>The most selected answer is: {animalResult}</p>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Result;
