import React, { useState } from 'react'

function Component() {
  const [text, setText] = useState('')
  const [email, setEmail] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    const data = Object.fromEntries(fd)
    console.log(data)
  }
  return (
    <section>
      <h2>events example</h2>
      <form onSubmit={handleSubmit} className="form">
        <input
          className="form-input mb-1"
          type="text"
          name="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <input
          type="email"
          className="form-input mb-1"
          value={email}
          onChange={handleChange}
          name='email'
        />
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
    </section>
  )
}
export default Component
