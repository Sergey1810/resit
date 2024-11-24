import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className='header'>
            <div className='header__col1'>
               <Link to='/'>
               <div className='header__logo'>
                </div>
               </Link> 
                <Navbar />
            </div>
            <div className='header__col2'>
                <a className='header__tel' a href='tel:+74737545569'>8 952 556 93 79</a>
                <p className='header__tel2'>На связи с 8:00 до 18:00</p>
            </div>


        </header>
    )
}

export default Header