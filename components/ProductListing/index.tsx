import styles from '@/styles/modules/ProductListing.module.scss';
import Link from 'next/link';
import Image from 'next/image';

interface IProduct {
  price: string;
  gallery: { Url: string }[];
  productCode: string;
  productHeading: string;
  productId: string;
  productName: string;
}

const ProductListing = ({ products }: { products: IProduct[] }) => {
  console.log(products);
  return (
    <div className={styles['ProductListing']}>
      {products?.length &&
        products.map(product => {
          return (
            <Link
              href={`/sv-se/laundry/washing-machines/compact-washing-machine/${product.productCode.toLowerCase()}/`}
              key={product.productCode}
              className={styles['ProductListing__Container']}
            >
              <div className={styles['ProductListing__Image']}>
                <img fetchpriority='high' width={279} height={279} src={product.gallery[0]?.Url} />
              </div>
              <div className={styles['ProductListing__Model']}>
                {product.productCode}
              </div>
              <div className={styles['ProductListing__Name']}>
                {product.productName}
              </div>
              <div className={styles['ProductListing__Expand']}>
                <div className={styles['ProductListing__Expand__Item']}>
                  <div className={styles['ProductListing__Expand__Item__key']}>
                    Capacità (Kg)
                  </div>
                  <div
                    className={styles['ProductListing__Expand__Item__value']}
                  >
                    6
                  </div>
                </div>
                <div className={styles['ProductListing__Expand__Item']}>
                  <div className={styles['ProductListing__Expand__Item__key']}>
                    Centrifuga Max (giri/min)
                  </div>
                  <div
                    className={styles['ProductListing__Expand__Item__value']}
                  >
                    1151
                  </div>
                </div>
                <div className={styles['ProductListing__Expand__Item']}>
                  <div className={styles['ProductListing__Expand__Item__key']}>
                    Design
                  </div>
                  <div
                    className={styles['ProductListing__Expand__Item__value']}
                  >
                    Display LCD con Touch Control
                  </div>
                </div>
              </div>
              <div className={styles['ProductListing__Footer']}>
                <div className={styles['ProductListing__Footer__Price']}>
                  <span
                    className={styles['ProductListing__Footer__Price__price']}
                  >
                    € 399,90
                  </span>
                  <div
                    className={
                      styles['ProductListing__Footer__Price__disclaimer']
                    }
                  >
                    IVA inclusa
                  </div>
                  {/* <div className={styles['ProductListing__Footer__Price__promotion']}>
                    <div>Risparmia 110€</div>
                    <span>€ 509,99</span>
                  </div> */}
                  <div className={styles['ProductListing__Footer__Price__stock']}>
                    <div></div>
                    <span>Disponibile</span>
                  </div>
                </div>

                <div className={styles['ProductListing__Footer__Add']}></div>
              </div>
            </Link>
          );
        })}
    </div>
  );
};

export default ProductListing;
