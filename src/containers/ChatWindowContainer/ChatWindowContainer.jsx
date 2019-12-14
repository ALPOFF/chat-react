import React, {useEffect, useState} from 'react';
import './ChatWindowContainer.scss'
import ChatMessageContainer from "../ChatMessageContainer/ChatMessageContainer";
import {connect} from "react-redux";
import clipIcon from './../../assets/images/clip_icon.png';
import InputMsgReduxForm from "../../ReduxForm/InputMsgReduxForm/InputMsgReduxForm";
import {setTest} from "../../state/chat-reducer";
import handleSubmit from "redux-form/lib/handleSubmit";
import {reset} from "redux-form";

const io = require('socket.io-client');
const socket = io('http://localhost:3000');

const ChatWindowContainer = (props) => {

    const [messageCount, setMessageCount] = useState(0);
    const [inRoom, setInRoom] = useState(false);

    useEffect(() => {
        socket.on('receive message', payload => {
            setMessageCount(messageCount + 1);
        });
        document.title = `${messageCount} new messages have been emitted`;
    }, [messageCount]); //only re-run the effect if new message comes in

    const attachFile = () => {
        console.log('attach file')
    };

    const sendMsg = (formData) => {
        console.log('emitting new message');
        props.setTest(formData.inputData);
        socket.emit('new message', {
            newMsgData: formData.inputData
        });
    };

    const sendMsgMob = (formData) => {
        props.setTest(formData.inputData);
        socket.emit('new message', {
            newMsgData: formData.inputData
        });
    };

    return (
        <div className='chatWindowWrapper'>
            <div className="messagesWrapper">
                {props.msg.map(m =>
                    (m.userName === props.activeUser)
                        ? <div className="messageWrapperL">
                            <ChatMessageContainer userIcon={m.userIcon} userName={m.userName} msgData={m.msgData}
                                                  data={m.data}/>
                        </div>

                        : <div className="messageWrapperR"><ChatMessageContainer userIcon={m.userIcon}
                                                                                 userName={m.userName}
                                                                                 msgData={m.msgData}
                                                                                 data={m.data}/></div>
                )}
            </div>
            <div className='inputBodyWrapper'>
                <button>
                    <img src={clipIcon} alt=""/>
                </button>
                <div className='inputWrapper'>
                    <InputMsgReduxForm onSubmit={sendMsg}/>
                </div>

            </div>
        </div>
    )
};

const mapStateToProps = (state) => ({
    msg: state.chatReducer.msg,
    test: state.chatReducer.test,
    activeUser: state.chatReducer.activeUser
});

export default connect(mapStateToProps, {setTest})(ChatWindowContainer);
