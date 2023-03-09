import Tab from './SpecTab'
import Tabs from './SpecTabs';
import FullSpecification from './FullSpecification';
import KeySpecification from './KeySpecification';

const DetailProps = ({data}) => {
    return ( 
        <div>
            <Tabs>
                {data.specItems && data.specItems.map((item, i)=> (
                    <Tab key={i} title={item.contentName}>
                        {item.name === 'fullSpecification' && (
                            <FullSpecification data={item.props} />
                        )}
                        {item.name === 'keySpecification' && (
                            <KeySpecification data={item.props} />
                        )}
                    </Tab>
                ))}
            </Tabs>
        </div>
     );
}
 
export default DetailProps;