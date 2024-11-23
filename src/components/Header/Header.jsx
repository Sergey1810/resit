import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Header.css'

const Header = () => {
    return (
        <header className='header'>
            <div className='header__col1'>
                <div className='header__logo'>

                </div>
                <Navbar />
            </div>
            <div className='header__col2'>
                <p className='header__tel'>8(900)999-99-99</p>
                <p className='header__tel2'>На связи с 8:00 до 18:00</p>
            </div>


        </header>
    )
}

export default Header