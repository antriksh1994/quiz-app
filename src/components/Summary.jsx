import quizComleteImg from "../assets/quiz-complete.png";
import questions from "../../questions";
export default function Summary({ userAnswers }) {
  const skippedAnswers = userAnswers.filter(ans => ans === null)
  const corretAnswers = userAnswers.filter((ans, index) => ans === questions[index].answers[0])
  const skippedAnswersShare = Math.round(skippedAnswers.length / userAnswers.length ) * 100
  const corretAnswersShare = Math.round(corretAnswers.length / userAnswers.length ) * 100
  const wrongAnswersShare = 100 - corretAnswersShare - skippedAnswersShare

  return (
    <>
      <div id="summary">
        <img src={quizComleteImg} alt="" />
        <h2>Quiz completed</h2>
        <div id="summary-stats">
          <p>
            <span className="number">{skippedAnswersShare}%</span>
            <span className="text">skipped</span>
          </p>
          <p>
            <span className="number">{wrongAnswersShare}%</span>
            <span className="text">incorrect answers</span>
          </p>
          <p>
            <span className="number">{corretAnswersShare}%</span>
            <span className="text">correct answers</span>
          </p>
        </div>
        <ol>
          {userAnswers.map((ans, index) => {
            let cssClass = 'user-answer'
            if (ans === null) {
                cssClass+=' skipped'
            } else if (ans === questions[index].answers[0]) {
                cssClass += ' correct'
            } else {
                cssClass += ' wrong'
            }
            return (
              <li key={ans}>
                <h3>{index + 1}</h3>
                <p className="question">{questions[index].text}</p>
                <p className={cssClass}>{ans ?? 'Skipped'}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </>
  );
}
