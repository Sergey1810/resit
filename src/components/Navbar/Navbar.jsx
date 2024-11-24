import React, { useState } from 'react'
import './Navbar.css'
import { HashLink as Link } from 'react-router-hash-link';
import burger from '../../images/burger.png'
import close from '../../images/close.svg'


const Navbar = () => {
const [active, setActive] = useState(false)

const onOpen=()=>{
  setActive(!active)
}

  return (
    <>
      <ul className={`navbar  ${active?'navbar__active':null}`}>
        <li className='navbar__link'><Link to='#service' className='navbar__link-items'>Услуги</Link></li>
        <li className='navbar__link'><Link to='#price' className='navbar__link-items'>Цены</Link></li>
        <li className='navbar__link'><Link to='#gallery' className='navbar__link-items'>Работы</Link></li>
        <li className='navbar__link'><Link to='#contact' className='navbar__link-items'>Контакты</Link></li>
        {/* <HashLink to="/home#price">to</HashLink> */}

      </ul>
      <img src={burger} alt="меню" className='navbar__burger' onClick={onOpen}/>
      <img src={close} alt="меню" className={`navbar__close  ${active?'navbar__close_active':null}`} onClick={onOpen}/>
    </>

  )
}

export default Navbar