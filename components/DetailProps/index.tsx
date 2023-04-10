import Tab from './SpecTab';
import Tabs from './SpecTabs';
import styles from '@/styles/modules/DetailProps.module.scss';
const dataDemo = {
  specItems: [
    {
      name: 'fullSpecification',
      id: 0,
      contentName: 'Fullständig specifikation',
      props: {
        fullSpecification: [
          {
            Name: '',
            Items: [
              { Name: 'Specialdesignat program för siden', Value: '' },
              {
                Name: 'Anpassar tvättprogrammen efter mängden tvätt',
                Value: '',
              },
              { Name: 'Fördröjd start', Value: '' },
              { Name: 'Sköljning med skumavkänning', Value: '' },
              { Name: 'Barnlås', Value: '' },
              { Name: '4 ställbara fötter', Value: '' },
              { Name: 'Översvämningsskydd', Value: '' },
              {
                Name: 'Tvättprogram: Siden|Täcken|Sköljning|Tömning|Centrifugering|Jeans|Gardiner|Sport',
                Value: '',
              },
              {
                Name: 'Övriga indikatorer: Temp. 5 nivåer|Kallt|Spin 4 levels|Ingen centrifugering|Sköljstopp|Senare start 3 timmar|6/|9 tim|Förtvätt|Snabbtvätt|Senare start|Extra sköljning|Start/Paus ',
                Value: '',
              },
            ],
          },
          {
            Name: 'Installation',
            Items: [
              { Name: 'Färg, panel', Value: 'Vit' },
              { Name: 'Färg', Value: 'Vit' },
              { Name: 'Produktmått H x B x D, mm', Value: '843x595x338' },
              { Name: 'Max djup, mm', Value: '372' },
              { Name: 'Färg', Value: 'White' },
              { Name: 'Säkring, A', Value: '10' },
              { Name: 'Tilloppsslang, cm', Value: '130' },
              { Name: 'Längd tömningsslang, cm', Value: '197' },
              { Name: 'Färg', Value: 'Vit' },
              { Name: 'Vattenanslutning', Value: 'Kallt' },
              { Name: 'Nettovikt, kg', Value: '53.5' },
            ],
          },
          {
            Name: 'Other',
            Items: [
              { Name: 'Program, språk', Value: 'Engelska' },
              { Name: 'Frontlucka', Value: 'D White L' },
              { Name: 'Display', Value: 'BF LED display' },
              {
                Name: 'Funktion tryckknappar',
                Value:
                  'Till/Från, Temperatur, Centrifugvarvtal, Förtvätt, Snabb, Senare start, Extra sköljning, Start/Paus',
              },
              { Name: 'DrumTypeCode', Value: 'CFS3.5H' },
              { Name: 'Invändig belysning', Value: 'Nej' },
              {
                Name: 'Indikatorer, övriga ',
                Value:
                  'Temp. 5 nivåer, Kallt, Spin 4 levels, Ingen centrifugering, Sköljstopp, Senare start 3 timmar, 6/, 9 tim, Förtvätt, Snabbtvätt, Senare start, Extra sköljning, Start/Paus',
              },
              { Name: 'Woolmark-certifiering', Value: 'Woolmark Blue' },
              { Name: 'Sladdlängd, (ca) m', Value: '2.45' },
              { Name: 'Spänning, V', Value: '230' },
              { Name: 'Tvätteknik', Value: 'Eco-ventil' },
              {
                Name: 'Extra fördelar som ingår',
                Value:
                  'Barnlås, BottomCover, Extra sköljning, Spärr för flytande tvättmedel',
              },
              { Name: 'Översvämningsskydd', Value: 'Pressostat' },
              { Name: 'EAN-kod', Value: '7332543656752' },
            ],
          },
          {
            Name: 'Performance',
            Items: [
              { Name: 'Trumvolym, liter', Value: '32' },
              { Name: 'Motorsystem', Value: 'Standard' },
              { Name: 'Tvättkapacitet, kg', Value: '4' },
              { Name: 'Ljudnivå tvätt, IEC7043 dB(A)', Value: '58' },
              { Name: 'Sensorer', Value: '-' },
            ],
          },
          {
            Name: 'Energy',
            Items: [
              { Name: 'EnergyClassE20', Value: 'F' },
              { Name: 'Årlig energikonsumtion, kWh', Value: '142' },
              { Name: 'Total effekt, W', Value: '2000' },
            ],
          },
        ],
      },
    },
    {
      name: 'keySpecification',
      id: 0,
      contentName: 'Nyckelspecifikationer',
      props: {
        keySpecification: [
          { Name: 'Färg, panel', Value: 'Vit' },
          { Name: 'Program, språk', Value: 'Engelska' },
          { Name: 'Frontlucka', Value: 'D White L' },
          { Name: 'Display', Value: 'BF LED display' },
          { Name: 'Färg', Value: 'Vit' },
          {
            Name: 'Funktion tryckknappar',
            Value:
              'Till/Från, Temperatur, Centrifugvarvtal, Förtvätt, Snabb, Senare start, Extra sköljning, Start/Paus',
          },
          { Name: 'DrumTypeCode', Value: 'CFS3.5H' },
          { Name: 'Trumvolym, liter', Value: '32' },
        ],
      },
    },
  ],
};
const DetailProps = ({ data = dataDemo }) => {
  return (
    <Tabs>
      {data.specItems &&
        data.specItems.map((item, i) => (
          <Tab key={i} title={item.contentName}>
            {item.name === 'fullSpecification' && (
              <div className={styles['tech-specs__block']}>
                <div className={styles['tech-specs__content']}>
                  <div className={styles['tech-specs__section']}>
                    <div className={styles['tech-specs__section-column']}>
                      {item.props.fullSpecification &&
                        item.props.fullSpecification.map((spec, i) => (
                          <div
                            key={i}
                            className={styles['tech-specs__section-column-content-box']}>
                            <h5 className={styles['tech-specs__section-column-title']}>
                              {spec.name}
                            </h5>
                            <ul className={styles['tech-specs__list']}>
                              {spec.Items &&
                                spec.Items.map((item, j) => (
                                  <li key={j} className={styles['tech-specs__list-item']}>
                                    <strong className={styles['tech-specs__list-item-label']}>
                                      {item.Name}
                                    </strong>
                                    {item.Value}
                                  </li>
                                ))}
                            </ul>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
            {item.name === 'keySpecification' && (
              <div className={`${styles['tech-specs__block']} ${styles['tech-specs__block--active']}`}>
                <div className={styles['tech-specs__content']}>
                  <div className={`${styles['tech-specs__content-text-container']} ${styles['tech-specs--key-specifications']}`}>
                    {item.props.keySpecification &&
                      item.props.keySpecification.map((spec, i) => (
                        <div key={i} className={styles['tech-specs__content-wrapper']}>
                          <div className={styles['tech-specs__content-title']}>
                            {spec.Name}
                          </div>
                          <div className={styles['tech-specs__content-details']}>
                            {spec.Value}
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            )}
          </Tab>
        ))}
    </Tabs>
  );
};

export default DetailProps;
