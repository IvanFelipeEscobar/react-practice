import { useState } from 'react'

const Item = ({ item, deleteItem, editItem }) => {
  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={item.completed}
        onChange={() => editItem(item.id)}
      />
      <p
        style={{
          textDecoration: item.completed && 'line-through',
          textTransform: 'capitalize',
        }}
      >
        {item.name}
      </p>
      <button className="btn remove-btn" type="button"onClick={() => deleteItem(item.id)}>
        delete
      </button>
    </div>
  )
}
export default Item
