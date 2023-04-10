import SwiperComponent from '../Swiper/index';
const ProductGallery = (props: any) => {
  if (props && props.gallery) {
    return <SwiperComponent items={props.gallery} />;
  }
  return <></>
};

export default ProductGallery;
