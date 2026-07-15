import Page from './page/page'
import { ThemeProvider } from './context/ThemeContext'

function App() {
  return (
    <ThemeProvider>
      <Page />
    </ThemeProvider>
  )
}

export default App
