
import Filters from '../components/filters'
import Pagination from '../components/pagination'
import ProductsContainer from '../components/products-container'
import { customFetch } from '../utils'

export const loader = async ({request}) => {
  const params = Object.fromEntries([...new URL(request.url).searchParams.entries()])
  const { data } = await customFetch('/products', {params})
  return { products: data.data, meta: data.meta, params}
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
