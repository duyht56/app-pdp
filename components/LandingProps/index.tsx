import styles from '@/styles/modules/LandingProps.module.scss';
// import { Button } from '@vunguyen/components';
import ProductGallery from '../ProductGallery';
import ProductContent from '@/components/ProductContent';
import D2CServices from '@/components/D2CServices';
import { Suspense } from 'react';

const LandingProps = (props) => {
  return (
    <div className={styles['product-landing']}>
      {/* <Button label="Button from library" />
      <div>
        <h6 className={styles['product-landing__main-title']}>
          LandingProps component from PDP mFE
        </h6>
      </div> */}
      <div className={styles['product-landing__container']} style={
                {
                  display: 'grid',
                  padding: '0 20px',
                  maxWidth: '1440px',
                  margin: '0 auto',
                  gridGap: '20px',
                  gridTemplateColumns: '571px minmax(142px,496px)',
                  position: 'relative',
        
        
                }
      }>
        <div className={styles['product-landing__left']}>
          <Suspense fallback={<p>Loading...</p>}>
            <ProductGallery {...props}/>
          </Suspense>
        </div>
        <div className={styles['product-landing__right']}>
          <Suspense fallback={<p>Loading...</p>}>
            <ProductContent {...props}/>
          </Suspense>
          <Suspense fallback={<p>Loading...</p>}>
            <D2CServices {...props}/>
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default LandingProps;
