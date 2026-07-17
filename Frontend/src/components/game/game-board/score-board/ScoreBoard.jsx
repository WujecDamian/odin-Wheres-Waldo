import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useStopwatch } from "react-timer-hook";
import styles from "./ScoreBoard.module.css";

const ScoreBoard = ({ myCharactersArray }) => {
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [leaderboard, setLeaderboard] = useState([]);
  const params = useParams();
  const gameLevel = params.gameLevel;
  const { totalSeconds, seconds, minutes, isRunning, start, pause } =
    useStopwatch({ autoStart: true, interval: 200 });

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/level/getLevelLeaderboard/${gameLevel}`,
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        setLeaderboard(result.leaderboard);
      } catch (err) {
        console.error("Fetch failed", err);
      }
    };
    fetchLeaderboard();
  }, []);
  const handleGameEnd = async () => {
    console.log("game ended");
    pause();
    //     ! prompt user for name & wait for it !
    const username = "test";
    if (
      leaderboard.length < 10 ||
      totalSeconds < leaderboard[10].completion_time
    ) {
      const ScoreData = {
        username,
        completion_time: totalSeconds,
      };
      if (leaderboard.length >= 10) {
        //delete 10th record
        const tenthRecordId = leaderboard[10].id;
        const data = {
          scoreId: tenthRecordId,
        };
        try {
          const response = await fetch(
            `http://localhost:3000/api/logic/leaderboard/level/${gameLevel}`,
            {
              method: "DELETE",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(data),
            },
          );

          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          const result = await response.json();
        } catch (err) {
          console.error("Fetch failed", err);
        }
      }
      console.log("new record");
      try {
        const response = await fetch(
          `http://localhost:3000/api/logic/leaderboard/level/${gameLevel}`,
          {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(ScoreData),
          },
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
      } catch (err) {
        console.error("Fetch failed", err);
      }
    }
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
