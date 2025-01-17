import { useState } from 'react'
import peopleData from '../data'
import Person from './person'
const List = () => {
  const [people, setPeople] = useState(peopleData)

  return (
    <div className="container">
      <h3>{people.length} Birthdays Today</h3>
      <ul>
        {people.map((p) => (
          <Person {...p} key={p.id} />
        ))}
      </ul>
      <button className='btn-block btn' type='button' onClick={() => setPeople([])}>Delete All</button>
    </div>
  )
}
export default List
