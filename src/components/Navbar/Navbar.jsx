import React from 'react'
import './Navbar.css'
import { HashLink as Link } from 'react-router-hash-link';
import burger from '../../images/burger.png'


const Navbar = () => {
  return (
    <>
      <ul className='navbar'>
        <li className='navbar__link'><Link to='#service' className='navbar__link-items'>Услуги</Link></li>
        <li className='navbar__link'><Link to='#price' className='navbar__link-items'>Цены</Link></li>
        <li className='navbar__link'><Link to='#gallery' className='navbar__link-items'>Работы</Link></li>
        <li className='navbar__link'><Link to='#contact' className='navbar__link-items'>Контакты</Link></li>
        {/* <HashLink to="/home#price">to</HashLink> */}

      </ul>
      <img src={burger} alt="меню" className='navbar__burger' />
    </>

  )
}

export default Navbar