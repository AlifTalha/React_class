import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Settings() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div>
      <h2>Settings</h2>
      
      <div style={{ marginBottom: '1rem' }}>
        <label>
          <input
            type="checkbox"
            checked={darkMode}
            onChange={(e) => setDarkMode(e.target.checked)}
          />
          Dark Mode
        </label>
      </div>
      
      <p>Dark Mode: {darkMode ? 'ON' : 'OFF'}</p>
      <p>This is a nested route under Dashboard.</p>
      <Link to="/dashboard/profile">Go to Profile</Link>
    </div>
  )
}
