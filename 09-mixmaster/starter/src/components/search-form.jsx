import { Form, useNavigation } from 'react-router-dom'
import Wrapper from '../assets/wrappers/SearchForm'
const SearchForm = ({search}) => {
  const { state } = useNavigation()
  const isSubmitting = state === 'submitting'

  return (
    <Wrapper>
      <Form className='form'>
        <input
          type="search"
          name="search"
          className="form-input"
          defaultValue={search}
        />
        <button type="submit" className='btn' disabled={isSubmitting}>
          {isSubmitting ? 'Searching...' : "Submit"}
        </button>
      </Form>
    </Wrapper>
  )
}
export default SearchForm
