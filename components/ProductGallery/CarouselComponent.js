import { useEffect } from 'react'
import {Swiper} from 'swiper'

const CarouselComponent = (props) => {
    const initCarousel = () => {
        const carouselInstance = new Swiper(`.${props.swiperClass}`, {
            slidesPerView: 'auto'
        })
    }
    useEffect(()=> {
        initCarousel();
    })
    return ( 
        <div className={props.swiperClass}>
            <div className="swiper-wrapper">
                {props.children}
            </div>
        </div>
     );
}
 
export default CarouselComponent;