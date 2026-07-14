import { useState, useRef, useEffect } from "react";
import styles from "./GameBoard.module.css";

const GameBoard = (props) => {
  const [clientX, setClientX] = useState(0);
  const [clientY, setClientY] = useState(0);
  const refElement = useRef(null);
  const [refX, setRefX] = useState(0);
  const [refY, setRefY] = useState(0);
  const [imgX, setImgX] = useState(0);
  const [imgY, setImgY] = useState(0);
  const [percentageX, setPercentageX] = useState(0);
  const [percentageY, setPercentageY] = useState(0);

  useEffect(() => {
    const width = refElement.current.offsetWidth;
    const height = refElement.current.offsetHeight;

    setImgX(width);
    setImgY(height);
  }, []);

  useEffect(() => {
    setRefX(imgX);
    setRefY(imgY);
  }, [imgX, imgY]);
  //get actual img width and height (updates when page is resized)
  const handleResize = (e) => {
    window.addEventListener("resize", () => {
      setImgX(refElement.current.offsetWidth);
      setImgY(refElement.current.offsetHeight);
    });
  };
  handleResize();

  const mouseMoveHandler = (e) => {
    // .getBoundingClientRect() helps track coordinates relative to the board itself
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setClientX(Math.round(x));
    setClientY(Math.round(y));

    const clientRefX = Math.round((x / refX) * 100 * 100) / 100;
    const clientRefY = Math.round((y / refY) * 100 * 100) / 100;
    setPercentageX(clientRefX);
    setPercentageY(clientRefY);
  };

  return (
    <>
      <section className={styles.game__board}>
        <img
          src={props.imgSrc}
          alt=""
          className={styles.board__image}
          draggable="false"
          onMouseMove={mouseMoveHandler}
          ref={refElement}
        />
      </section>
      <p className={styles.debug}>
        Image X: {clientX} | Image Y: {clientY}
        <br></br>
        Image Width: {refX} | Image Height: {refY}
        <br></br>[ Relative % ] X: {percentageX} | Y: {percentageY}
      </p>
    </>
  );
};

export default GameBoard;
