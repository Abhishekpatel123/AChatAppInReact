import React from 'react'
import Button from '@material-ui/core/Button';
import welcome from '../../images/welcome.jpg';
import './Welcome.css'
import {Link} from 'react-router-dom'

export default function WelcomePage(){



    return(
      <div className = "welcome-div" style = {{backgroundImage : `url(${welcome})`}}>
         <p>Our client are our first priority</p>
         <h1>WELCOME TO A~CHAT APP</h1>
         <div className = 'btn-div'>

            <Link to = '/login'>
               <Button  className ="btn" variant ="contained" color = "primary">Login</Button>
            </Link>
            <Link to = '/signup'>
               <Button className ="btn" variant ="contained" color="secondary">Sign up</Button>
            </Link>

         </div>
      </div>       
    )
}