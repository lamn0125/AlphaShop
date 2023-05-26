import { createContext, useState, useContext, useEffect } from 'react';
import { CheckoutContext } from '../Context/CheckoutContext.js'
export const CartContext = createContext(null)


export const dummyData = [
  {
    id: '1',
    name: '貓咪罐罐',
    img: 'https://picsum.photos/300/300?text=1',
    price: 100,
    quantity: 2
  },
  {
    id: '2',
    name: '貓咪干干',
    img: 'https://picsum.photos/300/300?text=2',
    price: 200,
    quantity: 1
  }
]


export const CartContextProvider = ({children}) => {
  const [data, setData] = useState(dummyData)

  function handleMinusClick(dataId) {
    setData(
      data.map((item) => {
        if (item.id === item && item.quantity > 0) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      }).filter((item) => item.quantity > 0)
    );
  }
function handleAddClick(dataId) {
    setData(
      data.map((item) => {
        if (item.id === dataId) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      })
    );
  }

  const { setCheckoutInput } = useContext(CheckoutContext)
  let  totalAmount = 0;
  data.forEach((item) => (totalAmount += item.price * item.quantity));

  useEffect(() => {
    setCheckoutInput((prev) => ({
      ...prev,
      totalAmount: totalAmount,
    }));
  }, [totalAmount]);

  const value = {
    data,
    totalAmount,
    handleMinusClick,
    handleAddClick,
  };

  return (
    <CartContext.Provider value={value}> {children} </CartContext.Provider>
  );
};

