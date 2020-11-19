import React from 'react';

class Contact extends React.Component {
    state = { 
        name : "",
        email : ""
     }
handleClick() {
    alert.log('Hey, {name} your message was sent successfully');
}

    render() { 
        return (  
            <form className="container">
               <h1 className="App">Contact Information</h1> 
                <label className="nameplate">
                    Name
                    <input type="text" name="name" />
                </label>
                <label className="nameplate">
                    Email
                    <input type="text" email="name" />
                </label>
                <label>
                    Got a message? Write it here.
                    <textarea>
                        
                    </textarea>
                </label>
                <button onClick={() => this.handleClick()}> Submit </button>
            </form>
        );
    }
}

 
export default Contact;