import styles from "./MapMarker.module.css";

const MapMarker = ({ x, imgX, y, imgY }) => {
  const calculatedX = Math.round((imgX / 1000) * (x * 10) * 100) / 100;
  const calculatedY = Math.round((imgY / 1000) * (y * 10) * 100) / 100;
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
