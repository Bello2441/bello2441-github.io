import React from 'react';
import {Spring} from 'react-spring/renderprops'

function Project_2() {
    return (
            <Spring 
            from={{ opacity: 0, marginTop: -500}}
            to={{ opacity: 1, marginTop : 0}}>
                {props =>(
                    <div style={props}>
                        <div>
                            <h3>A Design Pad</h3>
                        </div>
                    </div>
    
    )}
            </Spring>
    )
    }
    
export default Project_2;