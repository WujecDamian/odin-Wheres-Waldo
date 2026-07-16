import { useEffect, useState } from "react";
import styles from "./ScoreBoard.module.css";

const ScoreBoard = ({ myCharactersArray }) => {
  const [correctAnswers, setCorrectAnswers] = useState(0);

  console.log(myCharactersArray.length);
  useEffect(() => {
    let correctCount = 0;
    myCharactersArray.forEach((character) => {
      if (character.isFound === true) {
        correctCount++;
      }
    });
    setCorrectAnswers(correctCount);
  }, myCharactersArray);
  return (
    <section className={styles.scoreboard}>
      <div className="scoreboard__answers">
        {correctAnswers}/{myCharactersArray.length}
      </div>
      <div className="scoreboard__time"></div>
    </section>
  );
};

export default ScoreBoard;
