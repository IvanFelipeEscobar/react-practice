import { useEffect, useState } from 'react'
import Form from './Form'
import List from './List'
import type { Task } from './types'

function Component() {
  const [tasks, setTasks] = useState<Task[]>(
    JSON.parse(localStorage.getItem('tasks') as string) || []
  )
  const addTask = (task: Task) => {
    setTasks([...tasks, task])
  }
  const toggleTask = (id: string) => {
    setTasks(
      tasks.map((task) => {
        if (id === task.id) {
          return { ...task, isComplete: !task.isComplete }
        }
        return task
      })
    )
  }
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])
  return (
    <div>
      <h1
        style={{
          textAlign: 'center',
          letterSpacing: '.5rem',
          color: ' #645cff',
          fontWeight: 'bold',
        }}
        className="mb-1"
      >
        Task App
      </h1>
      <Form addTask={addTask} />
      <List tasks={tasks} toggleTask={toggleTask} />
    </div>
  )
}
export default Component
