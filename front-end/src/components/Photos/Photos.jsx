import { useState } from "react";
import { FlexContainer } from "../FlexContainer/FlexContainer";
import styles from "./Photos.module.css";

export function Photos({ product }) {
  const [currentPhoto, setCurrentPhoto] = useState(product.photos[0]);
  return (
    <FlexContainer>
      <div className={styles.thumbnails}>
        {product.photos.map((photo) => {
          return (
            <img
              key={photo}
              src={photo}
              onClick={() => setCurrentPhoto(photo)}
              className={currentPhoto === photo ? styles.active : ""}
            />
          );
        })}
      </div>
      <img className={styles.mainPhoto} src={currentPhoto} />
    </FlexContainer>
  );
}
