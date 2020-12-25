import React from 'react';
import './Message.css'

// function Message(Probs){
//     return(
//         <div className = {Probs.classA}>
//            this is message hi there
//         </div> 
//     )
// }




function Message(probs){
    return(
        <div className = "chat-message" className= {probs.classA}>
           <span className = "name" >Abhishek Patel</span>
           {probs.text}
           <span className = "time">12:00PM</span>
        </div> 
    )
}

export default Message;