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
        <div className='footer'>
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
                    <div className='footer__column-string'> <BsTelephone className='footer__icons' /><span> 8 952 55 69 379</span></div>
                    <div className='footer__column-string'> <GiRotaryPhone className='footer__icons' /><span> 8 (47375) 4 55 69</span></div>
                    <div className='footer__column-string'> <SiMaildotru className='footer__icons' /><span>it-resurs@internet.ru</span></div>
                    <div className='footer__column-string'><CiLocationOn className='footer__icons' /><span> г. Острогожск, ул. Нарского 3</span></div>
                </div>
            </div>
            <div className='footer__copyright'>
                Alt System {new Date().getFullYear()} &copy;
            </div>
        </div>
    )
}

export default Footer