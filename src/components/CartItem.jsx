import styles from "./styles/Cart.module.css";
import minusIcon from "image/minusIcon.svg";
import plusIcon from "image/plusIcon.svg";
import { useState } from "react";

export default function CartItem({ id, name, img, price, quantity }) {
  const [count, setCount] = useState(1);
  function handleAddClick() {
    setCount(count + 1);
  }
  function handleMinusClick() {
    if (count > 0) {
      setCount(count - 1);
    } else return;
  }

  return (
    <div
      className={styles.productContainer}
      data-count="{count}"
      data-price={price}
    >
      <img className={styles.imageContainer} src={img} alt={name} />
      <div className={styles.productInfo}>
        <div className={styles.productName}>{name}</div>
        <div className={styles.productControlContainer}>
          <div className={styles.productControl}>
            <img
              className={styles.minusIcon}
              src={minusIcon}
              alt=""
              onClick={handleMinusClick}
            />
            <span className={styles.productCount}>{count}</span>
            <img
              className={styles.plusIcon}
              src={plusIcon}
              alt=""
              onClick={handleAddClick}
            />
          </div>
        </div>
        <div className={styles.price}>{price * count}</div>
      </div>
    </div>
  );
}
