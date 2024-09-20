import { useEffect, useState } from "react";

export default function QuestionTimer({ timer, onTimeout, mode }) {
  const [remainingTime, setRemainingTime] = useState(timer);

  useEffect(() => {
    const timerOut = setTimeout(() => {
      onTimeout();
    }, timer);
    return () => {
      clearTimeout(timerOut);
    };
  }, [onTimeout, timer]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 100);
    }, 100);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <>
      <progress
        id="question-time"
        value={remainingTime}
        max={timer}
        className={mode}
      />
    </>
  );
}
