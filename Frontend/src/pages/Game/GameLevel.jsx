import styles from "./GameLevel.module.css";
import GameBoard from "../../components/game/game-board/GameBoard";

const GameLevel = (props) => {
  /* From params get level info from db and pass it to gameboard as props */
  const gameObj = {
    img_src:
      "https://vuss.io/wp-content/uploads/2025/01/Wheres-Waldo-Beach-Super-High-Resolution-scaled.jpg",
  };
  const characterList = [
    {
      id: 1,
      level_id: 2,
      character_name: "Waldo",
      img_url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVgH6Z84jR4HnWfFdWLGJWRFUeKtX1pHMDVU_12GUrbh-ceiHznlcp6Ysi&s=10",
      x1: 60.5,
      x2: 63.0,
      y1: 36.5,
      y2: 41.5,
    },
    {
      id: 2,
      level_id: 2,
      character_name: "Wilma",
      img_url:
        "https://static.wikia.nocookie.net/waldo/images/f/fe/Character_-_Wenda.png/revision/latest/smart/width/386/height/259?cb=20251124164901",
      x1: 76.5,
      x2: 77.8,
      y1: 39.5,
      y2: 42.5,
    },
  ];
  return (
    <>
      <p className={styles.small__screen__notice}>
        *Swipe left or right to see the full image.
      </p>
      <GameBoard gameObj={gameObj} characterList={characterList}></GameBoard>
    </>
  );
};

export default GameLevel;
