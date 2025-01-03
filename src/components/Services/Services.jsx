import React, { useState } from 'react'
import './Services.css'

const Services = () => {

    const [one, setOne] = useState(true)
    const [two, setTwo] = useState(false)
    const [three, setThree] = useState(false)
    const [four, setFour] = useState(false)
    const [five, setFive] = useState(false)

    const mapService1 = [
        { id: 1, title: 'Сборка', price: '1000р' },
        { id: 2, title: 'Диагностика', price: '500р' },
        { id: 4, title: 'Модернизация', price: '1000р' },
        { id: 5, title: 'Профилактика ', price: '700р' },
        { id: 6, title: 'Установка/замена комплектующих ', price: '300р' },
        { id: 7, title: 'Прошивка BIOS материнской платы', price: '700р' },
        { id: 8, title: '_____________', price: '1000р' },
        { id: 9, title: 'Диагностика', price: '1000р' },
        { id: 10, title: 'Замена матрицы', price: '1400р' },
        { id: 11, title: 'Замена разъемов', price: '700р' },
        { id: 12, title: 'Восстановление Bios', price: '1400р' },
        { id: 14, title: 'Сборка/разборка ноутбука', price: '1500р' },
        { id: 13, title: 'Восстановление/ремонт корпуса', price: '2000р' },
        { id: 15, title: 'Установка/замена комплектующих', price: '1400р' },


    ]

    const mapService2 = [
        { id: 3, title: 'Замена матрицы', price: '1000р' },
        { id: 1, title: 'Сборка/разборка', price: '1400р' },
        { id: 2, title: 'Диагностика без разборки', price: '700р' },
        { id: 7, title: 'Чистка от пыли с разборкой', price: '1400р' },
        { id: 9, title: 'Восстановление/ремонт корпуса', price: '2000р' },
        { id: 4, title: 'Восстановление Bios материнской платы', price: '1500р' },
        { id: 8, title: 'Замена разъема питания/видео/аудио и другие', price: '700р' },
        { id: 6, title: 'Установка/замена комплектующих, полная разборка', price: '1400р' },
        { id: 5, title: 'Установка/замена комплектующих, чатичная разборка', price: '1000р' },

    ]
    const mapService3 = [
        { id: 1, title: 'Ремонт принтера/МФУ', price: '350р' },
        { id: 2, title: 'Прошивка принтера', price: '700р' },
        { id: 3, title: 'Техническое обслуживание', price: '500р' },
        { id: 4, title: 'Заправка картриджей ( HP, Canon, Samsung, Xerox, Brother )', price: '1000р' },
        { id: 5, title: 'Замена фотобарабана', price: '350р' },



    ]
    const mapService4 = [
        { id: 1, title: 'Установка операционной системы', price: '1000р' },
        { id: 11, title: 'Установка и настройка 1С', price: '2500р' },
        { id: 10, title: 'Удаленная помощь', price: '1200р' },
        { id: 15, title: 'Кассы: продажа, обслуживание, ремонт', price: ' - ' },
        { id: 14, title: '______________', price: '1500р' },
        { id: 3, title: 'Монтаж и ослуживание систем видеонаблюдения', price: '500р' },
        { id: 4, title: 'Выездное обслуживание/ремонт оборудования', price: '700р' },
        { id: 6, title: 'Установка и настройка оборудования на выезде', price: '700р' },
        { id: 5, title: 'Выезд специалиста по заявке', price: '500р' },


        // { id: 7, title: 'Восстановление данных с носителя', price: '1000р' },
        // { id: 8, title: 'Сброс забытого пароля Windows', price: '500р' },
        // { id: 9, title: 'Установка драйвера на персональный компьютер', price: '500р' },


        // { id: 12, title: 'Настройка систем ЕГАИС, Честный знак(с лекарствами не работаем)', price: '1500р' },
        // { id: 13, title: 'Корректировка остатков ЕГАИС, ЧЗ', price: '3000р' },

    ]

    const mapService5 = [
        { id: 8, title: 'Замена дисплея телефона', price: '3500р' },
        { id: 9, title: 'Ремонт платы телефона', price: '1000р' },
        { id: 10, title: 'Гидрогелевая пленка для телефона', price: '700р' },
        { id: 4, title: 'Ремонт платы телевизора', price: '2500р' },
        { id: 5, title: 'Замена подсветки телевизора', price: '2000р' },
        { id: 7, title: 'Чистка/ремонт игровой консоли', price: '2500р' },
    ]

    const [service1, setService1] = useState(mapService1)

    const onClickService1 = () => {
        setService1(mapService1)
        setOne(true)
        setTwo(false)
        setThree(false)
        setFour(false)
        setFive(false)
    }


    // const onClickService2 = () => {
    //     setService1(mapService2)
    //     setOne(false)
    //     setTwo(true)
    //     setThree(false)
    //     setFour(false)
    //     setFive(false)
    // }


    const onClickService3 = () => {
        setService1(mapService3)
        setOne(false)
        setTwo(false)
        setThree(true)
        setFour(false)
        setFive(false)
    }


    const onClickService4 = () => {
        setService1(mapService4)
        setOne(false)
        setTwo(false)
        setThree(false)
        setFour(true)
        setFive(false)
    }

    const onClickService5 = () => {
        setService1(mapService5)
        setOne(false)
        setTwo(false)
        setThree(false)
        setFour(false)
        setFive(true)
    }




    return (
        <section id='service' className='service'>
            <div className='service__row1'>
                <h2 className='service__title'>НАШИ УСЛУГИ</h2>
            </div>
            <div className='service__table'>
                <div className='service__col-service'>
                    <div className={`service__col-service-items ${one ? "service__col-service-items_active" : null}`} onClick={onClickService1}>Техническое обслуживание системного блока/ноутбука</div>
                    <div className={`service__col2-service-mob ${one ?'service__col2-service-mobile':null}`}>
                        {service1.map(items => <p className={`service__col2-service-items ${one ? "service__col2-service-items1_active" : null}`}>{items.title}</p>)}
                    </div>
                    <div className={`service__col-service-items ${five ? "service__col-service-items_active" : null}`} onClick={onClickService5}>Ремонт техники </div>
                    <div className={`service__col2-service-mob ${five ?'service__col2-service-mobile':null}`}>
                        {service1.map(items => <p className={`service__col2-service-items ${one ? "service__col2-service-items1_active" : null}`}>{items.title}</p>)}
                    </div>

                    <div className={`service__col-service-items ${three ? "service__col-service-items_active" : null}`} onClick={onClickService3}>Обслуживание оргтехники &nbsp;Заправка картриджей</div>

                    <div className={`service__col2-service-mob ${three ?'service__col2-service-mobile':null}`}>
                        {service1.map(items => <p className={`service__col2-service-items ${one ? "service__col2-service-items1_active" : null}`}>{items.title}</p>)}
                    </div>

                    <div className={`service__col-service-items ${four ? "service__col-service-items_active" : null}`} onClick={onClickService4}>Компьютерные услуги &nbsp; Обслуживание на выезде</div>
                    <div className={`service__col2-service-mob ${four ?'service__col2-service-mobile':null}`}>
                        {service1.map(items => <p className={`service__col2-service-items ${one ? "service__col2-service-items1_active" : null}`}>{items.title}</p>)}
                    </div>
                    {/* <div className={`service__col-service-items ${four ? "service__col-service-items_active" : null}`}  onClick={onClickService4}>Работа с программным обеспечением и компьютерные услуги</div>
                     */}
                </div>

                <div className='service__col2-service'>

                    {service1.map(items => <p className='service__col2-service-items'>{items.title}</p>)}
                </div>
            </div>
        </section>
    )
}

export default Services