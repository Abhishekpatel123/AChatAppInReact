import React from 'react';
import UserProfile from '../../UserProfile';
import User from '../../User';
import MessageBox from "../../MessageBox";




export default function  ChatApp(){
 
    return(
    <div className = "app">
        <div className = "app-body">
            <UserProfile/>
            <div className = "user-collection">
                <div className = "search-box">
                    <div className="search-container">
                        <i className="fas fa-search"></i>
                        <input type="text" placeholder="Search or Start new chat" />
                    </div>
                </div>
                    <User/>
                    <User/>
                    <User/>
            </div>
            <MessageBox></MessageBox>
        </div>
    </div>
    )
}