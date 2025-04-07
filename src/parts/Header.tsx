import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className="mt-4">
      <NavLink to="/" className="text-4xl font-light text-accent">
        React Todo
      </NavLink>
    </header>
  )
}

export default Header
