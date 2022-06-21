import React, { useEffect, useState } from 'react';
import './Carousel.css';
// import { FaArrowAltCircleLeft ,FaArrowAltCircleRight } from 'react-icons/fa';

const Carousel = ({ slides }: { slides: any }) => {

    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const goRight = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };
    
    // const goLeft = () => {
    //     setCurrent(current === 0 ? length - 1 : current - 1);
    // };

    useEffect(()=>{
        setTimeout(goRight, 3000);
    }, [current]);

    if (!Array.isArray(slides) || length <= 0) {
        return null;
    }

    return (
        <div className='carousel'>
            {/* <FaArrowAltCircleLeft className='left arrow-icon' onClick={goLeft} />
            <FaArrowAltCircleRight className='right arrow-icon' onClick={goRight} /> */}
            {slides.map((slide, index) => {
                return (
                    <div className={index === current ? 'slide active' : 'slide'} key={index}>

                        {index === current && (
                            <img src={slide.images} alt='indian snack images' className='image' />
                        )}


                    </div>

                );
            })}
        </div>
    );
}

export default Carousel;
