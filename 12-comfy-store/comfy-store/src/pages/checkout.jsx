import { useSelector } from 'react-redux'
import SectionTitle from '../components/section-title'
import CheckoutForm from '../components/checkout-form'
import CartTotals from '../components/cart-totals'
import { toast } from 'react-toastify'
import { redirect } from 'react-router'


export const loader = (store) => () => {
  const user = store.getState().userState.user
  if (!user) {
    toast.warn('You must be logged in to checkout')
    return redirect('/login')
  }
  return null
}

const Checkout = () => {
  const cartTotal = useSelector((state) => state.cartState.cartTotal)
  if (cartTotal.length === 0) {
    return <SectionTitle text="Your cart is empty" />
  }
  return (
    <>
      <SectionTitle text="Place your order" />
      <div className="mt-8 grid gap-8  md:grid-cols-2 items-start">
        <CheckoutForm />
        <CartTotals />
      </div>
    </>
  )
}
export default Checkout
