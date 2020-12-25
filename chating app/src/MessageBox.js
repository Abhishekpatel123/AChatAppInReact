import React, { useEffect, useState } from 'react';
import Message from './Message.js';
import './MessageBox.css';
import man1 from './images/man1.jpg';
import io from 'socket.io-client';
import SubjectIcon from '@material-ui/icons/Subject';


// var socket = io('https://localhost:4000', { transport : ['websocket'] });


let socket = io.connect(`http://localhost:4000`,{ 
reconnectionDelay: 1000,
reconnection:true,
reconnectionAttempts: 10,
transports: ['websocket'],
agent: false, // [2] Please don't set this to true
upgrade: false,
rejectUnauthorized: false
});


// const socket = io.connect('http://localhost:4000');



function MessageBox(probs){



    const [input , setInput ] = useState("");
    const [messages , setMessages ] = useState([]);


    useEffect(()=>{
        socket.on('message',(data)=>{
            setMessages(preValue=>{
                return[
                    ...preValue,
                    data
                ]
            })
            console.log("data comming")
        })
    },messages)


    

    const onSubmit = ()=>{
        setMessages((preValue)=>{
            return [
                ...preValue,
                input,

            ]
        })

        socket.emit('message',input);
        setInput("");
    }





    return(
        <div className="message-box">
        <div className="top">
            <div className="top-left">
                <img src={man1} alt=""/>
                <div>
                    <h3>Abhishek Patel</h3>
                    <p>20:12:00PM offline</p>
                </div>
            </div>
                <ul  className="top-right">
                    <li><i className="fas fa-phone-square"></i></li>
                    <li><i className="fas fa-phone-square"></i></li>
                    <li><SubjectIcon/></li>
                </ul>
        </div>
        <div className="middle">
           
           {
            messages.map((message , index)=>{
                return (
                    <Message text = {message}  key = {index} classA = "right message" ></Message>
                )
            })
           }


        </div>
        <div className="bottom">
            <form onSubmit = {(e)=> { e.preventDefault() ; onSubmit()}}>
                <input type="text" value = {input} onChange = { (e)=>{ setInput(e.target.value) } } placeholder="Write your message here" />
                <input type="submit"  value="submit"  />
            </form>
        </div>
    </div>
    )
}


export default MessageBox;