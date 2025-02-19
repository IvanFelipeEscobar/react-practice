import { Form, Link, useLoaderData } from 'react-router'
import FormInput from './form-input'
import FormSelect from './form-select'
import FormRange from './form-range'
import FormCheckbox from './form-checkbox'

const Filters = () => {
  const { meta, params } = useLoaderData()
  
  return (
    <Form className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
      <FormInput
        type="search"
        label="search product"
        name="search"
        size="input-sm"
        defaultValue={params.search}
      />
      <FormSelect
        label="select category"
        name="category"
        list={meta.categories}
        size="select-sm"
        defaultValue={params.category}
      />
      <FormSelect
        label="select company"
        name="company"
        list={meta.companies}
        size="select-sm"
        defaultValue={params.company}
      />
      <FormSelect
        label="sort by"
        name="order"
        list={['a-z', 'z-a', 'high', 'low']}
        size="select-sm"
        defaultValue={params.order}
      />
      <FormRange
        label="select price"
        name="price"
        size="range-sm"
        price={params.price}
      />
      <FormCheckbox label="free shipping" name="shipping" size="checkbox-sm" defaultValue={params.shipping}/>
      <button type="submit" className="btn btn-primary btn-sm">
        search
      </button>
      <Link to="/products" className="btn btn-accent btn-sm">
        reset
      </Link>
    </Form>
  )
}
export default Filters
