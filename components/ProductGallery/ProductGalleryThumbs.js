import CarouselComponent from "./CarouselComponent";

const ProductGalleryThumbs = (props) => {
    return ( 
        <div className="product-gallery-thumbs product-gallery-thumbs--center is-loaded">
            <CarouselComponent swiperClass={`swiper-container-thumbs`}>
                {props.children}
            </CarouselComponent>
        </div>
     );
}
 
export default ProductGalleryThumbs;