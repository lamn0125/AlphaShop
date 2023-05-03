import styles from "./styles/Cart.module.css";
import CartItem from "./CartItem";

const dummyData = [
  {
    id: "1",
    name: "貓咪罐罐",
    img: "https://picsum.photos/300/300?text=1",
    price: 100,
    quantity: 2,
  },
  {
    id: "2",
    name: "貓咪干干",
    img: "https://picsum.photos/300/300?text=2",
    price: 200,
    quantity: 1,
  },
];

export default function Cart() {
  return (
    <div>
      <section className={styles.cartContainer}>
        <h3 className={styles.cartTitle}>購物籃</h3>
        <section className={styles.productList} data-total-price="0">
          {dummyData.map((item) => (
            <CartItem {...item} key={item.id} />
          ))}
        </section>

        <section className={styles.cartInfo}>
          <div className={styles.text}>運費</div>
          <div className={styles.cartPrice}>免費</div>
        </section>
        <section className={styles.cartInfo}>
          <div className={styles.text}>小計</div>
          <div className={styles.cartPrice}>${}</div>
        </section>
      </section>
    </div>
  );
}
