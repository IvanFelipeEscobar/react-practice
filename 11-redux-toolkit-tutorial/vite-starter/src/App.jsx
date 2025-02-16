import { useDispatch, useSelector } from 'react-redux'
import CartContainer from './components/cart-container'
import Navbar from './components/navbar'
import { useEffect } from 'react'
import { calculateTotals, getCartItems } from './features/cart-slice'
import Modal from './components/modal'

function App() {
  
  const { cartItems, isLoading } = useSelector((state) => state.cart)
  const { isOpen } = useSelector((state) => state.modal)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(calculateTotals())
  }, [cartItems])

  useEffect(() => {
    dispatch(getCartItems())
  }, [])

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    )
  }
  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  )
}
export default App
