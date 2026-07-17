import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useStopwatch } from "react-timer-hook";
import styles from "./ScoreBoard.module.css";

const ScoreBoard = ({ myCharactersArray, onRecordAdded }) => {
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
    pause();
    //     ! prompt user for name & wait for it !
    const username = await prompt(
      "Congrats! You’ve secured a spot on the leaderboard! 🎉 What name would you like us to display?!",
    );
    if (
      leaderboard.length < 10 ||
      totalSeconds < leaderboard[9].completion_time
    ) {
      const ScoreData = {
        username,
        completion_time: totalSeconds,
      };
      if (leaderboard.length >= 10) {
        //delete 10th record
        const tenthRecordId = leaderboard[9].id;
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
    //function call to tell Leaderboard component to refetch
    onRecordAdded();
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
