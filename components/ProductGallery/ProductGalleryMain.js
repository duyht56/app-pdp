import CarouselComponent from "./CarouselComponent";

const ProductGalleryMain = (props) => {
    return ( 
        <div className="swiper product-gallery__main">
            <CarouselComponent swiperClass={`swiper-container-main`}>
                {props.children}
            </CarouselComponent>
            <button id="productGallery__prevButton" className="product-gallery__prevButton" aria-label="prevButton">
                <svg viewBox="0 0 54.4 54.4" className="SvgIcon SvgIcon--gallery-chevron-left">
                <circle cx="27.2" cy="27.2" r="27.2"></circle>
                    <path d="M32.06 15.05L20 26.55a.94.94 0 00-.09 1.29l.09.09 12.1 11.5 1.59-1.38-11.41-10.81 11.37-10.81z"
                    ></path>
                </svg>
            </button>
            <button id="productGallery__nextButton" className="product-gallery__nextButton" aria-label="nextButton">
                <svg viewBox="0 0 54.09 54.09" className="SvgIcon SvgIcon--gallery-chevron-right">
                <circle cx="27.05" cy="27.05" r="27.05"></circle>
                    <path d="M23.12 14.71l11 11.5a1 1 0 01.08 1.29l-.08.09-11 11.5-1.44-1.38L32 26.9 21.68 16.09z"
                    ></path>
                </svg>
            </button>
        </div>
     );
}
 
export default ProductGalleryMain;