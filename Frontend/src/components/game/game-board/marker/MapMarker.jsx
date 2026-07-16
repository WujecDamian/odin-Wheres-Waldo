import styles from "./MapMarker.module.css";

const MapMarker = ({ x, imgX, y, imgY }) => {
  console.log(x);
  console.log(imgX);
  const calculatedX = Math.round((imgX / 1000) * (x * 10) * 100) / 100;
  const calculatedY = Math.round((imgY / 1000) * (y * 10) * 100) / 100;
  console.log(calculatedX, calculatedY);
  return (
    <div
      className={styles.map__marker}
      style={{
        position: "absolute",
        left: `${calculatedX - 10}px`, // 10px offset so the cursor doesn't block the box
        top: `${calculatedY - 10}px`,
      }}
    ></div>
  );
};

export default MapMarker;
