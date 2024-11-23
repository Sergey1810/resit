import React from 'react'
import { FaVk,FaSquareWhatsapp,FaSquarePhone } from "react-icons/fa6";
import { SiMaildotru } from "react-icons/si";
import { CiLocationOn } from "react-icons/ci";

import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer__columns'>
                <div className='footer__column'>
                <FaVk className='footer__icons' /> <FaSquareWhatsapp className='footer__icons'/> <SiMaildotru className='footer__icons'/>
                </div>
                <div className='footer__column'>
               <div className='footer__column-string'> <FaSquarePhone className='footer__icons'/><span> 8 952 556 93 79</span></div> 
               <div className='footer__column-string'><CiLocationOn className='footer__icons' /><span> г.Острогожск, ул.Нарского, д.3</span></div>
                </div>
            </div>
            <div className='footer__copyright'>
                &copy; Alt System 2024
            </div>
        </div>
    )
}

export default Footer