import React, { useEffect } from 'react'
import { useState } from "react";

const Tabs = (props) => {
    const [tabs,setTabs] = useState(React.Children.toArray(props.children))
    const selectTab = (index) => {
        const newTabs = []
        tabs.forEach((tab, i)=> {
            newTabs.push(React.cloneElement(tab, {isActive: i === index}))
        })
        setTabs(newTabs)
    }
    const [selectedIndex, setSelectedIndex] = useState(0)
    const updateSelectedIndex = (index)=> {
        setSelectedIndex(()=> {
          return index
        })
        selectTab(index)

    }
    useEffect(()=> {
        selectTab(0)
    }, [])
    return ( 
        <div>
            <div className="tech-specs__navigation">
                <div>
                    <div className="tech-specs__tabs">
                        <div className="tech-specs__tabs-list tech-specs__tabs-list--141 swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events">
                            <ul className="swiper-wrapper">
                                {tabs && tabs.map((tab,index)=> (
                                    <li key={index} className={`tech-specs__tab swiper-slide ${(index === selectedIndex) ? 'swiper-slide-active': ''} `} style={{'width': '205.75px'}}>
                                        <button onClick={()=> updateSelectedIndex(index)} type="button" className={`tech-specs__tab-link tech-specs__tab-link ${index === selectedIndex ? 'tech-specs__tab-link--active': ''}`}>
                                            {tab.props.title}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* {props.children} */}
            {tabs}
        </div>
     );
}
 
export default Tabs;