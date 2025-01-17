import { useState } from 'react'
import Form from './Form'
import { nanoid } from 'nanoid'
import Items from './items'
import { toast, ToastContainer } from 'react-toastify'
const setLocalStorage = (items) => {
  localStorage.setItem('list', JSON.stringify(items))
}
const App = () => {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem('list')) || []
  )
  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      completed: false,
      id: nanoid(),
    }
    const newList = [...items, newItem]
    setItems(newList)
    setLocalStorage(newList)
    toast.success('item succesfully added')
  }

  const deleteItem = (itemId) => {
    const newList = items.filter((item) => item.id !== itemId)
    setItems(newList)
    setLocalStorage(newList)
    toast.success('item succesfully deleted')
  }

  const editItem = (itemId) => {
    const newList = items.map((item) => {
      if (item.id === itemId) return { ...item, completed: !item.completed }
      return item
    })
    setItems(newList)
    setLocalStorage(newList)
    toast.success('item has been marked as completed')
  }
  return (
    <section className="section-center">
      <ToastContainer position='top-center'/>
      <Form addItem={addItem} />
      <Items items={items} deleteItem={deleteItem} editItem={editItem}/>
    </section>
  )
}

export default App
