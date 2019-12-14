import React from "react";
import './ChatMessageContainer.scss'
import userIcon from './../../assets/images/man.png'

const ChatMessageContainer = (props) => {
    return (
        <>
            <div className='userInfo'>
                {props.userIcon !== null ?
                    <img src={props.userIcon} alt="userIcon"/>
                    :
                    <img src={userIcon} alt=""/>
                }
                {props.userName}
                <div className="data">
                    {props.data}
                </div>
            </div>
            <div>
                {props.msgData}
            </div>
        </>
    )
};

export default ChatMessageContainer;
