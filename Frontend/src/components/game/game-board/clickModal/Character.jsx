import styles from "./ClickModalList.module.css";

const Character = ({ character, closeBox }) => {
  const handleCharacterClick = (e) => {
    closeBox();
  };
  return (
    <li
      className={styles.character__listElement}
      onClick={handleCharacterClick}
    >
      <img src={character.img_url} className={styles.character__image} />
      <span className={styles.character__name}>{character.character_name}</span>
    </li>
  );
};

export default Character;
