import styles from '../../styles/module-styles/FullSpecification.module.scss'

const FullSpecification = ({data}) => {
    const specifications = data?.fullSpecification
    return ( 
        <div className="tech-specs__block tech-specs__block--active">
            <div className="tech-specs__content">
                <div className="tech-specs__section">
                    <div className="tech-specs__section-column">
                        {specifications && specifications.map((spec, i)=> (
                            <div key={i} className="tech-specs__section-column-content-box">
                                <h5 className="tech-specs__section-column-title">
                                    {spec.name}
                                </h5>
                                <ul className="tech-specs__list">
                                    {spec.Items && spec.Items.map((item, j)=> (
                                        <li key={j} className="tech-specs__list-item">
                                            <strong className="tech-specs__list-item-label">
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
     );
}
 
export default FullSpecification;