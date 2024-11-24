import React from 'react'
import './Contact.css'
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps'

const Contact = () => {

    return (
        <section id='contact' className='contact'>
            <div className='contact__container'>
                <div className='contact__row1'>
                    <h2 className='contact__header-title'>Наши контакты</h2>
                </div>

                <div className='contact__info'>
                    <div className='contact__info-col1'>
                        <h2 className='contact__title'>Компьютерная мастерская </h2>
                        <p className='contact__text'>8 952 55 69 379</p>
                        <h3 className='contact__subtitle'>Время работы Компьютерной мастерской</h3>
                        <p className='contact__text'>пн-чт 08:00-18:00</p>
                        <p className='contact__text'>пн 08:00-17:00</p>
                        <p className='contact__text'>сб 08:00-14:00</p>
                        <h3 className='contact__subtitle'>Адрес в Острогожске</h3>
                        <p className='contact__text'>улица Нарского, 3</p>
                    </div>
                    <div className='contact__info-col2'>
                        <YMaps >
                            <div>
                                <Map defaultState={{ center: [50.857325, 39.076957], zoom: 17 }} className='contact__map'>
                                    <Placemark geometry={[50.857325, 39.076957]} />
                                </Map>
                            </div>
                        </YMaps>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact