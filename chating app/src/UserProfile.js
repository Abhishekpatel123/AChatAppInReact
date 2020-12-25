import React from "react";
import man1 from  "./images/man1.jpg"
import './UserProfile.css'
import PhoneIcon from '@material-ui/icons/Phone';
import ChatIcon from '@material-ui/icons/Chat';
import GroupIcon from '@material-ui/icons/Group';
import SettingsIcon from '@material-ui/icons/Settings';
import NotificationImportantIcon from '@material-ui/icons/NotificationImportant';
import GroupAddIcon from '@material-ui/icons/GroupAdd';




function UserProfile(){
    return(
<>
    <div className = "user-profile-div">

        <div className = "top">
            <img src={man1} alt="img1"></img>
        </div>
        <div className = "middle">

            <ul>
                <li><ChatIcon/></li>
                <li><PhoneIcon/></li>
                <li><GroupIcon/></li>
                <li><NotificationImportantIcon/></li>

            </ul>

        </div>
        <div className = "bottom">
            <ul>
                <li><GroupAddIcon/></li>
                <li><SettingsIcon/></li>

            </ul>
        

        </div>

    </div>
</>
)}


export default UserProfile;