import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import ReportIncident from './pages/ReportIncident'
import EmergencySOS from './pages/EmergencySOS'
import TrackReport from './pages/TrackReport'
import Resources from './pages/Resources'
import Contact from './pages/Contact'
import Login from './pages/Login'
import './App.css'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/report-incident" element={<ReportIncident />} />
        <Route path="/emergency-sos" element={<EmergencySOS />} />
        <Route path="/track-report" element={<TrackReport />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
