import FeaturedProducts from '../components/featured-products'
import Hero from '../components/hero'
import { customFetch } from '../utils'
const url = '/products?featured=true'


export const loader = (queryClient) => async () => {
  const { data } = await queryClient.ensureQueryData({
    queryKey: ['featuredProducts'],
    queryFn: () => customFetch(url)})
  const products = data.data
  return { products }
}

const Landing = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  )
}
export default Landing
