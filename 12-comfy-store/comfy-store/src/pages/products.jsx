
import Filters from '../components/filters'
import Pagination from '../components/pagination'
import ProductsContainer from '../components/products-container'
import { customFetch } from '../utils'

export const loader = async ({request}) => {
  console.log(request)
  const { data } = await customFetch('/products')
  return { products: data.data, meta: data.meta}
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
