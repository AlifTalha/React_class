import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav style={{ background: '#333', padding: '1rem', marginBottom: '2rem' }}>
      <Link to="/" style={{ color: 'white', marginRight: '1rem', textDecoration: 'none' }}>
        Home
      </Link>
      <Link to="/about" style={{ color: 'white', marginRight: '1rem', textDecoration: 'none' }}>
        About
      </Link>
      <Link to="/contact" style={{ color: 'white', marginRight: '1rem', textDecoration: 'none' }}>
        Contact
      </Link>
      <Link to="/user/alif" style={{ color: 'white', marginRight: '1rem', textDecoration: 'none' }}>
        User
      </Link>
      <Link to="/products" style={{ color: 'white', marginRight: '1rem', textDecoration: 'none' }}>
        Products
      </Link>
      <Link to="/dashboard" style={{ color: 'white', textDecoration: 'none' }}>
        Dashboard
      </Link>
    </nav>
  )
}
