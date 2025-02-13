import { createContext, useContext, useEffect, useState } from 'react'

const AppContext = createContext()
const getInitialDarkMode = () => {
  const prefersDark = window.matchMedia('(prefers-color-scheme:dark)').matches
  const storedMode = localStorage.getItem('dark-theme')
  if(storedMode === null) return prefersDark
  return storedMode === 'true'
}
export const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(getInitialDarkMode())
  const [searchTerm, setSearchTerm] = useState('cat')

  const toggleTheme = () => {
    const newTheme = !isDarkTheme
    setIsDarkTheme(newTheme)
    localStorage.setItem('dark-theme', newTheme)
  }
  useEffect(()=>{
    document.body.classList.toggle('dark-theme', isDarkTheme)
  }, [isDarkTheme])

  return (
    <AppContext.Provider
      value={{ toggleTheme, isDarkTheme, searchTerm, setSearchTerm }}
    >
      {children}
    </AppContext.Provider>
  )
}
export const useGlobalContext = () => useContext(AppContext)
