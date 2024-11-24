import React from 'react'
import './Gallery.css'
import one from '../../images/1.png'
import two from '../../images/2.png'
import three from '../../images/3.png'
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

const Gallery = () => {
    const GalleryImg = [
        {
            imgPath: `${one}`,
            lable: 'paika'
        },
        {
            imgPath: `${two}`,
            lable: 'paika'
        },
        {
            imgPath: `${three}`,
            lable: 'paika'
        },
    ]

    const [index, setActiveStep] = React.useState(0);

    const goToNextPicture = () => {
        if (index > 0) {
            setActiveStep((prevActiveStep) => prevActiveStep - 1);
        } else {
            setActiveStep(2)
        }
    };
    const goToBackPicture = () => {
        if (index < 2) {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        } else {
            setActiveStep(0)
        }
    };

    return (
        <section id='gallery' className='gallery'>
            <div className='gallery__header'>
                <div className='gallery__header-line'></div>
                <h2 className='gallery__header-title'>ГАЛЕРЕЯ РАБОТ</h2>
                <div className='gallery__header-line'></div>
            </div>
            <div className="gallery__grid">
                <div className="gallery__grid-item">
                    <img src={GalleryImg[index].imgPath} alt={GalleryImg.lable} className='gallery__grid-img' />
                    <div className='gallery__button-left' onClick={goToNextPicture}>
                        <FaAngleLeft />
                    </div>
                    <div className='gallery__button-right' onClick={goToBackPicture}>
                        <FaAngleRight />
                    </div>
                    <p className='gallery__grid-item-title'>Пайка</p>

                </div>
                <div className="gallery__grid-item">
                    <img src={one} alt="" className='gallery__grid-img' />
                    <p className='gallery__grid-item-title'>Пайка</p>
                </div>
                <div className="gallery__grid-item">
                    <img src={one} alt="" className='gallery__grid-img' />
                    <p className='gallery__grid-item-title'>Пайка</p>
                </div>
                {/* <div className="gallery__grid-item"></div>
                <div className="gallery__grid-item"></div>
                <div className="gallery__grid-item"></div> */}
            </div>
        </section>
    )
}

export default Gallery