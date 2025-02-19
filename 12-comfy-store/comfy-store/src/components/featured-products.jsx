import ProductsGrid from './products-grid'
import SectionTitle from './section-title'

const FeaturedProducts = () => {
  return (
    <div className="pt-24">
      <SectionTitle text={'featured products'} />
      <ProductsGrid />
    </div>
  )
}
export default FeaturedProducts
