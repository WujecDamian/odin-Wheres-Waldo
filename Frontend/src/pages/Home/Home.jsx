import LevelBox from "../../components/game/levelbox/LevelBox";
import styles from "./Home.module.css";

function Home() {
  return (
    <>
      {/* Here you actually get all levels from db & use map function to show <LevelBox> for every level*/}
      <section className={styles.levels}>
        {/* here's just hard coded one */}
        <LevelBox imgSrc="https://vuss.io/wp-content/uploads/2025/01/Wheres-Waldo-Beach-Super-High-Resolution-scaled.jpg"></LevelBox>
        <LevelBox imgSrc="https://vuss.io/wp-content/uploads/2025/01/Wheres-Waldo-Beach-Super-High-Resolution-scaled.jpg"></LevelBox>
        <LevelBox imgSrc="https://vuss.io/wp-content/uploads/2025/01/Wheres-Waldo-Beach-Super-High-Resolution-scaled.jpg"></LevelBox>
        <LevelBox imgSrc="https://vuss.io/wp-content/uploads/2025/01/Wheres-Waldo-Beach-Super-High-Resolution-scaled.jpg"></LevelBox>
        <LevelBox imgSrc="https://vuss.io/wp-content/uploads/2025/01/Wheres-Waldo-Beach-Super-High-Resolution-scaled.jpg"></LevelBox>
      </section>
    </>
  );
}

export default Home;
