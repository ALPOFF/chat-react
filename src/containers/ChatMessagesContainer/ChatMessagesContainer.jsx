import React, {Component} from "react";
import ChatMessageContainer from "../ChatMessageContainer/ChatMessageContainer";

class ChatMessagesContainer extends Component {
    render() {
        return (
            <div className="messagesWrapper">
                {this.props.msg.map(m =>
                    (m.id === this.props.activeUser)
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
        )
    }
}

export default ChatMessagesContainer;
