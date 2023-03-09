const KeySpecification = ({data}) => {
    const specifications = data?.keySpecification
    return ( 
        <div className="tech-specs__block tech-specs__block--active">
            <div className="tech-specs__content">
                <div className="tech-specs__content-text-container tech-specs--key-specifications">
                    {specifications && specifications.map((spec, i)=> (
                        <div key={i} className="tech-specs__content-wrapper">
                            <div className="tech-specs__content-title">
                                {spec.Name}
                            </div>
                            <div className="tech-specs__content-details">
                                {spec.Value}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
     );
}
 
export default KeySpecification;