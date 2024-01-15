import { useState } from 'react'
import { ThemeProvider } from 'styled-components'

import Sidebar from './containers/Sidebar'
import About from './containers/About'
import GlobalStyle, { Container } from './styles'
import Projects from './containers/Projects'
import lightTheme from './themes/light'
import darkTheme from './themes/dark'

function App() {
  const [isUsingDarkTheme, setIsUsingDarkTheme] = useState(true)

  function changeTheme() {
    setIsUsingDarkTheme(!isUsingDarkTheme)
  }

  return (
    <ThemeProvider theme={isUsingDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Container>
        <Sidebar changeTheme={changeTheme} />
        <main>
          <About />
          <Projects />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
