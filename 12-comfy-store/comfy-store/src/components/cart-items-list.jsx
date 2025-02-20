import { useSelector } from 'react-redux'
import CartItem from './cart-items'

const CartItemsList = () => {
  const cartItems  = useSelector((state) => state.cartState.cartItems)
  return (
    <>
      {cartItems.map((item) => (
        <CartItem key={item.cartId} cartItem={item} />
      ))}
    </>
  )
}
export default CartItemsList
