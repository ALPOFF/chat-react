import React, {useEffect} from "react";
import ChatMessageContainer from "../ChatMessageContainer/ChatMessageContainer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {getDialogData} from "../../state/chat-reducer";

function ChatMessagesContainer(props) {
    useEffect(() => {
        let dialogId = props.match.params.dialogId;
        console.log(dialogId)
        props.getDialogData(dialogId);
    }, [props.match.params.dialogId]);

    return (
        <div className="messagesWrapper">
            {props.text}
            {props.dialogs.filter(d =>
                d.id == 0
            )[0].msg.map(m =>
                (m.id === props.activeUser)
                    ? <div className="messageWrapperL">
                        <ChatMessageContainer userIcon={m.userIcon}
                                              userName={m.userName}
                                              msgData={m.msgData}
                                              data={m.data}/>
                    </div>
                    : <div className="messageWrapperR">
                        <ChatMessageContainer userIcon={m.userIcon}
                                              userName={m.userName}
                                              msgData={m.msgData}
                                              data={m.data}/></div>
            )
            }
        </div>
    )
}

const mapStateToProps = (state) => ({
    dialogs: state.chatReducer.dialogs,
    activeUser: state.chatReducer.activeUser,
    text: state.chatReducer.text
});

export default compose(connect(mapStateToProps, {getDialogData}), withRouter)(ChatMessagesContainer);
