import React from 'react'
import './Gallery.css'

const Gallery = () => {
    return (
        <div className='gallery'>
            <div className='gallery__header'>
                <div className='gallery__header-line'></div>
                <h2 className='gallery__header-title'>ГАЛЕРЕЯ РАБОТ</h2>
                <div className='gallery__header-line'></div>
            </div>
            <div className="gallery__grid">
              <div className="gallery__grid-item"></div>
              <div className="gallery__grid-item"></div>
              <div className="gallery__grid-item"></div>
              <div className="gallery__grid-item"></div>
              <div className="gallery__grid-item"></div>
              <div className="gallery__grid-item"></div>
            </div>
        </div>
    )
}

export default Gallery