import styles from "./GameLevel.module.css";
import GameBoard from "../../components/game/game-board/GameBoard";

const GameLevel = (props) => {
  /* From params get level info from db and pass it to gameboard as props */
  return (
    <>
      <p className={styles.small__screen__notice}>
        *Swipe left or right to see the full image.
      </p>
      <GameBoard imgSrc="https://vuss.io/wp-content/uploads/2025/01/Wheres-Waldo-Beach-Super-High-Resolution-scaled.jpg"></GameBoard>
    </>
  );
};

export default GameLevel;
