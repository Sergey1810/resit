import React, { useState } from 'react'
import './Price.css'

const Price = () => {



    const [techSisBlok, setTechSisBlok] = useState([
        { id: 1, title: 'Сборка системного блока', price: '1000р' },
        { id: 2, title: 'Диагностика системного блока', price: '500р' },
        { id: 3, title: 'Оптимизация внутреннего пространства системного блока', price: '500р' },
        { id: 4, title: 'Модернизация системного блока', price: '1000р' },
        { id: 5, title: 'Профилактика системного блока', price: '700р' },
        { id: 6, title: 'Диагностика отдельных комплектующих системного блока', price: '350р' },
        { id: 7, title: 'Установка/замена комплектующих системного блока', price: '300р' },
        { id: 8, title: 'Прошивка BIOS материнской платы', price: '700р' },
        { id: 9, title: 'Прошивка BIOS материнской платы на программаторе', price: '1000р' },])

    const [techBook, setTechBook] = useState([
        { id: 1, title: 'Сборка/разборка ноутбука', price: '1400р' },
        { id: 2, title: 'Диагностика ноутбука без разборки', price: '700р' },
        { id: 3, title: 'Замена матрицы ноутбука', price: '1000р' },
        { id: 4, title: 'Восстановление Bios материнской платы ноутбука', price: '1500р' },
        { id: 5, title: 'Установка/замена комплектующих ноутбука, чатичная разборка', price: '1000р' },
        { id: 6, title: 'Установка/замена комплектующих ноутбука, полная разборка', price: '1400р' },
        { id: 7, title: 'Чистка ноутбука от пыли с разборкой', price: '1400р' },
        { id: 8, title: 'Замена разъема питания/видео/аудио и другие', price: '700р' },
        { id: 9, title: 'Восстановление/ремонт корпуса ноутбука ', price: '2000р' },
        
    ])
    const [po, setPo] = useState([
        { id: 1, title: 'Установка операционной системы Windows', price: '1000р' },
        { id: 2, title: 'Установка операционной системы Linux', price: '1500р' },
        { id: 3, title: 'Установка прикладного программного обеспечения', price: '500р' },
        { id: 4, title: 'Востановление загрузки операционной системы', price: '700р' },
        { id: 5, title: 'Обновление прикладного программного обеспечения', price: '500р' },
        { id: 6, title: 'Сохранение перенос данных на резервный накопитель', price: '700р' },
        { id: 7, title: 'Восстановление данных с носителя', price: '1000р' },
        { id: 8, title: 'Сброс забытого пароля Windows', price: '500р' },
        { id: 9, title: 'Установка драйвера на персональный компьютер', price: '500р' },
    ])
    const [obViezd, setObViezd] = useState([
        { id: 1, title: 'Выездное ослуживание/ремонт оборудования (включает в себя выезд, диагностику, устранение неисправности, настройку)', price: 'Первый час 1000р последующий 500р' },
        { id: 2, title: 'Выезд специалиста по заявке', price: '350р' },
        { id: 3, title: 'Настройка Wi-fi, коммутатора, модема, маршрутизатора', price: '500р' },
        { id: 4, title: 'Установка и настройка переферийных устроиств (за 1 устроиство)', price: '500р' },
        { id: 5, title: 'Подключение персонально компьютера на рабочее место', price: '500р' },
        { id: 6, title: 'Подключение/настройка интернета', price: '500р' },
        { id: 7, title: 'Обжим кабеля витая пара (rg-45/rg-12) цена за обжим одного конеца', price: '50р' },
        { id: 8, title: 'Монтаж и ослуживание систем видеонаблюдения, локально-вычислительных сетей, охранных систем, домофонов', price: ' - ' },
    ])
    const [mfy, setMfy] = useState([
        { id: 1, title: 'Лазерный принтер, чб, А4', price: '350р' },
        { id: 2, title: 'Лазерный принтер, чб, А3', price: '700р' },
        { id: 3, title: 'Лазерный принтер, (цвет), А4', price: '500р' },
        { id: 4, title: 'Лазерный принтер, (цвет), А3', price: '1000р' },
        { id: 5, title: 'Копировальный аппарат, А4', price: '350р' },
        { id: 6, title: 'Копировальный аппарат, А3', price: '500р' },
        { id: 7, title: 'МФУ лазерный, чб, А4', price: '500р' },
        { id: 8, title: 'МФУ лазерный, чб, А3', price: '1000р' },
        { id: 9, title: 'МФУ лазерный, (цвет), А4', price: '700р' },
        { id: 10, title: 'МФУ лазерный, (цвет), А3', price: '2000р' },
        { id: 11, title: 'Запуск в эксплуатацию принтера, МФУ, А4', price: '500р' },
        { id: 12, title: 'Запуск в эксплуатацию принтера, МФУ, А3', price: '700р' },
        { id: 13, title: 'Прошивка принтера, МФУ', price: '1500р' },
        { id: 14, title: 'Диагностика принтера, МФУ', price: '500р' },

    ])
    const [cs, setCs] = useState([
        { id: 1, title: 'Удаленная помощь', price: '1200р' },
        { id: 2, title: 'Установка и настройка 1С', price: '2500р' },
        { id: 3, title: 'Настройка систем ЕГАИС, Честный знак(с лекарствами не работаем)', price: '1500р' },
        { id: 4, title: 'Корректировка остатков ЕГАИС, ЧЗ', price: '3000р' },
        { id: 5, title: 'Услуги сопровождения магазина', price: '1500р' },
        { id: 6, title: 'Кассы: продажа, обслуживание, ремонт', price: ' - ' },
        { id: 7, title: 'Фискальные накопители', price: ' - ' },
        { id: 8, title: 'Подключение к ОФД', price: ' - ' },
    ])
    const [remPr, setRemPr] = useState([
        { id: 1, title: 'Диагностика неисправности монитора', price: '350р' },
        { id: 2, title: 'Ремонт монитора', price: '1200р' },
        { id: 3, title: 'Диагностика неисправности телевизора', price: '1000р' },
        { id: 4, title: 'Ремонт телевизора (ремонт платы)', price: '2500р' },
        { id: 5, title: 'Замена подсветки', price: '2000р' },
        { id: 6, title: 'Диагностика неисправности консоли', price: '1000р' },
        { id: 7, title: 'Ремонт игровой консоли', price: '2500р' },
        { id: 8, title: 'Замена дисплея смартфона', price: '3500р' },
        { id: 9, title: 'Замена разъема/ремонт платы смартфона', price: '1000р' },
        { id: 10, title: 'Защита гаджетов гидрогелевой пленкой', price: '700р' },

    ])
    const [zapr, setZapr] = useState([
        { id: 1, title: 'Картридж НР', price: '350р-700р' },
        { id: 2, title: 'Картридж Canon', price: '350р' },
        { id: 3, title: 'Картридж Samsung', price: '350р' },
        { id: 4, title: 'Картридж Xerox', price: '700р' },
        { id: 5, title: 'Картридж Brother', price: '350р-750р' },
        { id: 6, title: 'Замена фообарабана', price: '550р' },
        { id: 7, title: 'Замена ролика заряда', price: '150р-350р' },
        { id: 8, title: 'Замена магнитного вала', price: '300р-400р' },
        { id: 9, title: 'Замена ракеля', price: '150р-250р' },
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
        <section className='price' id='price'>
            <h2 className='price__title'>ПРАЙС-ЛИСТ НА УСЛУГИ</h2>
            <div>
                <ul className='price__list'>
                    <li className={`price__list-items ${one ? "price__list-items_active" : null}`} onClick={onPriceClick1} id={1}>Техническое обслуживание системного блока</li>
                    <li className={`price__list-items ${two ? "price__list-items_active" : null}`} onClick={onPriceClick2} id={2}>Техническое обслуживание ноутбука</li>
                    <li className={`price__list-items ${three ? "price__list-items_active" : null}`} onClick={onPriceClick3} id={3}>Работа с программным обеспечением</li>
                    <li className={`price__list-items ${four ? "price__list-items_active" : null}`} onClick={onPriceClick4} id={4}>Обслуживание на выезде</li>
                    <li className={`price__list-items ${five ? "price__list-items_active" : null}`} onClick={onPriceClick5} id={5}>Обслуживание принтеров и МФУ</li>
                    <li className={`price__list-items ${six ? "price__list-items_active" : null}`} onClick={onPriceClick6} id={6}>Компьютерные услуги</li>
                    <li className={`price__list-items ${seven ? "price__list-items_active" : null}`} onClick={onPriceClick7} id={7}>Ремонт прочей техники</li>
                    <li className={`price__list-items ${eight ? "price__list-items_active" : null}`} onClick={onPriceClick8} id={8}>Заправка и востановление картриджей</li>
                </ul>
                <div className='price__table'>
                    <div className='price__table-header'>
                        <div className='price__table-name'>
                            <p>Наименование работ</p>
                        </div>
                        <div className='price__table-price'>
                            <p>Цена от,  руб</p>
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