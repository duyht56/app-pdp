import styles from '../../styles/module-styles/ProductInformation.module.scss'
const ProductInformation = ({data}) => {
    return ( 
        <div className={styles['product-description']}>
            <h2 className={styles['product-description__main-title']}>Product information</h2>
            <div className={styles['product-description__content-desc']}>
                {data.Description}
            </div>
        </div>
     );
}
 
export default ProductInformation;