import { useState } from 'react'

const ErrorExample = () => {
  const [count, setCount] = useState(0)

  const handleIncrease = () => setCount(count + 1)
  const handleDecrease = () => (count > 0) ? setCount(count - 1) : alert("Can't go lower than 0");

  return (
    <div>
      <h2>{count}</h2>
      <button type="button" onClick={handleIncrease} className='btn mr-2'>
        increase
      </button>
      <button type="button" onClick={handleDecrease} className='btn'>
        decrease
      </button>
    </div>
  )
}

export default ErrorExample
