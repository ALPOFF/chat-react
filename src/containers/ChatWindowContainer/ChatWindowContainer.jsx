import React, {useEffect, useState} from 'react';
import './ChatWindowContainer.scss'
import ChatMessageContainer from "../ChatMessageContainer/ChatMessageContainer";
import {connect} from "react-redux";

const io = require('socket.io-client');
const socket = io('http://localhost:3011');

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
    }

    return (
        <div className='chatWindowWrapper'>
            {props.msg.map(m =>
            <ChatMessageContainer userIcon={m.userIcon} userName={m.userName} msgData={m.msgData} data={m.data} />
            )}
            <div className='inputBodyWrapper'>
                <div className='inputWrapper'>
                    <input type="text"/>
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = (state) => ({
    msg: state.chatReducer.msg
});

export default connect(mapStateToProps, {}) (ChatWindowContainer);