import React, { useState } from 'react'
import './Price.css'

const Price = () => {



    const [techSisBlok, setTechSisBlok] = useState([
        { id: 1, title: 'Сборка системного блока', price: 'от 1500' },
        { id: 2, title: 'Диагностика системного блока', price: 'от 750' },
        { id: 3, title: 'Оптимизация внутреннего пространства системного блока', price: 'от 750' },
        { id: 4, title: 'Модернизация системного блока', price: 'от 1500' },
        { id: 5, title: 'Профилактика системного блока', price: 'от 1000' },
        { id: 6, title: 'Диагностика отдельных комплектующих системного блока', price: 'от 500' },
        { id: 7, title: 'Установка/замена комплектующих системного блока', price: 'от 500' },
        { id: 8, title: 'Прошивка BIOS материнской платы', price: 'от 1000' },
        { id: 9, title: 'Прошивка BIOS материнской платы на программаторе', price: 'от 1500' },])

    const [techBook, setTechBook] = useState([
        { id: 1, title: 'Сборка/разборка ноутбука', price: 'от 1700' },
        { id: 2, title: 'Диагностика ноутбука без разборки', price: 'от 1000' },
        { id: 3, title: 'Замена матрицы ноутбука', price: 'от 1500' },
        { id: 4, title: 'Восстановление Bios материнской платы ноутбука', price: 'от 1500' },
        { id: 5, title: 'Установка/замена комплектующих ноутбука, чатичная разборка', price: 'от 1500' },
        { id: 6, title: 'Установка/замена комплектующих ноутбука, полная разборка', price: 'от 1700' },
        { id: 7, title: 'Чистка ноутбука от пыли с разборкой', price: 'от 1700' },
        { id: 8, title: 'Замена разъёма питания/видео/аудио и другие', price: 'от 1000' },
        { id: 9, title: 'Восстановление/ремонт корпуса ноутбука ', price: 'от 2500' },

    ])
    const [po, setPo] = useState([
        { id: 1, title: 'Установка операционной системы Windows', price: 'от 1500' },
        { id: 2, title: 'Установка операционной системы Linux', price: 'от 2000' },
        { id: 3, title: 'Установка прикладного программного обеспечения', price: 'от 750' },
        { id: 4, title: 'Востановление загрузки операционной системы', price: 'от 1000' },
        { id: 5, title: 'Обновление прикладного программного обеспечения', price: 'от 750' },
        { id: 6, title: 'Сохранение перенос данных на резервный накопитель', price: 'от 1000' },
        { id: 7, title: 'Восстановление данных с носителя', price: 'от 1500' },
        { id: 8, title: 'Сброс забытого пароля Windows', price: 'от 750' },
        { id: 9, title: 'Установка драйвера на персональный компьютер', price: 'от 750' },
    ])
    const [obViezd, setObViezd] = useState([
        { id: 1, title: 'Выездное ослуживание/ремонт оборудования (включает в себя выезд, диагностику, устранение неисправности, настройку)', price: 'Первый час 1500р след. 1000' },
        { id: 2, title: 'Выезд специалиста по заявке', price: 'от 500' },
        { id: 3, title: 'Настройка Wi-fi, коммутатора, модема, маршрутизатора', price: 'от 750' },
        { id: 4, title: 'Установка и настройка переферийных устроиств (за 1 устроиство)', price: 'от 750' },
        { id: 5, title: 'Подключение персонально компьютера на рабочее место', price: 'от 750' },
        { id: 6, title: 'Подключение/настройка интернета', price: 'от 750' },
        { id: 7, title: 'Обжим кабеля витая пара (rg-45/rg-12) цена за обжим одного конца', price: 'от 100' },
        { id: 8, title: 'Монтаж и ослуживание систем видеонаблюдения, локально-вычислительных сетей, охранных систем, домофонов', price: ' - ' },
    ])
    const [mfy, setMfy] = useState([
        { id: 1, title: 'Лазерный принтер, чб, А4/A3', price: 'от 500/900' },
        { id: 3, title: 'Лазерный принтер, (цвет), А4/A3', price: 'от 700/1300' },
        { id: 5, title: 'Копировальный аппарат, А4/A3', price: 'от 500/700' },
        { id: 7, title: 'МФУ лазерный, чб, А4/A3', price: 'от 700/1300' },
        { id: 9, title: 'МФУ лазерный, (цвет), А4/A3', price: 'от 900/2500' },
        { id: 11, title: 'Запуск в эксплуатацию принтера, МФУ', price: 'от 750' },
        { id: 13, title: 'Прошивка принтера, МФУ', price: 'от 1900' },
        { id: 14, title: 'Диагностика принтера, МФУ', price: 'от 700' },

    ])
    const [cs, setCs] = useState([
        { id: 1, title: 'Удалённая помощь', price: 'от 2000' },
        { id: 2, title: 'Установка и настройка 1С', price: 'от 3500' },
        { id: 3, title: 'Настройка систем ЕГАИС, Честный знак(с лекарствами не работаем)', price: 'от 2000' },
        { id: 4, title: 'Корректировка остатков ЕГАИС, ЧЗ', price: 'от 3500' },
        { id: 5, title: 'Услуги сопровождения магазина', price: 'от 2500' },
        { id: 6, title: 'Кассы: продажа, обслуживание, ремонт', price: ' - ' },
        { id: 7, title: 'Фискальные накопители', price: ' - ' },
        { id: 8, title: 'Подключение к ОФД', price: ' - ' },
    ])
    const [remPr, setRemPr] = useState([
        { id: 1, title: 'Диагностика неисправности/ремонт монитора', price: 'от 700/1500' },
        { id: 3, title: 'Диагностика неисправности телевизора', price: 'от 2000' },
        { id: 4, title: 'Ремонт телевизора (ремонт платы)', price: 'от 3000' },
        { id: 5, title: 'Замена подсветки', price: 'от 3500' },
        { id: 6, title: 'Диагностика неисправности консоли', price: 'от 2000' },
        { id: 7, title: 'Ремонт игровой консоли', price: 'от 3500' },
        { id: 8, title: 'Замена дисплея смартфона', price: 'от 1500' },
        { id: 9, title: 'Замена разъёма/ремонт платы смартфона', price: 'от 2000' },
        { id: 10, title: 'Защита гаджетов гидрогелевой плёнкой', price: '1100' },

    ])
    const [zapr, setZapr] = useState([
        { id: 1, title: 'Картридж НР', price: '400-850' },
        { id: 2, title: 'Картридж Canon', price: '400-850' },
        { id: 3, title: 'Картридж Samsung', price: '400' },
        { id: 4, title: 'Картридж Xerox', price: ' 850' },
        { id: 5, title: 'Картридж Brother', price: '400-850' },
        { id: 6, title: 'Замена фотобарабана', price: '550' },
        { id: 7, title: 'Замена ролика заряда', price: '150-350' },
        { id: 8, title: 'Замена магнитного вала', price: '300-400' },
        { id: 9, title: 'Замена ракеля', price: '150-250' },
    ])


    const [one, setOne] = useState(true)
    const [two, setTwo] = useState(false)
    const [three, setThree] = useState(false)
    const [four, setFour] = useState(false)
    const [five, setFive] = useState(false)
    const [six, setSix] = useState(false)
    const [seven, setSeven] = useState(false)
    const [eight, setEight] = useState(false)





    const [price, setPrice] = useState(techSisBlok)

    const onPriceClick1 = () => {
        setPrice(techSisBlok)
        setOne(true)
        setTwo(false)
        setThree(false)
        setFour(false)
        setFive(false)
        setSix(false)
        setSeven(false)
        setEight(false)
    }
    const onPriceClick2 = () => {
        setPrice(techBook)
        setOne(false)
        setTwo(true)
        setThree(false)
        setFour(false)
        setFive(false)
        setSix(false)
        setSeven(false)
        setEight(false)
    }
    const onPriceClick3 = () => {
        setPrice(po)
        setOne(false)
        setTwo(false)
        setThree(true)
        setFour(false)
        setFive(false)
        setSix(false)
        setSeven(false)
        setEight(false)
    }
    const onPriceClick4 = () => {
        setPrice(obViezd)
        setOne(false)
        setTwo(false)
        setThree(false)
        setFour(true)
        setFive(false)
        setSix(false)
        setSeven(false)
        setEight(false)
    }
    const onPriceClick5 = () => {
        setPrice(mfy)
        setOne(false)
        setTwo(false)
        setThree(false)
        setFour(false)
        setFive(true)
        setSix(false)
        setSeven(false)
        setEight(false)
    }
    const onPriceClick6 = () => {
        setPrice(cs)
        setOne(false)
        setTwo(false)
        setThree(false)
        setFour(false)
        setFive(false)
        setSix(true)
        setSeven(false)
        setEight(false)
    }
    const onPriceClick7 = () => {
        setPrice(remPr)

        setOne(false)
        setTwo(false)
        setThree(false)
        setFour(false)
        setFive(false)
        setSix(false)
        setSeven(true)
        setEight(false)
    }
    const onPriceClick8 = (id) => {
        setPrice(zapr)
        setOne(false)
        setTwo(false)
        setThree(false)
        setFour(false)
        setFive(false)
        setSix(false)
        setSeven(false)
        setEight(true)
    }

    // className={(active === id) ? "price__list-items_active" : null}
    // onClick={() => {
    //   // Если надо передать выбранный компонент в ваш контекст
    //   device.setSelectedType(type); 
    //   // Пишем в стейт id(если одинаковые отключаем выделение)
    //   type.id === select ? setSelect(-1) : setSelect(type.id);                 
    //  }}
    return (
        <section className='price' id = 'price'>
            <div className='price__row1'>
            <h2 className='price__title'>ЦЕНЫ НА УСЛУГИ</h2>
            </div>
           
            <div>
                <ul className='price__list'>
                    <li className={`price__list-items ${one ? "price__list-items_active" : null}`} onClick={onPriceClick1} id={1}>Техническое обслуживание системного блока</li>

                    <div className={` price__mobile ${one ? "price__table_mobile" : null}`}>
                        <div className={` price__table-header ${one ? 'price__table-header-mobile': null}`}>
                            <div className='price__table-name'>
                                <p>Наименование работ</p>
                            </div>
                            <div className='price__table-price'>
                                <p>Цена руб.</p>
                            </div>
                        </div>
                        {price.map(item => <div key={item.id} className='price__table-info'>
                            <div className='price__table-name-item'>
                                <p className='price__table-name-items'>{item.title}</p>
                            </div>
                            <div className='price__table-price-item'>
                                <p>{item.price}</p>
                            </div>
                        </div>)}
                    </div>

                    <li className={`price__list-items ${two ? "price__list-items_active" : null}`} onClick={onPriceClick2} id={2}>Техническое обслуживание ноутбука</li>
                    <div className={` price__mobile ${two ? "price__table_mobile" : null}`}>
                        <div className={` price__table-header ${two ? 'price__table-header-mobile': null}`}>
                            <div className='price__table-name'>
                                <p>Наименование работ</p>
                            </div>
                            <div className='price__table-price'>
                                <p>Цена руб.</p>
                            </div>
                        </div>
                        {price.map(item => <div key={item.id} className='price__table-info'>
                            <div className='price__table-name-item'>
                                <p className='price__table-name-items'>{item.title}</p>
                            </div>
                            <div className='price__table-price-item'>
                                <p>{item.price}</p>
                            </div>
                        </div>)}
                    </div>
                    <li className={`price__list-items ${three ? "price__list-items_active" : null}`} onClick={onPriceClick3} id={3}>Работа с программным обеспечением</li>
                    <div className={` price__mobile ${three ? "price__table_mobile" : null}`}>
                        <div className={` price__table-header ${three ? 'price__table-header-mobile': null}`}>
                            <div className='price__table-name'>
                                <p>Наименование работ</p>
                            </div>
                            <div className='price__table-price'>
                                <p>Цена руб.</p>
                            </div>
                        </div>
                        {price.map(item => <div key={item.id} className='price__table-info'>
                            <div className='price__table-name-item'>
                                <p className='price__table-name-items'>{item.title}</p>
                            </div>
                            <div className='price__table-price-item'>
                                <p>{item.price}</p>
                            </div>
                        </div>)}
                    </div>
                    <li className={`price__list-items ${four ? "price__list-items_active" : null}`} onClick={onPriceClick4} id={4}>Обслуживание на выезде</li>
                    <div className={` price__mobile ${four ? "price__table_mobile" : null}`}>
                        <div className={` price__table-header ${four ? 'price__table-header-mobile': null}`}>
                            <div className='price__table-name'>
                                <p>Наименование работ</p>
                            </div>
                            <div className='price__table-price'>
                                <p>Цена руб.</p>
                            </div>
                        </div>
                        {price.map(item => <div key={item.id} className='price__table-info'>
                            <div className='price__table-name-item'>
                                <p className='price__table-name-items'>{item.title}</p>
                            </div>
                            <div className='price__table-price-item'>
                                <p>{item.price}</p>
                            </div>
                        </div>)}
                    </div>
                    <li className={`price__list-items ${five ? "price__list-items_active" : null}`} onClick={onPriceClick5} id={5}>Обслуживание принтеров и МФУ</li>
                    <div className={`price__mobile ${five ? "price__table_mobile" : null}`}>
                        <div className={` price__table-header ${five ? 'price__table-header-mobile': null}`}>
                            <div className='price__table-name'>
                                <p>Наименование работ</p>
                            </div>
                            <div className='price__table-price'>
                                <p>Цена руб.</p>
                            </div>
                        </div>
                        {price.map(item => <div key={item.id} className='price__table-info'>
                            <div className='price__table-name-item'>
                                <p className='price__table-name-items'>{item.title}</p>
                            </div>
                            <div className='price__table-price-item'>
                                <p>{item.price}</p>
                            </div>
                        </div>)}
                    </div>
                    <li className={`price__list-items ${six ? "price__list-items_active" : null}`} onClick={onPriceClick6} id={6}>Компьютерные услуги</li>
                    <div className={` price__mobile ${six ? "price__table_mobile" : null}`}>
                        <div className={` price__table-header ${six ? 'price__table-header-mobile': null}`}>
                            <div className='price__table-name'>
                                <p>Наименование работ</p>
                            </div>
                            <div className='price__table-price'>
                                <p>Цена руб.</p>
                            </div>
                        </div>
                        {price.map(item => <div key={item.id} className='price__table-info'>
                            <div className='price__table-name-item'>
                                <p className='price__table-name-items'>{item.title}</p>
                            </div>
                            <div className='price__table-price-item'>
                                <p>{item.price}</p>
                            </div>
                        </div>)}
                    </div>
                    <li className={`price__list-items ${seven ? "price__list-items_active" : null}`} onClick={onPriceClick7} id={7}>Ремонт прочей техники</li>
                    <div className={`price__mobile ${seven ? "price__table_mobile" : null}`}>
                        <div className={` price__table-header ${seven ? 'price__table-header-mobile': null}`}>
                            <div className='price__table-name'>
                                <p>Наименование работ</p>
                            </div>
                            <div className='price__table-price'>
                                <p>Цена руб.</p>
                            </div>
                        </div>
                        {price.map(item => <div key={item.id} className='price__table-info'>
                            <div className='price__table-name-item'>
                                <p className='price__table-name-items'>{item.title}</p>
                            </div>
                            <div className='price__table-price-item'>
                                <p>{item.price}</p>
                            </div>
                        </div>)}
                    </div>
                    <li className={`price__list-items ${eight ? "price__list-items_active" : null}`} onClick={onPriceClick8} id={8}>Заправка и востановление картриджей</li>
                    <div className={`price__mobile ${eight ? "price__table_mobile" : null}`}>
                        <div className={` price__table-header ${eight ? 'price__table-header-mobile': null}`}>
                            <div className='price__table-name'>
                                <p>Наименование работ</p>
                            </div>
                            <div className='price__table-price'>
                                <p>Цена руб.</p>
                            </div>
                        </div>
                        {price.map(item => <div key={item.id} className='price__table-info'>
                            <div className='price__table-name-item'>
                                <p className='price__table-name-items'>{item.title}</p>
                            </div>
                            <div className='price__table-price-item'>
                                <p>{item.price}</p>
                            </div>
                        </div>)}
                    </div>
                </ul>
                <div className='price__table'>
                    <div className='price__table-header'>
                        <div className='price__table-name'>
                            <p>Наименование работ</p>
                        </div>
                        <div className='price__table-price'>
                            <p>Цена руб.</p>
                        </div>
                    </div>
                    {price.map(item => <div key={item.id} className='price__table-info'>
                        <div className='price__table-name-item'>
                            <p className='price__table-name-items'>{item.title}</p>
                        </div>
                        <div className='price__table-price-item'>
                            <p>{item.price}</p>
                        </div>
                    </div>)}
                </div>

            </div>
        </section>
    )
}

export default Price