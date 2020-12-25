import React from 'react'
import Button from '@material-ui/core/Button';


export default function WelcomePage(){




    return(
       <div className = "">
          <p>Our client are our first priority</p>
          <h1>WELCOME TO A-CHAT APP</h1>
        <div className = 'btn-div'>
        <Button variant ="contained" color = "primary">Login</Button>
        <Button variant ="contained" color="secondary">Sign up</Button>

        </div>

       </div>       
    )
}