import Wrapper from '../assets/wrappers/ErrorPage'
import { Link, useRouteError } from 'react-router-dom'
import img from '../assets/not-found.svg'

const Error = () => {
  const error = useRouteError()
  if (error.status === 404)
    return (
      <Wrapper>
        <div>
          <img src={img} alt="not found" />
          <h3>Whoops!</h3>
          <p>The page you are looking for doesn't seem to exist...</p>
          <Link to="/">back home</Link>
        </div>
      </Wrapper>
    )
  return (
    <Wrapper>
      <div>
        <h3>Oh no!</h3>
        <p>Something has fone wrong</p>
        <Link to="/">back home</Link>
      </div>
    </Wrapper>
  )
}
export default Error
