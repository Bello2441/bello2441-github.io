import React from 'react';
import logo from './the_hulk.jpeg';

function Home() {
    return (
        <div className="App">
            <h1 className="headStyle">Home page</h1>
            <p style={{color :'white'}}>Hello, my name is Rosenberg Bello and this is my portfolio.</p>
            <p style={{color :'white'}}>This is my first multi-page website using react!</p>
            <p style={{color :'white'}}>I hope anyone viewing enjoys what I did</p> 
            <p style={{color :'white'}}>and I will update as soon as I can.</p>    
                <img className="homeImg" src={logo} alt="image_of_me" />
        </div>
        
        );
}

export default Home;