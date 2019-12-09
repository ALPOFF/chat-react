import React, {useEffect, useState} from 'react';
import './ChatWindowContainer.scss'
import ChatMessageContainer from "../ChatMessageContainer/ChatMessageContainer";
import {connect} from "react-redux";
import clipIcon from './../../assets/images/clip_icon.png';
import planeIcon from './../../assets/images/plane_icon.png';

const io = require('socket.io-client');
const socket = io('http://localhost:4001');

const ChatWindowContainer = (props) => {

    const [messageCount, setMessageCount] = useState(0);

    useEffect(() => {
        socket.on('receive message', payload => {
            setMessageCount(messageCount + 1);
        });
        document.title = `${messageCount} new messages have been emitted`;
    }, [messageCount]); //only re-run the effect if new message comes in

    const handleNewMessage = () => {
        console.log('emitting new message');
        socket.emit('new message', {
            room: 'test-room'
        });
        setMessageCount(messageCount + 1);
    };

    const sendMsg = () => {

    };

    return (
        <div className='chatWindowWrapper'>
            {props.msg.map(m =>
            <ChatMessageContainer userIcon={m.userIcon} userName={m.userName} msgData={m.msgData} data={m.data} />
            )}
            <div className='inputBodyWrapper'>
                <button onClick={handleNewMessage}>
                    <img src={clipIcon} alt=""/>
                </button>
                <div className='inputWrapper'>
                    <input type="text"/>
                </div>
                <button>
                    <img src={planeIcon} alt=""/>
                </button>
            </div>
        </div>
    )
};

const mapStateToProps = (state) => ({
    msg: state.chatReducer.msg
});

export default connect(mapStateToProps, {}) (ChatWindowContainer);
