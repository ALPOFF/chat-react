import React from "react";
import './ChatMessageContainer.scss'
import userIcon from './../../assets/images/ava.png'

const ChatMessageContainer = (props) => {
    return (
        <>
            <div className='userInfo'>
                {props.userIcon !== null ?
                    <img src={props.userIcon} alt="userIcon"/>
                    :
                    <img src={userIcon} alt=""/>
                }
                <div className="userName">
                    {props.userName}
                </div>
                <div className="data">
                    {props.data}
                </div>
            </div>
            <div className="msg">
                {props.msgData}
            </div>
        </>
    )
};

export default ChatMessageContainer;
