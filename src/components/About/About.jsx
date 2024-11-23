import React from 'react'
import './About.css'

const About = () => {
    return (
        <div className='about'>
            <div>
                <h2 className='about__title'>О НАС</h2>
                <ul className='about__list'>
                    <li className='about__list-items'>Качественное проведение работ</li>
                    <li className='about__list-items'>Обсуждение работы на каждом этапе</li>
                    <li className='about__list-items'>Профессиональный инструмент</li>
                    <li className='about__list-items'>Начинаем работу без аванса</li>
                    <li className='about__list-items'>Доступные цены</li>
                </ul>
            </div>
            <div className='about__circle'>
                <p className='about__circle-info'>более</p>
                <p className='about__circle-info1'>22</p>
                <p className='about__circle-info'>лет успешной работы</p>
            </div>
        </div>
    )
}

export default About