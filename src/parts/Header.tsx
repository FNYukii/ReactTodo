import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className="mt-4">
      <NavLink
        to="/"
        className="text-4xl font-light text-accent   py-1 px-4 -my-1 -mx-4 border border-transparent   outline-none focus-visible:border focus-visible:border-accent focus-visible:bg-button-hover"
      >
        React Todo
      </NavLink>
    </header>
  )
}

export default Header
