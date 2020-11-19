import React from 'react';

class Contact extends React.Component {
    state = { 
        name : "",
        email : ""
     }
handleClick = () => {
    alert(`Hey, ${this.state.name} your message was sent`);
}

handleNameChange = event => {
    console.log("input updated!");
    console.log(event.target);
    this.setState({name: event.target.value});
}
    render() { 
        return (  
            <form className="container">
               <h1 className="App">Contact Information</h1> 
               <p style={{color : 'whitesmoke'}}>If you really want to contact me, just hit me up on Facebook</p>
               <p style={{color : 'whitesmoke'}}>My name is TheBerg Bello on Facebook and I do not have a photo on my profile.</p>
               <p style={{color : 'whitesmoke'}}>You can email me at rosenberg.bello@lc.cuny.edu and I will update this after college</p>
                <label className="nameplate">
                    Name :
                    <input type="text" name="name" onChange={this.handleNameChange}/>
                </label>
                <label className="nameplate">
                    Email :
                    <input type="text" email="name" />
                </label>
                <label className="nameplate">
                    Got a message? Write it here. 
                    <textarea>
                        
                    </textarea>
                </label>
                <button onClick={this.handleClick}> Submit </button>
            </form>
        );
    }
}


export default Contact;