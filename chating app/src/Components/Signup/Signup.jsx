import React from 'react';
import PersonIcon from '@material-ui/icons/Person';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import './Signup.css'
import groupimg from "../../images/chat-group.png";
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import { Link } from 'react-router-dom';


const Signup = ()=>{


    const [checked, setChecked] = React.useState(true);

    const handleChange = (event) => {
      setChecked(event.target.checked);
    };




    return(
    <div className = "outer-div">
        <div className = "signup-inner-div">
            <div className = "left-content">
                <h1 className = "s-color" >Sign up</h1>
                <form>
                    <div className = "item">
                        <PersonIcon className = "s-color"/>
                        <input type= "text" placeholder= " Enter Your Name" />
                    </div>
                    <div className = "item">
                        <MailOutlineIcon className = "s-color"/>
                        <input type= "email" placeholder= " Enter Your Email" />   
                    </div>
                    <div className = "item">
                        <VpnKeyIcon className = "s-color"/>
                        <input type= "password" placeholder= " Enter Your password" />
                    </div>
                    <div className = "item">
                        <VpnKeyIcon className = "s-color"/>
                        <input type= "password" placeholder= " Enter Your conform password" />
                    </div>
                    <div className = "item">
                        {/* <input type = "checkBox"></input> */}
                        <Checkbox checked={checked} onChange={handleChange} inputProps={{ 'aria-label': 'primary checkbox' }} />
                        <a href="#">Yes if you agree with term and condition</a>
                    </div>
                    <Link to = '/home'>
                        <Button variant ="contained" color = "secondary">Sign up</Button>
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


export default Signup;