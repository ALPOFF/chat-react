import React from "react";
import './SidebarContainer.scss'
import {connect} from "react-redux";
import {getNewPicArr, update_new_pic_value} from "../../state/chat-reducer";

const SidebarContainer = (props) => {

    const onNewSearchValue = (e) => {
        let new_search_value = e.target.value;
        props.update_new_pic_value(new_search_value);
        props.getNewPicArr()
    };

    return (
        <>
            <input value={props.new_search_value} onChange={onNewSearchValue} placeholder="Search ..." type="text"/>
            {props.new_search_value !== ''
                ? <div>{props.searchResult.map(u => <div className="dialogItem">
                    {u.userName}
                    <br/>
                    {u.msgData}
                </div>)}</div>
                :
                <div className="dialogs">
                    {props.dialogs.map(d => <div className="dialogItem">
                        {d.userName}
                        <br/>
                        {d.msgData}
                    </div>)}
                </div>
            }
        </>
    )
};

const mapStateToProps = (state) => ({
    msg: state.chatReducer.msg,
    dialogs: state.chatReducer.dialogs,
    new_search_value: state.chatReducer.new_search_value,
    searchResult: state.chatReducer.searchResult
});

export default connect(mapStateToProps, {update_new_pic_value, getNewPicArr})(SidebarContainer);
