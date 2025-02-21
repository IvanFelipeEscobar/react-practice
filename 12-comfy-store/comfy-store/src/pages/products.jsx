import Filters from '../components/filters'
import Pagination from '../components/pagination'
import ProductsContainer from '../components/products-container'
import { customFetch } from '../utils'

export const loader =
  (queryClient) =>
  async ({ request }) => {
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ])

    const { search, category, company, sort, price, shipping, page } = params
    const { data } = await queryClient.ensureQueryData({
      queryKey: [
        'products',
        search ?? '',
        category ?? 'all',
        company ?? 'all',
        sort ?? 'a-z',
        price ?? 100000,
        shipping ?? false,
        page ?? 1,
      ],
      queryFn: () => customFetch('/products', { params }),
    })
    return { products: data.data, meta: data.meta, params }
  }

const Products = () => {
  return (
    <>
      <Filters />
      <ProductsContainer />
      <Pagination />
    </>
  )
}
export default Products
