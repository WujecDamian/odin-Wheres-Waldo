import styles from "./GameBoard.module.css";

const GameBoard = (props) => {
  return (
    <>
      <section className={styles.game__board}>
        <img src={props.imgSrc} alt="" className={styles.board__image} />
      </section>
    </>
  );
};

export default GameBoard;
