import { useEffect, useState } from "react";
import { useStopwatch } from "react-timer-hook";
import styles from "./ScoreBoard.module.css";

const ScoreBoard = ({ myCharactersArray }) => {
  const [correctAnswers, setCorrectAnswers] = useState(0);

  const { totalSeconds, seconds, minutes, isRunning, start, pause } =
    useStopwatch({ autoStart: true, interval: 200 });

  const handleGameEnd = () => {
    console.log("game ended");
    pause();
  };

  useEffect(() => {
    if (myCharactersArray.length === 0) {
      return;
    }
    const handleAnswerCount = async () => {
      let correctCount = 0;
      myCharactersArray.forEach((character) => {
        if (character.isFound === true) {
          correctCount++;
        }
      });
      setCorrectAnswers(correctCount);
      console.log(correctCount);
      console.log(myCharactersArray.length);
      if (correctCount === myCharactersArray.length) {
        handleGameEnd();
      }
    };
    handleAnswerCount();
  }, [myCharactersArray]);
  return (
    <section className={styles.scoreboard}>
      <div className={styles.scoreboard__answers}>
        <span>Answers</span>
        <span>
          {correctAnswers}/{myCharactersArray.length}
        </span>
      </div>
      <div className={styles.scoreboard__time}>
        <span>Time</span>
        <div>
          <span>{minutes}</span>:<span>{seconds}</span>
        </div>
      </div>
    </section>
  );
};

export default ScoreBoard;
