import { createContext, useContext, useState } from 'react'

const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  const toggleTheme = () => {
    const newTheme = !isDarkTheme
    setIsDarkTheme(newTheme)
    const body = document.querySelector('body')
    body.classList.toggle('dark-theme', newTheme)
    console.log(body);
  }

  return <AppContext.Provider value={{toggleTheme, isDarkTheme}}>{children}</AppContext.Provider>
}
export const useGlobalContext = () => useContext(AppContext)
