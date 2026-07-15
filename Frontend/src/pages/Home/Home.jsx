import { useEffect, useState } from "react";
import LevelBox from "../../components/game/levelbox/LevelBox";
import styles from "./Home.module.css";

function Home() {
  const [levels, setLevels] = useState([]);

  useEffect(() => {
    const fetchLevels = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/getAllLevels");

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();

        console.log(result);

        setLevels(result.allLevels);
      } catch (err) {
        console.error("Fetch failed", err);
      }
    };
    fetchLevels();
  }, []);
  console.log(levels);
  return (
    <>
      <section className={styles.levels}>
        {/* here's just hard coded one */}
        {levels.map((level) => (
          <LevelBox level={level}></LevelBox>
        ))}
      </section>
    </>
  );
}

export default Home;
