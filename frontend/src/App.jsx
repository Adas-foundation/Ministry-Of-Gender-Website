import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Resources from './pages/Resources'
import Emergency from './pages/Emergency'
import Report from './pages/Report'
import Track from './pages/Track'
import Submitted from './pages/Submitted'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f8f9ff]">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/emergency" element={<Emergency />} />
          <Route path="/report" element={<Report />} />
          <Route path="/track" element={<Track />} />
          <Route path="/submitted" element={<Submitted />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
