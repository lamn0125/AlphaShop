import { createContext, useState } from 'react';
export const CheckoutContext = createContext();


export const CheckoutContextProvider = ({ children }) => {
  const [checkoutInput, setCheckoutInput] = useState({
    cardOwner: null,
    cardNumber: null,
    cardExp: null,
    cardCcv: null,
    totalAmount: null,
  })

const onHandleInput = (e) => {
  const { name, value } = e.target
  setCheckoutInput((prev) => ({
    ...prev,
   [name]: value,
  })
)}

  const value = {
    checkoutInput,
    setCheckoutInput,
    onHandleInput,
  }

  return (
    <CheckoutContext.Provider value={value}> {children} </CheckoutContext.Provider>
  )
}