import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./GameLevel.module.css";
import GameBoard from "../../components/game/game-board/GameBoard";

const GameLevel = (props) => {
  const [levelObj, setLevelObj] = useState([]);

  const params = useParams();
  const gameLevel = params.gameLevel;

  useEffect(() => {
    const fetchLevel = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/getLevel/${gameLevel}`,
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        setLevelObj(result.level);
        set;
      } catch (err) {
        console.error("Fetch failed", err);
      }
    };
    fetchLevel();
  }, []);
  /* From params get level info from db and pass it to gameboard as props */
  console.log(levelObj);
  return (
    <>
      <p className={styles.small__screen__notice}>
        *Swipe left or right to see the full image.
      </p>
      <GameBoard levelObj={levelObj}></GameBoard>
    </>
  );
};

export default GameLevel;
