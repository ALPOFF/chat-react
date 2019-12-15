import React, {Component} from "react";
import ChatMessageContainer from "../ChatMessageContainer/ChatMessageContainer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

class ChatMessagesContainer extends Component {
    componentDidMount() {
        debugger
        let dialogId = this.props.match.UID;

    }

    render() {
        return (
                    <div className="messagesWrapper">
                        {this.props.dialogs.filter(d =>
                            d.id == 0
                        )[0].msg.map(m =>
                            (m.id === this.props.activeUser)
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
}

const mapStateToProps = (state) => ({
    dialogs: state.chatReducer.dialogs,
    activeUser: state.chatReducer.activeUser
});

export default compose(connect(mapStateToProps, {}), withRouter)(ChatMessagesContainer);
