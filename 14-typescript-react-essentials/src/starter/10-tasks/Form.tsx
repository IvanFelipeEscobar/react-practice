import { ChangeEvent, FormEvent, useState } from 'react'
import { Task } from "./types"

const Form = ({addTask} : {addTask: (task:Task)=>void}) => {
  const [newTask, setNewTask] = useState('')
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!newTask) alert('Please use input field to add a task')
    addTask({
        id: new Date().getMilliseconds().toString(),
        description: newTask,
        isComplete: false
    })
    setNewTask('')
  }
  return (
    <form className="form task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-input"
        value={newTask}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setNewTask(e.target.value)
        }
      />
      <button type="submit" className="btn">
        submit
      </button>
    </form>
  )
}
export default Form
