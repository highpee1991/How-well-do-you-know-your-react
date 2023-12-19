import React from "react";

const FinishedScreen = ({ points, maxPoints, highScore, dispatch }) => {
  const percentage = (points / maxPoints) * 100;
  let emoji;

  if (percentage === 100) emoji = "🏅";
  if (percentage >= 80 && percentage < 100) emoji = "🎉";
  if (percentage >= 50 && percentage < 800) emoji = "😊";
  if (percentage > 0 && percentage < 50) emoji = "🤔";
  if (percentage === 0) emoji = "👎";

  return (
    <>
      <div className='result'>
        <p>
          <span>{emoji}</span> You Score {points} out of {maxPoints} points (
          {Math.ceil(percentage)}%)
        </p>
      </div>
      <p className='highscore'>(Highscore: {highScore} points)</p>
      <button
        className='btn btn-iu'
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz
      </button>
    </>
  );
};

export default FinishedScreen;
