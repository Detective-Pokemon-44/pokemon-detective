import { Link } from "react-router-dom"

export default function Navbar() {
    return (
      <>
        <header className='Navbar'>
          <Link to='/'>
            <h1>Pokemon Detective</h1>
          </Link>
        </header>
      </>
    )
}