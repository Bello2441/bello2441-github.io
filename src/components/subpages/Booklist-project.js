import React from 'react';
import {Spring} from 'react-spring/renderprops';
import logo from './Booklist.png';

function Project_3() {
    return(
        <Spring 
        from={{ opacity: 0, marginTop: -500}}
            to={{ opacity: 1, marginTop : 0}}>
                {props => (
                <div style={props}>
                    <div className="projectstyle">
                        <h3>Booklist Project</h3>
                        <img className="projectImg" src={logo} alt="practice_project"/>
                        <p>This is a project that I have on the side and mainly used for practice.</p>
                        <p>I am following a ten-hour crash course video on react and this is what the project is about.</p>
                        <p>While making this, I thought "why not add it to my github?" So when I am done with it, people can bsee how good it looks.</p>
                        <a href="https://github.com/Bello2441/Booklist">Click here to see the repo on Github</a>
                    </div>
                </div>
                )}
        </Spring>
    )

}

export default Project_3;