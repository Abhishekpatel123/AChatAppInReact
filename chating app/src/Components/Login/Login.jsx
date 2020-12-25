import React from 'react';
import PersonIcon from '@material-ui/icons/Person';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import groupimg from "../../images/chat-group.png";
import Button from '@material-ui/core/Button';


const Login = ()=>{
    return(
    <div className = "outer-div">
        <div className = "login-inner-div">
            <div className = "left-content">
                <h1>Login</h1>
                <form>
                    <div className = "item">
                        <PersonIcon/>
                        <input type= "text" placeholder= " Enter Your Name" />
                    </div>
                    <div className = "item">
                        <MailOutlineIcon/>
                        <input type= "email" placeholder= " Enter Your Email" />   
                    </div>
                    <div className = "item">
                        <VpnKeyIcon/>
                        <input type= "password" placeholder= " Enter Your password" />
                    </div>
    
                    <Button variant ="contained" color = "primary">Login</Button>
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