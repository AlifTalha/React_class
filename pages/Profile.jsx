import { Link } from 'react-router-dom'

export default function Profile() {
  return (
    <div>
      <h2>My Profile</h2>
      <p>Name: John Doe</p>
      <p>Email: john@example.com</p>
      <p>This is a nested route under Dashboard.</p>
      <Link to="/dashboard/settings">Go to Settings</Link>
    </div>
  )
}
