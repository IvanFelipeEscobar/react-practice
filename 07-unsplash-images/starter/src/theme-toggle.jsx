import { useGlobalContext } from './context'
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs'

const ThemeToggle = () => {
  const { toggleTheme, isDarkTheme } = useGlobalContext()
  return (
    <section className="toggle-container">
      <button className="dark-toggle" onClick={toggleTheme}>
        {isDarkTheme ? (
          <BsFillMoonFill className="toggle-icon" />
        ) : (
          <BsFillSunFill className="toggle-icon" />
        )}
      </button>
    </section>
  )
}
export default ThemeToggle
