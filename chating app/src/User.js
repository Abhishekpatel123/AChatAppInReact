import React from 'react';
import man1 from './images/man1.jpg';
import './User.css'

function Users(){
    return(
        <div className = "user-box">
        
            <img src={man1} alt="img1"  />
            <div className = "user-box-info">
                <h4>Abhishek Patel</h4>
                <p>last message....</p>
            </div>
        </div>
    )
}

export default Users;