import { Link } from "react-router-dom";
import styles from "./LevelBox.module.css";

const LevelBox = ({ level }) => {
  return (
    <section className={styles.level__box}>
      <Link to={`level/${level.id}`}>
        <img
          src={level.img_url}
          alt="Where's Waldo level"
          className={styles.level__box__img}
        />
        <h2 className={styles.level__box__title}>{level.name}</h2>
        <h3 className={styles.level__box__difficulty}>{level.difficulty}</h3>
      </Link>
    </section>
  );
};

export default LevelBox;
