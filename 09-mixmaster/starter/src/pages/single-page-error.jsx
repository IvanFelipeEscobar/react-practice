import { useRouteError } from 'react-router-dom'

const SinglePageError = () => {
  const error = useRouteError()
  return (
    <>
      <h2 style={{ textAlign: 'center', fontSize: '2rem' }}>
        {error.message}
      </h2>
    </>
  )
}
export default SinglePageError
