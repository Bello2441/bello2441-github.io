import React from 'react';
import {Spring} from 'react-spring/renderprops'
import logo from './design-pad.png';

function Project_2() {
    return (
            <Spring 
            from={{ opacity: 0, marginTop: -500}}
            to={{ opacity: 1, marginTop : 0}}>
                {props =>(
                    <div style={props}>
                        <div className="projectstyle">
                            <h3>My Design Pad</h3>
                            <img className="projectImg2" src={logo} alt="HW3"/>
                            <p>This was a project that every student had to start from scratch with no other boiler templates.</p>
                            <p>So I created the heading and the pad look so I have a visual of what I am looking at.</p>
                            <p>Then I created the edit button which changes color everytime it is clicked and specifies if the pad can be editted.</p>
                            <p>Last, I created the input numbers which when the inputs are dragged to a pad, they would change color.</p>
                            <p>Sadly, I still have yet to finish this project and still adding to it.</p>
                            <a href="https://github.com/Bello2441/design-pad/tree/Development">Click here to see the repo</a>
                        </div>
                    </div>
    
    )}
            </Spring>
    )
    }
    
export default Project_2;