import { useState } from "react";

const Tab = (props) => {
    return ( 
        <>
            {props.isActive && (
                <div className="tech-specs__container">
                {props.children}
                {console.log('Tbaaaaaa==>', props)}
            </div>
            )}
        </>
     );
}
 
export default Tab;