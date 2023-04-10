import styles from '@/styles/modules/ProductInformation.module.scss';

const ProductInformation = () => {
  return (
    <div className={styles['product-description']}>
      <h2 className={styles['product-description__main-title']}>
        Product details
      </h2>
      <div className={styles['product-description__content-desc']}>
        Our 300 AirDry Dishwasher finishes each cycle with a breath of fresh
        air, performing 3x better than closed-door systems. The door opens
        automatically during the drying phase using fresh air to get plates and
        cutlery completely dry.
      </div>
    </div>
  );
};

export default ProductInformation;
