import { Outlet, Link } from 'react-router-dom'

function App() {
  return (
    <div className="max-w-3xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8 name-title">Alon Palgy</h1>
      
      <nav className="mb-8">
        <ul className="flex gap-4">
          <li>
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li>
            <Link to="/resume" className="nav-link">Resume</Link>
          </li>
          <li>
            <Link to="/contact-info" className="nav-link">Contact Info</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  )
}

export default App
