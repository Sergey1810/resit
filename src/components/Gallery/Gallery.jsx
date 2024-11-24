import React, { useState } from 'react'
import './Gallery.css'
import one from '../../images/1.png'
import two from '../../images/2.png'
import three from '../../images/3.png'
import four from '../../images/4.png'
import oneB from '../../images/1b.png'
import twoB from '../../images/2b.png'
import oneP from '../../images/1p.png'
import twoP from '../../images/2p.png'
import threeP from '../../images/3p.png'
import fourP from '../../images/4p.png'
import oneCh from '../../images/1Ch.png'
import twoCh from '../../images/2Ch.png'
import threeCh from '../../images/3Ch.png'
import fourCh from '../../images/4Ch.png'

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
        {
            imgPath: `${four}`,
            lable: 'paika'
        },
    ]

    const GalleryImgTwo = [
        {
            imgPath: `${oneB}`,
            lable: 'paika'
        },
        {
            imgPath: `${twoB}`,
            lable: 'paika'
        },
        {
            imgPath: `${three}`,
            lable: 'paika'
        },
        {
            imgPath: `${four}`,
            lable: 'paika'
        },
    ]

    const GalleryImgThree = [
        {
            imgPath: `${oneP}`,
            lable: 'paika'
        },
        {
            imgPath: `${twoP}`,
            lable: 'paika'
        },
        {
            imgPath: `${threeP}`,
            lable: 'paika'
        },
        {
            imgPath: `${fourP}`,
            lable: 'paika'
        },
    ]

    const GalleryImgFour = [
        {
            imgPath: `${oneCh}`,
            lable: 'paika'
        },
        {
            imgPath: `${twoCh}`,
            lable: 'paika'
        },
        {
            imgPath: `${threeCh}`,
            lable: 'paika'
        },
        {
            imgPath: `${fourCh}`,
            lable: 'paika'
        },
    ]

    const [index, setActiveStep] = useState(0);
    const [indexTwo, setActiveStepTwo] = useState(0);
    const [indexThree, setActiveStepThree] = useState(0);
    const [indexFour, setActiveStepFour] = useState(0);

    const goToNextPicture = () => {
        if (index > 0) {
            setActiveStep(index-1);
        } else {
            setActiveStep(3)
        }
    };
    const goToBackPicture = () => {
        if (index < 3) {
            setActiveStep(index + 1);
        } else {
            setActiveStep(0)
        }
    };

    
    const goToNextPictureTwo = () => {
        if (indexTwo > 0) {
            setActiveStepTwo(indexTwo-1);
        } else {
            setActiveStepTwo(1)
        }
    };
    const goToBackPictureTwo = () => {
        if (indexTwo < 1) {
            setActiveStepTwo(indexTwo+ 1);
        } else {
            setActiveStepTwo(0)
        }
    };

    const goToNextPictureThree = () => {
        if (indexThree > 0) {
            setActiveStepThree(indexThree-1);
        } else {
            setActiveStepThree(3)
        }
    };
    const goToBackPictureThree = () => {
        if (indexThree < 3) {
            setActiveStepThree(indexThree + 1);
        } else {
            setActiveStepThree(0)
        }
    };

    const goToNextPictureFour = () => {
        if (indexFour > 0) {
            setActiveStepFour(indexFour-1);
        } else {
            setActiveStepFour(3)
        }
    };
    const goToBackPictureFour = () => {
        if (indexFour < 3) {
            setActiveStepFour(indexFour + 1);
        } else {
            setActiveStepFour(0)
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
                    <p className='gallery__grid-item-title'>Ремонт телефонов</p>

                </div>


                <div className="gallery__grid-item">
                <img src={GalleryImgTwo[indexTwo].imgPath} alt={GalleryImgTwo.lable} className='gallery__grid-img' />
                    <div className='gallery__button-left' onClick={goToNextPictureTwo}>
                        <FaAngleLeft />
                    </div>
                    <div className='gallery__button-right' onClick={goToBackPictureTwo}>
                        <FaAngleRight />
                    </div>
                    <p className='gallery__grid-item-title'>Bios</p>
                </div>


                <div className="gallery__grid-item">
                <img src={GalleryImgThree[indexThree].imgPath} alt={GalleryImgThree.lable} className='gallery__grid-img' />
                    <div className='gallery__button-left' onClick={goToNextPictureThree}>
                        <FaAngleLeft />
                    </div>
                    <div className='gallery__button-right' onClick={goToBackPictureThree}>
                        <FaAngleRight />
                    </div>
                    <p className='gallery__grid-item-title'>Ремонт плат</p>
                </div>

                <div className="gallery__grid-item">
                <img src={GalleryImgFour[indexFour].imgPath} alt={GalleryImgFour.lable} className='gallery__grid-img' />
                    <div className='gallery__button-left' onClick={goToNextPictureFour}>
                        <FaAngleLeft />
                    </div>
                    <div className='gallery__button-right' onClick={goToBackPictureFour}>
                        <FaAngleRight />
                    </div>
                    <p className='gallery__grid-item-title'>Ремонт/чистка игровых приставок</p>
                </div>
                {/* <div className="gallery__grid-item"></div>
                <div className="gallery__grid-item"></div>
                <div className="gallery__grid-item"></div> */}
            </div>
        </section>
    )
}

export default Gallery