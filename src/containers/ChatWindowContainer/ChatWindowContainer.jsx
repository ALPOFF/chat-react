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


}



export default  ChatWindowContainer ;
