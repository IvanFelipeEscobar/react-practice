import { useEffect, useState } from 'react'

const url = 'https://api.github.com/users'

const FetchData = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url)
        const users = await response.json()
        setUsers(users)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])
  return (
    <article>
      <h2>GitHub Users</h2>
      <ul className="users">
        {users.map((user) => (
          <li key={user.id}>
            <img src={user.avatar_url} alt={user.login} />
            <div>
              <h5>{user.login} </h5>
              <a href={user.html_url}>go to profile</a>
            </div>
          </li>
        ))}
      </ul>
    </article>
  )
}
export default FetchData
