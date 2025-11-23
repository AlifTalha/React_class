import { Navigate } from 'react-router-dom'

// Simple authentication check
const isAuthenticated = () => {
  return localStorage.getItem('isLoggedIn') === 'true'
}

export default function Protected({ children }) {
  if (!isAuthenticated()) {
    return (
      <div>
        <h1>Access Denied</h1>
        <p>You need to be logged in to access this page.</p>
        <button onClick={() => {
          localStorage.setItem('isLoggedIn', 'true')
          window.location.reload()
        }}>
          Login
        </button>
      </div>
    )
  }

  return children
}
