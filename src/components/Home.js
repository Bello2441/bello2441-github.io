import React from 'react';
import logo from './the_hulk.jpeg';
import { Spring } from 'react-spring/renderprops';

class Home extends React.Component {
    render() {
        return (
        <div className="App">
            <h1 className="headStyle">Home page</h1>
            <p>Hello, my name is Rosenberg Bello and this is my portfolio.</p>
            <p>This is my first multi-page website using react!</p>
            <p>I hope anyone viewing enjoys what I did</p> 
            <p>and I will update as soon as I can.</p>    
            <img className="homeImg" src={logo} alt="image_of_me" />
            <Spring
            from={{ opacity: 0, marginTop: -500}}
            to={{ opacity: 1, marginTop : 0}}
        >
            {props => (
                <div style={props}>
                    <div style={c1Style}>
                        <h1>Hello Viewer! How you doing today?</h1>
                    </div>
                </div>
            )}
        </Spring>
        </div>
        
        );
    }
}

const c1Style ={
    background : 'red',
    color : 'yellow',
    padding : '1.5rem'
}

export default Home;
