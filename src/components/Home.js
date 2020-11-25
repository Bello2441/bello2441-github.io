import React from 'react';
import logo from './the_hulk.jpeg';
import { bounce } from 'react-animations';
import Radium, {StyleRoot} from 'radium';

const styles = {
    bounce : {
        animation : 'x 1s',
        animationName: Radium.keyframes(bounce, 'bounce')
    }
}
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
                <StyleRoot>
                    <div style={styles.bounce}>
                    </div>
                </StyleRoot>
        </div>
        
        );
    }
}

export default Home;
