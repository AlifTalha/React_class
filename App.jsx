import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

// Import Pages
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import User from './pages/User'
import Products from './pages/Products'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'
import Settings from './pages/Settings'
import NotFound from './pages/NotFound'

// Import Components
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Layout from './layout/Layout'

// Import Protected Route
import Protected from './protected/Protected'

function App() {
  return (
    <Router>
      <Routes>
        {/* All routes wrapped with Layout */}
        <Route element={<Layout />}>
          {/* Basic Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Dynamic Route */}
          <Route path="/user/:username" element={<User />} />
          
          {/* Products Route */}
          <Route path="/products" element={<Products />} />
          
          {/* Protected Dashboard with Nested Routes */}
          <Route
            path="/dashboard"
            element={
              <Protected>
                <Dashboard />
              </Protected>
            }
          >
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
          </Route>
          
          {/* 404 Page */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
