import React from 'react';
import logo from './HW2.png';
import { Spring } from 'react-spring/renderprops';

function Project_1() {
    return (
        <Spring
            from={{ opacity: 0, marginTop: -500}}
            to={{ opacity: 1, marginTop : 0}}>
                {props => (
                <div style={props}>
            <div className="projectstyle">
        <h3>
            FavLinks project
        </h3>
        <img className="projectImg" src={logo} alt="HW2_picture" />
            
        <p>For this project, every student in the class received react code that came with code in it.</p>
        <p>Next, we had to figure out how to utilize this code in order to make an app that lets the viewer fill a form.</p>
        <p>Then, whatever that form filled out, we send the values onto an array that its in the code, which is then later added to a table.</p>
        <p>Finally, the information given from the form shows on the table and can be deleted at any time.</p>
        <h6>(This is still a work in progress and needs to be completed)</h6>
        <div>
        <a href="https://github.com/Bello2441/HW2"> Click here to see my repo for favLinks</a>
        </div>
        </div>
        </div>
                )}
        </Spring>
    );
}

export default Project_1;
