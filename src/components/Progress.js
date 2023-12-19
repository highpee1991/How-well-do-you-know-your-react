import React from "react";

const Progress = ({ answer, index, numquestions, points, maxPoints }) => {
  return (
    <header className='progress'>
      <progress max={numquestions} value={index + Number(answer !== null)} />
      <p>
        Question <strong>{index + 1}</strong>/{numquestions}
      </p>
      <p>
        Points <strong>{points}</strong>/{maxPoints}
      </p>
    </header>
  );
};

export default Progress;
