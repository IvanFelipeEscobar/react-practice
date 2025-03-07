import { Link, useLoaderData } from 'react-router'
import { customFetch, formatPrice, generateAmountOptions } from '../utils'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from '../features/cart-slice'

export const loader =
  (queryClient) =>
  async ({ params }) => {
    const { data } = await queryClient.ensureQueryData({
      queryKey: ['singlePrroduct', params.id],
      queryFn: () => customFetch(`/products/${params.id}`),
    })

    return { product: data.data }
  }

const SingleProduct = () => {
  const { product } = useLoaderData()
  const { image, title, price, description, colors, company } =
    product.attributes
  const dollarPrice = formatPrice(price)
  const [productColor, setProductColor] = useState(colors[0])
  const [amount, setAmount] = useState(1)

  const dispatch = useDispatch()

  const cartProduct = {
    cartId: product.id + productColor,
    productId: product.id,
    image,
    title,
    price,
    amount,
    productColor,
    company,
  }

  const addToCart = () => {
    dispatch(addItem({ product: cartProduct }))
  }

  return (
    <section>
      <div className="text-md breadcrumbs">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </div>

      <div className="mt-6 grid gap-y-8 md:grid-cols-2 md:gap-x-16">
        <img
          src={image}
          alt={title}
          className="w-96 h-96 object-cover rounded-lg md:w-full"
        />
        <div>
          <h1 className="capitalize text-3xl font-bold">{title}</h1>
          <h4 className="text-xl text-neutral-content font-bold mt-2">
            {company}
          </h4>
          <p className="mt-3 text-xl">{dollarPrice}</p>
          <p className="mt-6 leading-8">{description}</p>

          <div className="mt-6">
            <h4 className="text-md font-medium tracking-wider capitalize">
              colors
            </h4>
            <div className="mt-2">
              {colors.map((color) => (
                <button
                  key={color}
                  type="button"
                  className={`badge w-6 h-6 mr-2 ${
                    color === productColor && 'border-2 border-info'
                  }`}
                  style={{ backgroundColor: color }}
                  onClick={() => setProductColor(color)}
                />
              ))}
            </div>
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label" htmlFor="amount">
              <h4 className="text-md font-medium tracking-wider capitalize my-2">
                amount
              </h4>
            </label>
            <select
              className="select select-secondary select-bordered select-md"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(parseInt(e.target.value))}
            >
              {generateAmountOptions(15)}
            </select>
          </div>
          <div className="mt-10 ">
            <button className="btn btn-secondary btn-md" onClick={addToCart}>
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
export default SingleProduct
