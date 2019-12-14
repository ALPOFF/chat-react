import React from "react";
import clipIcon from "../../assets/images/clip_icon.png";
import InputMsgReduxForm from "../../ReduxForm/InputMsgReduxForm/InputMsgReduxForm";
const io = require('socket.io-client');
const socket = io('http://localhost:3000');

const InputMessageCOntainer = (props) => {

    const sendMsg = (formData) => {
        console.log('emitting new message');
        this.props.setTest(formData.inputData);
        socket.emit('new message', {
            newMsgData: formData.inputData
        });
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

export default InputMessageCOntainer;
