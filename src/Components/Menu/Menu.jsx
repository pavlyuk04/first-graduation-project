import './Menu.scss'
import {
  Link
} from "react-router-dom"

const Menu =()=> {
  return (
    <nav className='Navbar'>
      <div className='Navbar__logo'>acnostia</div>
      <ul className='Navbar__menu'>
        <li className="Navbar__menu__item"><Link to='/home' exact>Home</Link></li>
        <li className="Navbar__menu__item"><Link to='/services'>Services</Link></li>
        <li className="Navbar__menu__item"><Link to='/about' exact>About</Link></li>
        <li className="Navbar__menu__item">Work</li>
        <li className="Navbar__menu__item">Contacts</li>
      </ul>
    </nav>
  )
}
export default Menu