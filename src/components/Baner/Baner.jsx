import React from 'react'
import './Baner.css'
import logo from "../../images/glav.jpg"

const Baner = () => {
    return (
        <div className='baner'>
            <div className='baner__col'>
                <h1 className='baner__col-title'>IT - Resurs</h1>
                {/* <p className='baner__col-subtitle'>Сервисный центр, имеющий большой опыт обслуживания техники и программного обеспечения. 
                    Более 22 лет работы в сфере IT принесли множество постоянных клиентов и высокую репутацию, 
                    которую подтверждаем своими качественными результатами работ. 
                    Наши мастера готовы восстановить работоспособность компьютеров, ноутбуков, 
                    принтеров и многое другое, а  так же настроить офисное и торговое оборудование.</p> */}
                    <p className='baner__col-subtitle'>Компьютерная мастерская</p>
                {/* <button className='baner__button'>Получить консультацию </button> */}
            </div>
            <div className='baner__image'>
            <img src={logo} alt="лого" className='baner__image-img'/>
            </div>

        </div>
    )
}

export default Baner