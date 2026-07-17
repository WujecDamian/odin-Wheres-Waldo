import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import styles from "./LeaderBoard.module.css";

const Leaderboard = ({ refreshTrigger }) => {
  const [leaderboard, setLeaderboard] = useState([]);
  const params = useParams();
  const gameLevel = params.gameLevel;

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
  }, [refreshTrigger]);
  console.log("Leaderboard", leaderboard);

  function fmtMSS(s) {
    return (s - (s %= 60)) / 60 + (9 < s ? ":" : ":0") + s;
  }

  return (
    <section className={styles.leaderboard}>
      <h4>Leaderboard</h4>
      <table>
        <tr>
          <th>Username</th>
          <th>Time</th>
        </tr>

        {leaderboard.map((user) => (
          <tr>
            <td className={styles.row__username}>{user.username}</td>
            <td className={styles.row__time}>{fmtMSS(user.completion_time)}</td>
          </tr>
        ))}
      </table>
    </section>
  );
};

export default Leaderboard;
