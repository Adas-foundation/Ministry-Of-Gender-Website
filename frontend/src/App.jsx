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
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Analytics from './pages/Analytics'
import CaseManagement from './pages/CaseManagement'
import Settings from './pages/Settings'
import Contact from './pages/Contact'
import UserManagement from './pages/UserManagement'
import DistrictSetup from './pages/DistrictSetup'

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
          <Route path="/contact" element={<Contact />} />
          <Route path="/submitted" element={<Submitted />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/case-management" element={<CaseManagement />} />
          <Route path="/case-management/create" element={<Report />} />
          <Route path="/user-management" element={<UserManagement />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/district-setup" element={<DistrictSetup />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App