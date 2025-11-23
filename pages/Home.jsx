import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to React Router Demo!</p>
      <p>Learn React Router concepts by exploring different pages.</p>
      
      <h2>Available Routes:</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/user/john">User (Dynamic Route)</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/dashboard">Dashboard (Protected)</Link></li>
      </ul>
    </div>
  )
}
