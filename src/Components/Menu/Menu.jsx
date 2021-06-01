import './Menu.scss'
import {
  NavLink
} from "react-router-dom"
import React from 'react'

const Menu =()=> {

  const refBurger =React.createRef()
  const refNav = React.createRef()

  const Menu = () => {
    refBurger.current.classList.toggle('Navbar__burger-active')
    refNav.current.classList.toggle('Navbar__menu-active')
  }
  const MenuNav = () => {
    refBurger.current.classList.toggle('Navbar__burger-active')
    refNav.current.classList.toggle('Navbar__menu-active')
  }

  return (
    <nav className='Navbar'>
      <div className='Navbar__logo'>acnostia</div>
      <ul className='Navbar__menu' ref={refNav}>
      <li className="Navbar__menu__item" onClick={MenuNav}><NavLink to='/home' activeClassName="nav-home">Home</NavLink></li>
        <li className="Navbar__menu__item" onClick={MenuNav}><NavLink to='/services' activeClassName="nav-services">Services</NavLink></li>
        <li className="Navbar__menu__item" onClick={MenuNav}><NavLink to='/about' activeClassName="nav-about">About</NavLink></li>
        <li className="Navbar__menu__item" onClick={MenuNav}><NavLink to='/work' activeClassName="nav-work">Work</NavLink></li>
        <li className="Navbar__menu__item" onClick={MenuNav}><NavLink to='/contacts' activeClassName="nav-contact">Contacts</NavLink></li>
      </ul>
      <div onClick={Menu} className='Navbar__burger' ref={refBurger}>
        <div className='top'></div>
        <div className='mid'></div>
        <div className='bot'></div>
      </div>
    </nav>
  )
}
export default Menu


