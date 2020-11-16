import React from 'react';

class Contact extends Component {
    state = { 
        name : "",
        url : ""
     }
    render() { 
        return (  
            <form>
                <label>
                    Name
                </label>
            </form>
        );
    }
}
 
export default Contact;