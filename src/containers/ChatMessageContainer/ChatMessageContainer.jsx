import React from "react";
import './ChatMessageContainer.scss'
import userIcon from './../../assets/images/user_icon.png'

const ChatMessageContainer = (props) => {
    return (
        <div className='messageWrapper'>
            <div className='userInfo'>
                {props.userIcon !== null ?
                    <img src={props.userIcon} alt="userIcon"/>
                    :
                    <img src={userIcon} alt=""/>
                }
                {props.userName}
                {props.data}
            </div>
            <div>
                {props.msgData}
            </div>
        </div>
    )
};

export default ChatMessageContainer;