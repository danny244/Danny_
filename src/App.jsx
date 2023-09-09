// Flux clone
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from './components/Home'
import Fluxcards from './components/Features/Fluxcards'
import Footer from './components/Footer'
import ScrollToTop from "./components/Pages/ScrollToTop"
import Privacy from "./components/Pages/Privacy"
import Terms from "./components/Pages/Terms"
import About from "./components/Pages/About"


function App() {

  return (
    <div id='App'>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="card" element={<Fluxcards />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="terms" element={<Terms />} />
        <Route path='*' element={<About />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
