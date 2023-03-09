import Image from 'next/future/image'
import styles from '../../styles/module-styles/BenefitsProps.module.scss'

const BenefitsProps = ({data}) => {
    const benefits = data.items
    return ( 
        <div className="BenefitsProps">
            <section className={styles['benefit-area']}>
                <div className={styles['swiper-container-benefit']}>
                    <div className={styles['swiper-wrapper']}>
                        {benefits && benefits.map((item, i) => (
                            <div key={i} className={styles['benefit-area__item']+' '+styles['benefit-area__item--fifty-fifty']}>
                                <div data-component="FiftyFifty" className={styles.fiftyfifty}>
                                    <div className={styles['fiftyfifty__column']+' '+styles['fiftyfifty__column--media']}>
                                        <div className={styles['fiftyfifty__media']}>
                                            <Image
                                                alt={item.AltImageText}
                                                src={item.MediaUrl}
                                                className={styles['fiftyfifty__image--constrained']}
                                                width={400}
                                                height={400}
                                            />
                                        </div>
                                    </div>
                                    <div className={styles['fiftyfifty__column']+' '+styles['fiftyfifty__column--text']}>
                                        <div className={styles['fiftyfifty__text']}>
                                            <h2>{item.Heading}</h2>
                                            <div className={styles['fiftyfifty__rte']}>
                                                <p>{item.Body}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
     );
}
 
export default BenefitsProps;