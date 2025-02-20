import { createSlice } from '@reduxjs/toolkit'

const themes = {
  fantasy: 'fantasy',
  dark: 'dark',
}

const getThemeFromLocalStoarge = () => {
  const theme = localStorage.getItem('theme') || themes.fantasy
  document.documentElement.setAttribute('data-theme', theme)
  return theme
}

const initialState = {
  user: { username: 'feli' },
  theme: 'fantasy',
}
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state, action) => {
      console.log('login', state, action)
    },
    logoutUser: (state) => {
      console.log('logout', state)
    },
    toggleTheme: (state) => {
      console.log('theme toggled', state)
      const { fantasy, dark } = themes
      state.theme = state.theme === fantasy ? dark : fantasy
      document.documentElement.setAttribute('data-theme', state.theme)
    localStorage.setItem('theme', state.theme)

    },
  },
})

export const { loginUser, logoutUser, toggleTheme } = userSlice.actions

export default userSlice.reducer
