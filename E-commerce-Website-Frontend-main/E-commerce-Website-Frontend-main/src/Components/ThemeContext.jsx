import React, {useState,  createContext} from 'react'

export const ThemeStore = createContext(null);

const ThemeContext = ({children}) => {

    const [Theme, setTheme] = useState("light")

  return (
      <ThemeStore.Provider value={{Theme, setTheme}}>
        {children}
      </ThemeStore.Provider>
  )
}

export default ThemeContext
