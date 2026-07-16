import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import styles from "./GameBoard.module.css";
import ClickModalList from "./clickModal/ClickModalList";

const GameBoard = ({ levelObj }) => {
  const [clientX, setClientX] = useState(0);
  const [clientY, setClientY] = useState(0);
  const refElement = useRef(null);
  const [refX, setRefX] = useState(0);
  const [refY, setRefY] = useState(0);
  const [imgX, setImgX] = useState(0);
  const [imgY, setImgY] = useState(0);
  const [percentageX, setPercentageX] = useState(0);
  const [percentageY, setPercentageY] = useState(0);
  const [box, setBox] = useState({ isOpen: false, x: 0, y: 0 });

  // Get Image width and height
  const handleImageLoad = () => {
    const width = refElement.current.offsetWidth;
    const height = refElement.current.clientHeight;
    setImgX(width);
    setImgY(height);
  };
  // Set current image width and height if those values changed (window resized)
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

  // Getting X, Y where mouse is and % values also
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

  // Modal / Box on click containing list of characters to pick from
  const handleAreaClick = (e) => {
    console.log(clientX, clientY); //it's where user clicked on image

    const modalX = e.pageX;
    const modalY = e.pageY;
    setBox({
      isOpen: true,
      x: modalX,
      y: modalY,
    });
  };
  const closeBox = (e) => {
    setBox({ isOpen: false, x: 0, y: 0 });
  };
  return (
    <>
      <section className={styles.game__board__wrapper}>
        <section className={styles.game__board}>
          <img
            src={levelObj.img_url}
            alt=""
            className={styles.board__image}
            draggable="false"
            onMouseMove={mouseMoveHandler}
            onClick={handleAreaClick}
            onLoad={handleImageLoad}
            ref={refElement}
          />
          {box.isOpen &&
            createPortal(
              <ClickModalList
                box={box}
                closeBox={closeBox}
                characterList={levelObj.characters}
                percentageX={percentageX}
                percentageY={percentageY}
              ></ClickModalList>,
              document.body,
            )}
        </section>
      </section>

      <p className={styles.debug}>
        Image X: {clientX} | Image Y: {clientY}
        <br></br>
        Image Width: {imgX} | Image Height: {imgY}
        <br></br>[ Relative % ] X: {percentageX} | Y: {percentageY}
      </p>
    </>
  );
};

export default GameBoard;
