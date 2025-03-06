import { Task } from './types'

const List = ({
  tasks,
  toggleTask,
}: {
  tasks: Task[]
  toggleTask: (id: string) => void
}) => {
  return (
    <ul className="list">
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <li key={task.id}>
            <p className="task-text">{task.description}</p>
            <input
              type="checkbox"
              checked={task.isComplete}
              onChange={() => toggleTask(task.id)}
            />
          </li>
        ))
      ) : (
        <li style={{ textAlign: 'center' }}>no tasks added yet...</li>
      )}
    </ul>
  )
}
export default List
