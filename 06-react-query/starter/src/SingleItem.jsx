import { useEditTask, useDeleteTask } from './customHooks'

const SingleItem = ({ item }) => {
  const { changeTask } = useEditTask()
  const { deleteTask, isLoading } = useDeleteTask()
  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={item.isDone}
        onChange={() => changeTask({ taskId: item.id, isDone: !item.isDone })}
      />
      <p
        style={{
          textTransform: 'capitalize',
          textDecoration: item.isDone && 'line-through',
        }}
      >
        {item.title}
      </p>
      <button
        className="btn remove-btn"
        type="button"
        onClick={() => deleteTask(item.id)}
        disabled={isLoading}
      >
        delete
      </button>
    </div>
  )
}
export default SingleItem
