import React from 'react'
import { SiMaildotru } from "react-icons/si";
import { CiLocationOn } from "react-icons/ci";
import { BiLogoOkRu } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import { FaVk } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { GiRotaryPhone } from "react-icons/gi";

import './Footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer__columns'>
                <div className='footer__column'>
                    <div className='footer__column-social'>
                       <a href="https://vk.com/itresursostr" className='footer__link'><FaVk className='footer__icons' /></a> 
                       <a href="https://ok.ru/itresursostr" className='footer__link'><BiLogoOkRu className='footer__icons' /></a> 
                    </div>
                    <div className='footer__column-social'>
                    <a href="https://wa.me/79525569379" className='footer__link'><FaWhatsapp className='footer__icons' /></a> 
                    <a href="https://t.me/+79525569379" className='footer__link'> <FaTelegramPlane className='footer__icons' /></a> 
                    </div>

                </div>
                <div className='footer__column2'>
                    <div className='footer__column-string'>Пн - Чт: 8:00 - 18:00 </div>
                    <div className='footer__column-string'>Пт: 8:00 - 17:00</div>
                    <div className='footer__column-string'>Сб: 8:00 - 14:00</div>
                    <div className='footer__column-string'>Сб: приём и выдача техники</div>
                </div>
                <div className='footer__column2'>
                    <div className='footer__column-string'> <BsTelephone className='footer__icons footer__icons-add' /><a href='tel:+79525569379' className='footer__link'> 8 952 55 69 379</a></div>
                    <div className='footer__column-string'> <GiRotaryPhone className='footer__icons footer__icons-add' /><a href='tel:+74737545569' className='footer__link'> 8 (47375) 4 55 69</a></div>
                    <div className='footer__column-string'> <SiMaildotru className='footer__icons footer__icons-add' /><a href="mailto:it-resurs@internet.ru" className='footer__link'>it-resurs@internet.ru</a></div>
                    <div className='footer__column-string'><CiLocationOn className='footer__icons footer__icons-add' /><a href='https://yandex.ru/profile/-/CDx9UI37' className='footer__link'> г. Острогожск, ул. Нарского 3</a></div>
                </div>
                
            </div>
            <div className='footer__copyright'>
                Alt System {new Date().getFullYear()} &copy;
            </div>
        </footer>
    )
}

export default Footer