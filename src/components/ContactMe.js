import React from 'react';

class Contact extends React.Component {
    state = { 
        name : "",
        email : ""
     }

     
    render() { 
        return (  
            <form className="container">
                <label className="nameplate">
                    Name
                    <input type="text" name="name" />
                </label>
                <label className="nameplate">
                    Email
                    <input type="text" email="name" />
                </label>
                <label className="nameplate">
                    Have a message? Leave one here!
                    <input type="text" />
                </label>
                <button> Submit </button>
            </form>
        );
    }
}
 
export default Contact;