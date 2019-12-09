import React, {useEffect, useState} from 'react';
import './ChatWindowContainer.scss'
import ChatMessageContainer from "../ChatMessageContainer/ChatMessageContainer";
import {connect} from "react-redux";
import clipIcon from './../../assets/images/clip_icon.png';
import planeIcon from './../../assets/images/plane_icon.png';
import InputReduxForm from "../../ReduxForm/InputReduxForm/InputReduxForm";
import {setTest} from "../../state/chat-reducer";
import handleSubmit from "redux-form/lib/handleSubmit";

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

    const sendMsg = (formData) => {
        props.setTest(formData.inputData)
    };

    return (
        <div className='chatWindowWrapper'>

                {props.msg.map(m =>
                    (m.userName === props.activeUser)
                        ? <div className="messageWrapperL">
                            <ChatMessageContainer userIcon={m.userIcon} userName={m.userName} msgData={m.msgData}
                                                  data={m.data}/>
                    </div>

                        : <div className="messageWrapperR"><ChatMessageContainer  userIcon={m.userIcon} userName={m.userName} msgData={m.msgData}
                                                                                 data={m.data}/></div>
                )}


            <div className='inputBodyWrapper'>
                <button onClick={sendMsg}>
                    <img src={clipIcon} alt=""/>
                </button>
                <div className='inputWrapper'>
                    <InputReduxForm onSubmit={sendMsg}/>
                </div>
                <button>
                    <img src={planeIcon} alt=""/>
                </button>
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
