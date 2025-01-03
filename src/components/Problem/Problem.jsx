import React, { useEffect, useRef, useState } from 'react'
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import debounce from 'lodash.debounce'
import './Problem.css'

const Problem = () => {

    const problem = [
        {
            id: 1, title: 'Как я могу связаться с вами для консультации?', lable: 'Вы можете позвонить нам по телефону или оставить заявку на нашем сайте. Мы оперативно свяжемся с вами для уточнения всех деталей.'
        },
        {
            id: 2, title: 'Как долго длится ремонт?', lable: 'Срок ремонта зависит от сложности поломки и наличия необходимых запчастей. Обычно ремонт занимает от нескольких часов до нескольких дней.'
        },
        {
            id: 3, title: 'Какие гарантии вы предоставляете?', lable: 'Мы предоставляем гарантию на все выполненные нами работы. На запчасти гарантия от магазина. Срок гарантии может варьироваться в зависимости от типа ремонта.'
        },
        {
            id: 4, title: '  Можно ли принести свою запчасть?', lable: 'Да, вы можете принести свою запчасть, если она подходит по техническим характеристикам. Однако мы не даем гарантию на ваши детали.'
        },
        {
            id: 5, title: 'Как я могу узнать стоимость ремонта?', lable: 'Стоимость ремонта определяется после проведения диагностики. Мы сообщим вам стоимость до начала работ. Если цена ремонта будет до 1500 р мы не согласовываем ремонт.'
        },
        {
            id: 6, title: 'Какие документы я получу после ремонта?', lable: 'После завершения ремонта вы получите акт выполненных работ и гарантийный талон.'
        },
        {
            id: 7, title: ' Как я могу оплатить ремонт?', lable: ' Вы можете оплатить ремонт наличными, банковской картой или через платежные системы.'
        },

    ]

    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);

    const listRef = useRef(null);

    const checkForScrollPosition = () => {
        const { current } = listRef;
        if (current) {
            const { scrollLeft, scrollWidth, clientWidth } = current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft !== scrollWidth - clientWidth);
        }
    };

    const debounceCheckForScrollPosition = debounce(checkForScrollPosition, 100);

    const scrollContainerBy = (distance) =>
        listRef.current?.scrollBy({ left: distance, behavior: "smooth" });

    useEffect(() => {
        const { current } = listRef;
        checkForScrollPosition();
        current?.addEventListener("scroll", debounceCheckForScrollPosition);

        return () => {
            current?.removeEventListener("scroll", debounceCheckForScrollPosition);
            debounceCheckForScrollPosition.cancel();
        };
    }, []);

    return (
        <section className='problem'>
            <div className='problem__header'>
                <div className='problem__header-line'></div>
                <h2 className='problem__header-title'>Часто задаваемые вопросы</h2>
                <div className='problem__header-line'></div>
            </div>
            <div className='problem__scrollbar' ref={listRef}>
                {
                    problem.map(item => <div key={item.id} className='problem__scrollbar-item'>
                        <p className='problem__title'>{item.title}</p>
                        <p className='problem__lable'>{item.lable}</p>
                    </div>)
                }
            </div>
            <button
                className='problem__leftBtn'
                type="button"
                disabled={!canScrollLeft}
                onClick={() => scrollContainerBy(-282)}
            >
                <FaAngleLeft />
            </button>
            <button
                className='problem__rightBtn'
                type="button"
                disabled={!canScrollRight}
                onClick={() => scrollContainerBy(282)}
            >
                <FaAngleRight />
            </button>
            

        </section>
    )
}

export default Problem