import { useState } from 'react'
import './App.css'
import Page from './page/page'
import { Box } from "@mui/material"

function App() {
  const [count, setCount] = useState(0)

  return (
    <Box sx={{
      bgcolor: "#02000E",
      height: "100vh"
    }}>
      <Page />
    </Box>
  )
}

export default App
