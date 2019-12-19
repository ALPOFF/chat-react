import React from "react";
import clipIcon from "../../assets/images/clip_icon.png";
import InputMsgReduxForm from "../../ReduxForm/InputMsgReduxForm/InputMsgReduxForm";
import {connect} from "react-redux";
import {sendMessageData, setTest} from "../../state/chat-reducer";
import  './../ChatWindowContainer/ChatWindowContainer.scss'

const io = require('socket.io-client');
const socket = io('http://localhost:3000');

const InputMessageCOntainer = (props) => {

    const sendMsg = (formData) => {
        console.log('emitting new message');
        props.setTest(formData.inputData);
    };

    return (
        <div className='inputBodyWrapper'>
            <button>
                <img src={clipIcon} alt=""/>
            </button>
            <div className='inputWrapper'>
                <InputMsgReduxForm onSubmit={sendMsg}/>
            </div>

        </div>
    )
};

export default connect(null, { setTest}) (InputMessageCOntainer);
