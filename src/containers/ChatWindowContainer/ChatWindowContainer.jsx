import React, {Component, useEffect, useState} from 'react';
import './ChatWindowContainer.scss'
import ChatMessageContainer from "../ChatMessageContainer/ChatMessageContainer";
import {connect} from "react-redux";
import clipIcon from './../../assets/images/clip_icon.png';
import InputMsgReduxForm from "../../ReduxForm/InputMsgReduxForm/InputMsgReduxForm";
import {setTest} from "../../state/chat-reducer";
import {Route, withRouter} from "react-router-dom";
import {compose} from "redux";
import ChatMessagesContainer from "../ChatMessagesContainer/ChatMessagesContainer";
import InputMessageCOntainer from "../InputMessageContainer/InputMessageContainer";

const io = require('socket.io-client');
const socket = io('http://localhost:3000');

class ChatWindowContainer extends Component {
    componentDidMount() {
        debugger
        let UID = this.props.match.params.UID
    }

    render() {

        /*    const [messageCount, setMessageCount] = useState(0);
            const [inRoom, setInRoom] = useState(false);

            useEffect(() => {
                socket.on('receive message', payload => {
                    setMessageCount(messageCount + 1);
                });
                document.title = `${messageCount} new messages have been emitted`;
            }, [messageCount]);  */

        const attachFile = () => {
            console.log('attach file')
        };



        const sendMsgMob = (formData) => {
            this.props.setTest(formData.inputData);
            socket.emit('new message', {
                newMsgData: formData.inputData
            });
        };

        return (
            <div className='chatWindowWrapper'>
                <Route path='/:UID' render={() =>
              <ChatMessagesContainer msg={this.props.msg} activeUser={this.props.activeUser}/>
                }/>
                <InputMessageCOntainer/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    msg: state.chatReducer.msg,
    test: state.chatReducer.test,
    activeUser: state.chatReducer.activeUser
});

export default compose(connect(mapStateToProps, {setTest}), withRouter)(ChatWindowContainer);
