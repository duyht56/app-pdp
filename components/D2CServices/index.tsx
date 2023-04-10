import styles from '@/styles/modules/D2CServices.module.scss';

const D2CServices = () => {
    return ( 
        <div className="D2C-Services-Wrapper">
            <div className={styles['D2C-Service']}>
                <div className={styles['D2C-Service-Text']}>
                    Consegna al piano terra (consegna in 5-7 giorni lavorativi)
                </div>
                <div className={styles['D2C-Service-Text']}>
                    Consegna al piano (consegna in 5-7 giorni lavorativi)
                </div>
                <div className={styles['D2C-Service-Text']}>
                    Installazione
                </div>
                <div className={styles['D2C-Service-Text']}>
                    Estensione di garanzia e danni accidentali
                </div>
            </div>
        </div>
    );
};
  
  export default D2CServices;
  