import { useDispatch, useSelector } from 'react-redux'
import CartItem from './cart-item'
import { openModal } from '../features/modal-slice'

const CartContainer = () => {
  const { cartItems, total, amount } = useSelector((state) => state.cart)
  const dispatch = useDispatch()

  if (amount < 1)
    return (
      <section className="cart">
        <header>
          <h2>your cart</h2>
          <p className="empty-cart">is currently empty</p>
        </header>
      </section>
    )
  return (
    <section className="cart">
      <header>
        <h2>your cart</h2>
      </header>
      <div>
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>
      <footer>
        <div className="cart-total">
          <h4>
            total: <span>${total.toFixed(2)}</span>
          </h4>
        </div>
        <button className="btn clear-btn" onClick={() => dispatch(openModal())}>
          clear cart
        </button>
      </footer>
    </section>
  )
}
export default CartContainer
