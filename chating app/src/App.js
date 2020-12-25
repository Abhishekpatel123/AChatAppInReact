import Recat from "react";
import './App.css'
import ChatApp from './Components/ChatApp/ChatApp'
import Signup from './Components/Signup/Signup';
import Login from "./Components/Login/Login";
import {Route , Switch} from 'react-router-dom'
import WelcomePage from './Components/WelcomePage/WelcomePage'

function App(){
    return(   
        <>
        <Switch>
            <Route path = "" component = "">
                <WelcomePage/>
            </Route>
            <Route path = "" component = "">
                <Signup/>
            </Route>
            <Route path = "" component = "">
                <Login/>
            </Route>
            <Route path = "" component = "">
                <ChatApp/>
            </Route>
        </Switch>
        </>
        
    )
}

export default App;