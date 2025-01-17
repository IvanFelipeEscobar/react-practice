import { useState } from 'react'
import { data } from '../../../data'

const UseStateArray = () => {
  const [people, setPeople] = useState(data)

  const removeItem = id => {
    const newList = people.filter( p => id != p.id)
    setPeople(newList)
  }

  return (
    <>
      <h2>List of People</h2>
      <ul>
        {people.map((p) => (
          <li key={p.id}><h4>{p.name}</h4>
          <button type='button' className='btn-hipster' onClick={() => removeItem(p.id)}>delete</button>
          </li>
        ))}
      </ul>
      <button className="btn mt-2" type="button" onClick={() => setPeople([])}>
        delete all
      </button>
     
    </>
  )
}

export default UseStateArray
