import { Form, redirect } from 'react-router'
import FormInput from './form-input'
import SubmitBtn from './submit-btn'
import { customFetch, formatPrice } from '../utils'
import { toast } from 'react-toastify'
import { clearCart } from '../features/cart-slice'

export const action =
  (store, queryClient) =>
  async ({ request }) => {
    const formData = await request.formData()
    const { name, address } = Object.fromEntries(formData)
    const user = store.getState().userState.user
    const { cartItems, orderTotal, numItemsInCart } = store.getState().cartState
    const info = {
      name,
      address,
      chargeTotal: orderTotal,
      orderTotal: formatPrice(orderTotal),
      cartItems,
      numItemsInCart,
    }
    try {
      await customFetch.post(
        '/orders',
        { data: info },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      )
      queryClient.removeQueries(['orders'])
      store.dispatch(clearCart())
      toast.success('order placed successfully')
      return redirect('/orders')
    } catch (error) {
      const errorMessage =
        error?.response?.data?.error?.message ||
        'there was an error placing your order'
      toast.error(errorMessage)
      if (error?.response?.status === 401 || error?.response?.status === 403)
        return redirect('/login')
      return null
    }
  }

const CheckoutForm = () => {
  return (
    <Form method="POST" className="flex flex-col gap-y-4">
      <h4 className="font-medium text-xl capitalize">shipping information</h4>
      <FormInput label="first name" name="name" type="text" size="w-full" />
      <FormInput label="address" name="address" type="text" size="w-full" />
      <div className="mt-4">
        <SubmitBtn text="Place Order" />
      </div>
    </Form>
  )
}
export default CheckoutForm
