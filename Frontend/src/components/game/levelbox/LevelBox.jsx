import { Link } from "react-router-dom";
import styles from "./LevelBox.module.css";

const LevelBox = (props) => {
  return (
    <section className={styles.level__box}>
      <Link to="level/1">
        <img
          src={props.imgSrc}
          alt="Where's Waldo level"
          className={styles.level__box__img}
        />
        <h2 className={styles.level__box__title}>Beach</h2>
        <h3 className={styles.level__box__difficulty}>Easy</h3>
      </Link>
    </section>
  );
};

export default LevelBox;
