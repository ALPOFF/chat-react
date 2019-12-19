import React, {useEffect} from "react";
import ChatMessageContainer from "../ChatMessageContainer/ChatMessageContainer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {getDialogData} from "../../state/chat-reducer";

const ChatMessagesContainer = props => {
    useEffect(() => {
        let dialogId = props.match.params.dialogId;
        console.log(dialogId)
        props.getDialogData(dialogId);
    }, [props.match.params.dialogId]);

    return (
        <div className="messagesWrapper">
            {props.text}
            {props.msg.map(m =>
                (m.userId === props.activeUser)
                    ? <div className="messageWrapperL">
                        <ChatMessageContainer userIcon={m.userIcon}
                                              userName={m.userName}
                                              userId={m.userId}
                                              msgData={m.text}
                                              data={m.textData}/>
                    </div>
                    : <div className="messageWrapperR">
                        <ChatMessageContainer userIcon={m.userIcon}
                                              userName={m.userName}
                                              userId={m.userId}
                                              msgData={m.text}
                                              data={m.textData}/></div>
            )
            }
        </div>
    )
};

const mapStateToProps = (state) => ({
    dialogs: state.chatReducer.dialogs,
    activeUser: state.chatReducer.activeUser,
    msg: state.chatReducer.msg,
    text: state.chatReducer.text
});

export default compose(connect(mapStateToProps, {getDialogData}), withRouter)(ChatMessagesContainer);
