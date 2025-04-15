import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className="mt-4">
      <NavLink
        to="/"
        className="text-4xl font-light text-accent   py-1 px-4 -my-1 -mx-4   focus-visible:outline-solid focus-visible:outline-accent"
      >
        React Todo
      </NavLink>
    </header>
  )
}

export default Header
