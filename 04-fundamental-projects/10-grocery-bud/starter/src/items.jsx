import Item from "./item"

const Items = ({ items, deleteItem, editItem }) => {
  return (
    <div className="items">
      {items.map((item) => <Item key={item.id} item={item} deleteItem={deleteItem} editItem={editItem}/>)}
    </div>
  )
}
export default Items
