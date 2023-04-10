/* eslint-disable @typescript-eslint/no-explicit-any */
import styles from '@/styles/modules/ProductContent.module.scss';

import { publish } from '@/events';
import { useEffect, useState } from 'react';

interface ProductInformationInterface {
  gallery: any;
  price: string;
  productCode: string;
  productHeading: string;
  productId: string;
  productName: string;
}

const ProductInformation = (props: ProductInformationInterface) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const addToCart = () => {
    if (typeof localStorage !== 'undefined') {
      try {
        const cartItemsString = localStorage.getItem('cartItems');
        if (cartItemsString) {
          const cartItems = JSON.parse(cartItemsString);
          const itemIndex = cartItems.findIndex(
            (i: ProductInformationInterface) =>
              i.productCode === props.productCode
          );

          if (itemIndex > -1) {
            cartItems[itemIndex].quantity += 1;
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
            publish('addToCart', cartItems[itemIndex]);
            return;
          }
          cartItems.push({ ...props, quantity: 1 });
          localStorage.setItem('cartItems', JSON.stringify(cartItems));
          publish('addToCart', null);
          return;
        }
        localStorage.setItem(
          'cartItems',
          JSON.stringify([{ ...props, quantity: 1 }])
        );
        publish('addToCart', { ...props, quantity: 1 });
      } catch (e) {
        localStorage.removeItem('cartItems');
      }
    }
  };
  return (
    <div className="productDescription">
      <div className="product-landing-title">
        <div className={styles['product-landing__model-id']}>
          {props.productCode}
        </div>
        <div className={styles['product-landing__model-name']}>
          {props.productName}
        </div>
        <div
          className={styles['product-landing__description-link']}
          data-component="ScrollTo"
          data-scroll-to-target=".product-description"
        >
          <span className={styles['product-landing__description-link-text']}>
            Product Information
          </span>
          <span className={styles['product-landing__description-link-icon']}>
            <svg
              viewBox="0 0 20 20"
              className="SvgIcon SvgIcon--circle-chevron-down"
            >
              <circle cx="10" cy="10" r="10"></circle>
              <path d="M6 8.907l4.519 4.303L15 8.907 14.21 8l-3.691 3.637L6.789 8 6 8.907z"></path>
            </svg>
          </span>
        </div>
      </div>
      <div className={styles['product-landing__meta']}>
        <div className={styles['product-landing__rating-energy']}>
          <div className={styles.rating}>
            <div className={styles['ratingMeter--stars']}>
              <span className={styles.ratingBar}></span>
              <p className={styles.ratingReviews}>0 (0)</p>
            </div>
          </div>
        </div>
        <div className={styles['D2CPDP-StockPrice']}>
          <div className={styles['D2CPDP-StockPrice-Left']}>
            {loading ? (
              <div className={styles['price-loading-skeleton']}></div>
            ) : (
              <div className={styles['D2CPDP-StockPrice-Stock']}>
                <span
                  className={
                    styles['D2CPDP-StockPrice-StockLevel'] +
                    ' ' +
                    styles['D2CPDP-StockPrice-StockLevel--2']
                  }
                ></span>
                <span className={styles['D2CPDP-StockPrice-StockMessage']}>
                  In Stock
                </span>
              </div>
            )}
          </div>
          <div className={styles['D2CPDP-StockPrice-Right']}>
            {loading ? (
              <div className={styles['price-loading-skeleton']}></div>
            ) : (
              <div className={styles['D2CPDP-StockPrice-SellPrice']}>
                {props.price}
              </div>
            )}

            <div className={styles['D2CPDP-StockPrice-DisclaimerText']}>
              IVA inclusa
            </div>
            <div className={styles['D2CPDP-StockPrice-ListPrice']}>
              <button className={styles['D2CPDP-StockPrice-Info']}>
                <svg viewBox="0 67 26 26" fill="#7b8a9c" width={16} height={16}>
                  <path d="M13 70.329c5.344 0 9.67 4.326 9.67 9.671s-4.323 9.671-9.67 9.671A9.665 9.665 0 013.33 80 9.665 9.665 0 0113 70.329m0-2.33C6.372 67.999 1 73.373 1 80s5.372 12.001 12 12.001S25 86.627 25 80s-5.372-12.001-12-12.001zM14.738 86.5H11.38v-7.98h3.358v7.98zm-1.679-9.631a1.848 1.848 0 11-.001-3.697 1.848 1.848 0 01.001 3.697z"></path>
                </svg>
              </button>
              <span className={styles['D2CPDP-StockPrice-PriceTag']}>
                € 1509,99
              </span>
              <span className={styles['D2CPDP-StockPrice-Savings']}>
                <span> Risparmia 180€ </span>
              </span>
            </div>
          </div>
        </div>
        <button className={styles['D2C-AddToBasketButton']} onClick={addToCart}>
          <span className={styles['D2C-AddToBasketButton-Text']}>
            <svg
              data-name="Layer 1"
              viewBox="0 0 32.16 26.09"
              className="SvgIcon SvgIcon--basket"
            >
              <g strokeWidth="2">
                <path d="M16.08 8.47H1.27l4 16.63h21.7l4-16.63zM23.71 8.29a7.41 7.41 0 00-14.82 0"></path>
              </g>
            </svg>
            <span className={styles['D2C-AddToBasketButton--btn']}>
              Add to cart
            </span>
          </span>
          <span className="loader" style={{ display: 'none' }}></span>
        </button>
        <div className={styles.retailers}>
          <span className={styles['OnlineRetailers-title']}>
            The product is also available from *
          </span>
        </div>
        <button className={styles['D2C-FindStoreButton']}>
          <span className={styles['D2C-FindStoreButton-Text']}>
            <svg viewBox="0 3 14 21" className="SvgIcon SvgIcon--marker">
              <path d="M7 3.9c-3.314 0-6 2.723-6 6.081S3.626 17.244 7 23.1c3.373-5.855 6-9.76 6-13.118S10.314 3.9 7 3.9zm0 8.115c-1.188 0-2.152-.977-2.152-2.181 0-1.205.964-2.18 2.152-2.18 1.188 0 2.152.976 2.152 2.181 0 1.204-.964 2.18-2.152 2.18z"></path>
            </svg>
            <span>Find Store</span>
          </span>
          <span className="loader" style={{ display: 'none' }}></span>
        </button>
      </div>
    </div>
  );
};

export default ProductInformation;
