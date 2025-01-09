import { Link } from "react-router-dom";
import BAG_ICON from "../../assets/bag.svg";
import HEART from "../../assets/heart.svg";
import styles from "./IconMenu.module.css";

export function IconMenu() {
  const cartItems = 2;
  return (
    <ul className={styles.iconMenu}>
      <li>
        <Link to="/ulubione">
          <img src={HEART} alt="" />
        </Link>
      </li>
      <li>
        <Link to="/koszyk">
          <img src={BAG_ICON} alt="" />
          <div className={styles.numberOfProducts}>{cartItems}</div>
        </Link>
      </li>
    </ul>
  );
}
