import { useDispatch } from 'react-redux'
import { formatPrice, generateAmountOptions } from '../utils'
import { editItem, removeItem } from '../features/cart-slice'

const CartItem = ({ cartItem }) => {
  const { cartId, title, price, image, amount, company, productColor } =
    cartItem
  const dispatch = useDispatch()

  const removeItemFromTheCart = () => {
    dispatch(removeItem({ cartId }))
  }
  const handleAmount = (e) => {
    dispatch(editItem({ cartId, amount: parseInt(e.target.value) }))
  }
  return (
    <article className="mb-12 flex flex-col gap-y-4 sm:flex-row flex-wrap border-b border-base-300 pb-6 last:border-b-0">
      <img
        src={image}
        alt={title}
        className="h-24 w-24 rounded-lg sm:h-32 sm:w-32 object-cover"
      />
      <div className="sm:ml-16 sm:w-48">
        <h3 className="capitalize font-medium">{title}</h3>
        <h4 className="mt-2 capitalize text-sm text-neutral-content">
          {company}
        </h4>
        <p className="mt-4 text-sm capitalize flex items-center gap-x-2">
          color :
          <span
            className="badge badge-sm"
            style={{ backgroundColor: productColor }}
          ></span>
        </p>
      </div>
      <div className="sm:ml-12">
        <fieldset className="max-w-xs">
          <legend className="fieldset-legend p-0">Amount</legend>
          <select
            name="amount"
            id="amount"
            className="mt-2 select select-base select-bordered selext-xs"
            value={amount}
            onChange={handleAmount}
          >
            {generateAmountOptions(amount + 5)}
          </select>
        </fieldset>
        <button
          className="mt-2 link link-primary link-hover text-sm"
          type="button"
          onClick={removeItemFromTheCart}
        >
          remove
        </button>
      </div>
      <p className="font-medium sm:ml-auto">{formatPrice(price)}</p>
    </article>
  )
}
export default CartItem
