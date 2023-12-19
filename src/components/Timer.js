import React, { useEffect } from "react";

const Timer = ({ secondsRemaining, dispatch }) => {
  const min = Math.floor(secondsRemaining / 60);
  const sec = Math.floor(secondsRemaining % 60);

  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: "timer" });
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, [dispatch]);

  return (
    <div className='timer'>
      {min < 10 && "0"}
      {min}:{sec < 10 && "0"}
      {sec}
    </div>
  );
};

export default Timer;
