import { Link, Outlet } from 'react-router-dom'

export default function Dashboard() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: '2rem' }}>
      {/* Sidebar Navigation */}
      <aside>
        <h3>Dashboard Menu</h3>
        <nav>
          <div style={{ marginBottom: '0.5rem' }}>
            <Link to="/dashboard" style={{ textDecoration: 'none' }}>Overview</Link>
          </div>
          <div style={{ marginBottom: '0.5rem' }}>
            <Link to="/dashboard/profile" style={{ textDecoration: 'none' }}>Profile</Link>
          </div>
          <div>
            <Link to="/dashboard/settings" style={{ textDecoration: 'none' }}>Settings</Link>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main>
        <Outlet />
        <h1>Dashboard Overview</h1>
        <p>Select a menu item from the left sidebar to view content.</p>
      </main>
    </div>
  )
}
