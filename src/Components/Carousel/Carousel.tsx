import React, { useEffect, useState } from 'react';
import './Carousel.css';

const Carousel = ({ slides }: { slides: any }) => {

    const [current, setCurrent] = useState(0);
    const length = slides.length;

    
    
    // const goLeft = () => {
    //     setCurrent(current === 0 ? length - 1 : current - 1);
    // };

    useEffect(()=>{
        const goRight = () => {
            setCurrent(current === length - 1 ? 0 : current + 1);
        };

        setTimeout(goRight, 3000);
    }, [current, length]);

    if (!Array.isArray(slides) || length <= 0) {
        return null;
    }

    return (
        <div className='carousel'>
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
