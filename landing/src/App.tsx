import { ChakraProvider, Box } from '@chakra-ui/react'
import { HelmetProvider } from 'react-helmet-async'
import theme from './theme'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import Home from './pages/Home'
import CaseStudies from './pages/CaseStudies'
import CaseStudyDetail from './pages/CaseStudyDetail'
import About from './pages/About'
import Process from './pages/Process'
import Services from './pages/Services'
import Contact from './components/Contact'

// Auth removed: simplifying app to static pages only

function App() {
  return (
    <HelmetProvider>
      <ChakraProvider theme={theme}>
        <Router>
          <Box minH="100vh">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
              <Route path="/process" element={<Process />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Box>
        </Router>
      </ChakraProvider>
    </HelmetProvider>
  )
}

export default App
