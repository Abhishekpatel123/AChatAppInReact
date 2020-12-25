import React from 'react';
import PersonIcon from '@material-ui/icons/Person';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import groupimg from "../../images/chat-group.png";
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';


const Login = ()=>{
    return(
    <div className = "outer-div">
        <div className = "login-inner-div">
            <div className = "left-content">
                <h1 className = "l-color" >Login</h1>
                <form>
                    <div className = "item">
                        <PersonIcon className ="l-color"/>
                        <input type= "text" placeholder= " Enter Your Name" />
                    </div>
                    <div className = "item">
                        <MailOutlineIcon className ="l-color"/>
                        <input type= "email" placeholder= " Enter Your Email" />   
                    </div>
                    <div className = "item">
                        <VpnKeyIcon className ="l-color"/>
                        <input type= "password" placeholder= " Enter Your password" />
                    </div>
    
                    <Link className = "login-btn" to = '/home'>
                        <Button variant ="contained" color = "primary">Login</Button>
                    </Link>
                    </form>

                </div>
            <div className = "right-content">
                <img src = {groupimg} alt = "img1" />    
            </div>                
        </div>
    </div>
    )
}


export default Login;