import React from 'react'
import './Navbar.css'
import { HashLink } from 'react-router-hash-link';
import burger from '../../images/burger.png'

const Navbar = () => {
  return (
    <>
      <ul className='navbar'>
        <li className='navbar__link'>Услуги</li>
        <li className='navbar__link'>Цены</li>
        <li className='navbar__link'>Работы</li>
        <li className='navbar__link'>Контакты</li>
        {/* <HashLink to="/home#price">to</HashLink> */}

      </ul>
      <img src={burger} alt="меню" className='navbar__burger' />
    </>

  )
}

export default Navbar