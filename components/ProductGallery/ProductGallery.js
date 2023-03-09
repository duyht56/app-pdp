import React, { useEffect, useLayoutEffect, useState } from "react";
import Image from 'next/future/image'
import ProductSlides from "./ProductSlides";

const ProductGallery = ({gallery}) => {
    const [isMobile, setMobile] = useState(false)
    // useLayoutEffect(()=> {
    //     //setMobile(window.matchMedia('only screen and (max-width: 420px)').matches)
    //     console.log(window.matchMedia('only screen and (max-width: 420px)').matches)
    // })
    return ( 
        <div className="product-landing__gallery product-landing__gallery--new">
            <div className="productGallery">
                <ProductSlides>
                    <React.Fragment>
                        {gallery && gallery.map((item, index)=> (
                            <figure key={index} className="product-gallery__main-item swiper-slide">
                                <a>
                                    <Image
                                     alt={item.AltText}
                                     className="product-gallery__main-item-media"
                                     src={item.Url}
                                     width={500}
                                     height={500}
                                    />
                                </a>
                            </figure>
                        ))}
                    </React.Fragment>
                    <React.Fragment>
                        {gallery && gallery.map((item, index)=> (
                           <figure key={index} className="product-gallery-thumbs__item swiper-slide">
                                <Image
                                    alt={item.AltText}
                                    className="product-gallery-thumbs__item-media"
                                    src={item.Url}
                                    width={160}
                                    height={160}
                                />
                           </figure> 
                        ))}
                    </React.Fragment>
                </ProductSlides>
            </div>
            <style jsx>{`
                figure {
                    margin: 0;
                    padding: 0;
                }
            `}</style>
        </div>
     );
}
 
export default ProductGallery;