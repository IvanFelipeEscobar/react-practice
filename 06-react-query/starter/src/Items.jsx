import { useFetchTasks } from './customHooks'
import SingleItem from './SingleItem'

const Items = () => {
  const { isLoading, data, isError } = useFetchTasks()

  if (isLoading)
    return <p style={{ marginTop: '1rem', textAlign: 'center' }}>Loading...</p>
  // if (error) return <p style={{ marginTop: '1rem' }}>{error.response.data}</p>
  if (isError)
    return (
      <p style={{ marginTop: '1rem', textAlign: 'center' }}>
        There seems to be an error...
      </p>
    )

  return (
    <div className="items">
      {data.data.taskList.map((item) => {
        return <SingleItem key={item.id} item={item} />
      })}
    </div>
  )
}
export default Items
