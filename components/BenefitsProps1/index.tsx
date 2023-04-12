import Image from 'next/image'

import styles from '../../styles/modules/BenefitsProps1.module.scss';

const benefits = [
  {
    "Heading": "Dina kläder tvättas med omsorg",
    "Body": "Vår utmärkta PerfectCare 600 tvättmaskin med SensiCare System justerar längden på programmet efter tvättmängden, och använder mindre energi och vatten samt förhindrar att plaggen tvättas för länge. Aktiverar de mest ekonomiska programmen för även de minsta tvättmängderna.",
    "MediaUrl": "https://services.electrolux-medialibrary.com/118ed4c0ee6546f4a7684c7fef8c985aNrZmYkM861d1f/view/WS_ZO/PSEEWM200KA00005.png",
    "AltImageText": "Alt Text",
    "MediaAlt": null,
    "Video": null,
    "Image": null,
    "Link": null,
    "HasImage": true,
    "IsIcon": false,
    "Disclaimer": null,
    "HasDisclaimer": false,
    "Translations": null
  },
  {
    "Heading": "Anpassad tvättning på kortare tid",
    "Body": "Vårt SensiCare System anpassas efter tvättmängden för att förhindra att kläder tvättas för länge. Säkerställer att plaggen bevaras längre. ",
    "MediaUrl": "https://services.electrolux-medialibrary.com/118ed4c0ee6546f4a7684c7fef8c985aNrZmYkM861d1f/view/WS_ZO/PSEEWM17BIE00003.png",
    "AltImageText": "Alt Text",
    "MediaAlt": null,
    "Video": null,
    "Image": null,
    "Link": null,
    "HasImage": true,
    "IsIcon": false,
    "Disclaimer": null,
    "HasDisclaimer": false,
    "Translations": null
  },
  {
    "Heading": "Tvätta dina favoritkläder på bara 20 minuter!",
    "Body": "Det innebär färre sista-minuten-klädproblem med denna tvättmaskin. Snabbprogrammet tvättar lätt smutsad tvätt på bara 20 minuter. ",
    "MediaUrl": "https://services.electrolux-medialibrary.com/118ed4c0ee6546f4a7684c7fef8c985aNrZmYkM861d1f/view/WS_PN/PSEBDW15PC002029.png",
    "AltImageText": "Alt Text",
    "MediaAlt": null,
    "Video": null,
    "Image": null,
    "Link": null,
    "HasImage": true,
    "IsIcon": true,
    "Disclaimer": null,
    "HasDisclaimer": false,
    "Translations": null
  },
  {
    "Heading": "Tvätten blir klar när DU vill",
    "Body": "Planera inte dagen runt ditt tvättande. Med funktionen för fördröjd start kan du senarelägga starten på nästa program, så att det är färdigt precis när det passar dig.",
    "MediaUrl": "https://services.electrolux-medialibrary.com/118ed4c0ee6546f4a7684c7fef8c985aNrZmYkM861d1f/view/WS_ZO/PSEEFL18BIE00008.png",
    "AltImageText": "Alt Text",
    "MediaAlt": null,
    "Video": null,
    "Image": null,
    "Link": null,
    "HasImage": true,
    "IsIcon": false,
    "Disclaimer": null,
    "HasDisclaimer": false,
    "Translations": null
  },
  {
    "Heading": "Stor på klädvård men kompakt i storlek",
    "Body": "Dina kläder ser och känns underbara med den kompakta tvättmaskinen från Electrolux. Den flexibla designen sparar utrymme eftersom den passar in på ytor som är för små för maskiner av standardstorlek. Och utan att kompromissa på prestanda kan du fortfarande få bra resultat, varje gång du tvättar dina favoritplagg.",
    "MediaUrl": "https://services.electrolux-medialibrary.com/118ed4c0ee6546f4a7684c7fef8c985aNrZmYkM861d1f/view/WS_ZO/PSEEFL18SPE0001P.png",
    "AltImageText": "Alt Text",
    "MediaAlt": null,
    "Video": null,
    "Image": null,
    "Link": null,
    "HasImage": true,
    "IsIcon": false,
    "Disclaimer": null,
    "HasDisclaimer": false,
    "Translations": null
  }
];

const BenefitsProps1 = () => {
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
                                            priority
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
};

export default BenefitsProps1;
