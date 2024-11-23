import React from 'react'
import './Work.css'

const Work = () => {
    return (
        <div className='work'>
            <div className='work__header'>
                <div className='work__header-line'></div>
                <h2 className='work__header-title'>КАК МЫ РАБОТАЕМ</h2>
                <div className='work__header-line'></div>
            </div>
            <div className='work__grid'>
                <div className="work__grid-item work__grid-item_item1">
                    <span className='work__grid-item-info-number'>1</span><p className='work__grid-item-info'>Бесплатный выезд мастера на объект для оценки работы </p>
                </div>
                <div className="work__grid-item work__grid-item_item2">
                    <span className='work__grid-item-info-number'>2</span><p className='work__grid-item-info'>Бесплатный выезд мастера на объект для оценки работы </p>
                </div>
                <div className="work__grid-item work__grid-item_item3">
                    <span className='work__grid-item-info-number'>3</span><p className='work__grid-item-info'>Оформление и подписание договора</p>
                </div>
                <div className="work__grid-item work__grid-item_item4">
                    <span className='work__grid-item-info-number'>4</span><p className='work__grid-item-info'>Выполнение работ в соответствии с пожеланиями заказчика</p>
                    </div>
                <div className="work__grid-item work__grid-item_item5">
                   <span className='work__grid-item-info-number'>5</span> <p className='work__grid-item-info'>Прием работы заказчиком  и окончательный расчет</p></div>
            </div>
        </div>
    )
}

export default Work