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
        { id: 7, title: 'Установка/замена комплектующих ', price: '300р' },
        { id: 8, title: 'Прошивка BIOS материнской платы', price: '700р' },
        { id: 3, title: 'Оптимизация внутреннего пространства', price: '500р' },
        { id: 6, title: 'Диагностика отдельных комплектующих ', price: '350р' },
        { id: 9, title: 'Прошивка BIOS материнской платы на программаторе', price: '1000р' }
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

        { id: 15, title: 'Картридж НР', price: '350р-700р' },
        { id: 16, title: 'Картридж Canon', price: '350р' },
        { id: 17, title: 'Картридж Samsung', price: '350р' },
        { id: 18, title: 'Картридж Xerox', price: '700р' },
        { id: 19, title: 'Картридж Brother', price: '350р-750р' },
        { id: 20, title: 'Замена фообарабана', price: '550р' },
        { id: 21, title: 'Замена ролика заряда', price: '150р-350р' },
        { id: 22, title: 'Замена магнитного вала', price: '300р-400р' },
        { id: 23, title: 'Замена ракеля', price: '150р-250р' },
    ]
    const mapService4 = [
        { id: 1, title: 'Установка операционной системы Windows', price: '1000р' },
        { id: 2, title: 'Установка операционной системы Linux', price: '1500р' },
        { id: 3, title: 'Установка прикладного программного обеспечения', price: '500р' },
        { id: 4, title: 'Востановление загрузки операционной системы', price: '700р' },
        { id: 5, title: 'Обновление прикладного программного обеспечения', price: '500р' },
        { id: 6, title: 'Сохранение перенос данных на резервный накопитель', price: '700р' },
        { id: 7, title: 'Восстановление данных с носителя', price: '1000р' },
        { id: 8, title: 'Сброс забытого пароля Windows', price: '500р' },
        { id: 9, title: 'Установка драйвера на персональный компьютер', price: '500р' },
        { id: 10, title: 'Удаленная помощь', price: '1200р' },
        { id: 11, title: 'Установка и настройка 1С', price: '2500р' },
        { id: 12, title: 'Настройка систем ЕГАИС, Честный знак(с лекарствами не работаем)', price: '1500р' },
        { id: 13, title: 'Корректировка остатков ЕГАИС, ЧЗ', price: '3000р' },
        { id: 14, title: 'Услуги сопровождения магазина', price: '1500р' },
        { id: 15, title: 'Кассы: продажа, обслуживание, ремонт', price: ' - ' },
        { id: 16, title: 'Фискальные накопители', price: ' - ' },
        { id: 17, title: 'Подключение к ОФД', price: ' - ' },
    ]

    const mapService5 = [
        { id: 1, title: 'Диагностика неисправности монитора', price: '350р' },
        { id: 2, title: 'Ремонт монитора', price: '1200р' },
        { id: 3, title: 'Диагностика неисправности телевизора', price: '1000р' },
        { id: 4, title: 'Ремонт телевизора (ремонт платы)', price: '2500р' },
        { id: 5, title: 'Замена подсветки', price: '2000р' },
        { id: 6, title: 'Диагностика неисправности консоли', price: '1000р' },
        { id: 7, title: 'Ремонт игровой консоли', price: '2500р' },
        { id: 8, title: 'Замена дисплея смартфона', price: '3500р' },
        { id: 9, title: 'Замена разъема/ремонт платы смартфона', price: '1000р' },
        { id: 10, title: 'Защита гаджетов гидрогелевой пленкой', price: '700р' }
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


    const onClickService2 = () => {
        setService1(mapService2)
        setOne(false)
        setTwo(true)
        setThree(false)
        setFour(false)
        setFive(false)
    }


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
        <div className='service'>
            <div className='service__row1'>
                <h2 className='service__title'>НАШИ УСЛУГИ</h2>
            </div>
            <div className='service__table'>
                <div className='service__col-service'>
                    <div className={`service__col-service-items ${one ? "service__col-service-items_active" : null}`} onClick={onClickService1}>Техническое обслуживание системного блока</div>
                    <div className={`service__col-service-items ${two ? "service__col-service-items_active" : null}`}  onClick={onClickService2}>Техническое обслуживание ноутбуков</div>
                    <div className={`service__col-service-items ${three ? "service__col-service-items_active" : null}`}  onClick={onClickService3}>Обслуживание принтеров,МФУ и заправка картриджей </div>
                    <div className={`service__col-service-items ${four ? "service__col-service-items_active" : null}`}  onClick={onClickService4}>Работа с программным обеспечением и компьютерные услуги</div>
                    <div className={`service__col-service-items ${five ? "service__col-service-items_active" : null}`}  onClick={onClickService5}>Ремонт прочей техники </div>
                </div>

                <div className='service__col2-service'>

                    {service1.map(items => <p className='service__col2-service-items'>{items.title}</p>)}
                </div>
            </div>
        </div>
    )
}

export default Services