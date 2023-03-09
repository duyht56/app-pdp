import ProductGalleryMain from "./ProductGalleryMain";
import ProductGalleryThumbs from "./ProductGalleryThumbs";

const ProductSlides = (props) => {
    return ( 
        <div className="product-landing__gallery">
            <div className="gallery">
                <div className="product-gallery is-loaded">
                    <ProductGalleryMain>
                        {props.children[0]}
                    </ProductGalleryMain>
                    <ProductGalleryThumbs>
                        {props.children[1]}
                    </ProductGalleryThumbs>
                </div>
            </div>
        </div>
     );
}
 
export default ProductSlides;