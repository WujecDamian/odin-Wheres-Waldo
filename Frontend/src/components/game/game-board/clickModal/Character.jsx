import { use, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./ClickModalList.module.css";

const Character = ({ character, closeBox, percentageX, percentageY }) => {
  const [error, setError] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const params = useParams();
  const gameLevel = params.gameLevel;
  //?TODO: Get coordinates where user clicked
  useEffect(() => {
    if (isCorrect) {
      console.log(isCorrect);
    }
  }, [isCorrect]);
  const handleCharacterClick = async (e) => {
    //logic to send POST request to backend to check if the user is correct
    console.log(percentageX, percentageY);

    const bodyData = {
      percentageX,
      percentageY,
      characterId: character.id,
    };
    try {
      const response = await fetch(
        `http://localhost:3000/api/logic/checkAnswer/level/${gameLevel}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(bodyData),
        },
      );

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      const data = await response.json();
      setIsCorrect(data.isCorrect);
    } catch (error) {
      setError(error.message || error);
    } finally {
    }
    /*  closeBox(); */
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
