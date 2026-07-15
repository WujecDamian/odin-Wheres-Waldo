import Character from "./Character";
import styles from "./ClickModalList.module.css";

const ClickModalList = ({ box, closeBox, characterList }) => {
  return (
    <section
      className={styles.modal__list}
      style={{
        position: "fixed",
        left: `${box.x + 10}px`, // 10px offset so the cursor doesn't block the box
        top: `${box.y + 10}px`,
      }}
    >
      <button onClick={closeBox}>X</button>
      <ul>
        {characterList.map((character) => (
          <Character character={character} closeBox={closeBox}></Character>
        ))}
      </ul>
    </section>
  );
};

export default ClickModalList;
