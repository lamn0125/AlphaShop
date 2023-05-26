import styles from './styles/Cart.module.css'
import minusIcon from 'image/minusIcon.svg'
import plusIcon from 'image/plusIcon.svg'

export default function CartItem({
  id,
  name,
  img,
  price,
  quantity,
  handleMinusClick,
  handleAddClick
}) {
  return (
    <div
      className={styles.productContainer}
      data-count='{count}'
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
              alt=''
              onClick={() => handleMinusClick(id)}
            />
            <span className={styles.productCount}>{quantity}</span>
            <img
              className={styles.plusIcon}
              src={plusIcon}
              alt=''
              onClick={() => handleAddClick(id)}
            />
          </div>
        </div>
        <div className={styles.price}>{price * quantity}</div>
      </div>
    </div>
  )
}
