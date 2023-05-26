import styles from './styles/Cart.module.css'
import CartItem from './CartItem'
import { useContext } from 'react'
import { CartContext } from '../Context/CartContext.js'

export default function Cart() {
  const { data, totalAmount, handleAddClick,  handleMinusClick} = useContext(CartContext)
  return (
    <div>
      <section className={styles.cartContainer}>
        <h3 className={styles.cartTitle}>購物籃</h3>
        <section className={styles.productList} data-total-price='{sum}'>
          {data.map((item) => (
            <CartItem {...item} key={item.id} handleMinusClick={handleMinusClick} handleAddClick={handleAddClick}/>
          ))}
        </section>
        <section className={styles.cartInfo}>
          <div className={styles.text}>運費</div>
          <div className={styles.cartPrice}>免費</div>
        </section>
        <section className={styles.cartInfo}>
          <div className={styles.text}>小計</div>
          <div className={styles.cartPrice}>$ {totalAmount}</div>
        </section>
      </section>
    </div>
  )
}
