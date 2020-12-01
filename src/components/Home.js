import React from 'react';
import logo from './the_hulk.jpeg';
import { Spring } from 'react-spring/renderprops';

class Home extends React.Component {
    render() {
        return (
        <div className="App">
            <h1 className="headStyle">Home page</h1>
            <p className="p-color">Hello, my name is Rosenberg Bello and this is my portfolio.</p>
            <p className="p-color">This is my first multi-page website using react!</p>
            <p className="p-color">I hope anyone viewing enjoys what I did</p> 
            <p className="p-color">and I will update as soon as I can.</p>    
            <img className="homeImg" src={logo} alt="image_of_me" />
            <Spring
            from={{ opacity: 0}}
            to={{ opacity: 1}}
            confidg={{delay : 2000, duration : 2000}}
        >
            {props => (
                <div style={props}>
                    <div style={c2Style}>
                        <h1>Hello Viewer! How you doing today?</h1>
                        <p>Wait until the counter is up to get a surprise...</p>
                        <Spring 
                        from = {{number : 0}}
                        to = {{number : 86400}}
                        config={{duration : 86400000}}
                        >
                            {props => (
                                <div style={props}>
                                    <h1 style={counter}>{props.number.toFixed()}</h1>
                                </div>
                            )}
                        </Spring>
                    </div>
                </div>
            )}
        </Spring>
        </div>
        
        );
    }
}

const c2Style ={
    background : 'rgb(209, 223, 159)',
    color : 'yellow',
    padding : '1.5rem'
}

const counter = {
    background : '#333',
    textAlign : 'center',
    width : '100px',
    borderRadius : '50%',
    margin : '1rem auto'
}

export default Home;

