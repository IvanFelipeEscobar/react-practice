import { redirect, useLoaderData } from 'react-router'
import { toast } from 'react-toastify'
import { customFetch } from '../utils'
import SectionTitle from '../components/section-title'
import OrdersList from '../components/oders-list'
import ComplexPagination from '../components/complex-pagination'

const ordersQuery = (params, user) => {
  return {
    queryKey: ['orders', user.name, params.page ? parseInt(params.page) : 1],
    queryFn: () =>
      customFetch('/orders', {
        params,
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }),
  }
}
export const loader =
  (store, queryClient) =>
  async ({ request }) => {
    const user = store.getState().userState.user

    if (!user) {
      toast.warn('You must be logged in to view orders')
      return redirect('/login')
    }
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ])

    try {
      const response = await queryClient.ensureQueryData(ordersQuery(params, user))
      return { orders: response.data.data, meta: response.data.meta }
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
const Orders = () => {
  const { meta } = useLoaderData()
  if (meta.pagination.total < 1)
    return <SectionTitle text="No orders to display" />

  return (
    <>
      <SectionTitle text="your orders" />
      <OrdersList />
      <ComplexPagination />
    </>
  )
}
export default Orders
