import { useCallback, useState } from "react";
import questions from "../../questions";
import Question from "./Question";
import Summary from "./Summary";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length
  const quizIsComplete = activeQuestionIndex === questions.length;

  const handleSelectedAnswer = useCallback(
    function handleSelectedAnswer(selectedAnswer) {
      setUserAnswers((prevAns) => {
        return [...prevAns, selectedAnswer];
      });
    },
    []
  );

  const handleSkipAnswer = useCallback(() => {
    handleSelectedAnswer(null);
  }, [handleSelectedAnswer]);

  if (quizIsComplete) {
    return <Summary userAnswers={userAnswers} ></Summary>
  }

  return (
    <div id="quiz">
      <div id="question">
        <Question
            questionIndex ={activeQuestionIndex}
            key={activeQuestionIndex}
            onSelectAnswer={handleSelectedAnswer}
            onSkipAnswer={handleSkipAnswer}>
        </Question>
      </div>
    </div>
  );
}
