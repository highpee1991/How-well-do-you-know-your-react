import React from "react";

function StartScreen({ numQuestion, dispatch }) {
  return (
    <div className='start'>
      <h2>Welcome to the React quiz</h2>
      <h3>{numQuestion} to test your React mastery </h3>
      <button
        className='btn btn-iu'
        onClick={() => dispatch({ type: "start" })}
      >
        Let's Start
      </button>
    </div>
  );
}

export default StartScreen;
