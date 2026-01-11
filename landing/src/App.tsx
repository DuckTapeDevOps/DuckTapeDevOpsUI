import { ChakraProvider, Box } from '@chakra-ui/react'
import theme from './theme'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import Home from './pages/Home'
import CaseStudies from './pages/CaseStudies'
import Process from './pages/Process'
import Services from './pages/Services'
import Contact from './components/Contact'

// Auth removed: simplifying app to static pages only

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Box minH="100vh">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/process" element={<Process />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Box>
      </Router>
    </ChakraProvider>
  )
}

export default App
