import React from 'react';
import logo from './the_hulk.jpeg';

function Home() {
    return (
        <div className="App">
            <h1 className="headStyle">Home page</h1>
            <p>Hello, my name is Rosenberg Bello and this is my portfolio.</p>
            <p>This is my first multi-page website using react!</p>
            <p>I hope anyone viewing enjoys what I did</p> 
            <p>and I will update as soon as I can.</p>    
                <img className="homeImg" src={logo} alt="image_of_me" />
        </div>
        
        );
}

export default Home;