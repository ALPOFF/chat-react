import React, {useEffect} from "react";
import './SidebarContainer.scss'
import {connect} from "react-redux";
import {
    clearSearch,
    getDialogData,
    getDialogs, getDialogsListData,
    getNewPicArr,
    update_new_pic_value
} from "../../state/chat-reducer";
import clearSearch_icon from './../../assets/images/clearSearch_icon.png'
import {NavLink, withRouter} from "react-router-dom";
import {compose} from "redux";

const SidebarContainer = (props) => {

    useEffect(() => {
        props.getDialogsListData();
        let a = props.msg.length;
    }, [props.msg.length]);

    const onNewSearchValue = (e) => {
        let new_search_value = e.target.value;
        props.update_new_pic_value(new_search_value);
        props.getNewPicArr()
    };

    const clearInputSearch = () => {
        props.clearSearch()
    };

    return (
        <>
            <div className="search">
                <input value={props.new_search_value} onChange={onNewSearchValue} placeholder="Search user..."
                       type="text"/>
                {props.new_search_value !== '' && <button className="clearSearch" onClick={clearInputSearch}>
                    <img src={clearSearch_icon} alt="" height={20}/>
                </button>
                }
            </div>
            {props.new_search_value !== ''
                ? <div className="dialogs">{props.searchResult.map(u => <NavLink to={'/dialogs/' + u.userId}>
                    <div className="dialogItem">
                        {u.lastMsg.userName}
                        <br/>
                        <div className="lastMsg">
                            {u.lastMsg.text}
                        </div>
                    </div>
                </NavLink>)}</div>
                :
                <div className="dialogs">
                    {props.dialogsList.map(d => <NavLink to={'/dialogs/' + d.dialogId}>
                        <div className="dialogItem">
                            {d.lastMsg.userName}
                            <br/>
                            <div className="lastMsg">
                                {d.lastMsg.text}
                            </div>
                        </div>
                    </NavLink>)}
                </div>

            }
        </>
    )
};

const mapStateToProps = (state) => ({
    dialogs: state.chatReducer.dialogs,
    dialogsList: state.chatReducer.dialogsList,
    msg: state.chatReducer.msg,
    new_search_value: state.chatReducer.new_search_value,
    searchResult: state.chatReducer.searchResult
});

export default compose(connect(mapStateToProps, {
    update_new_pic_value,
    getNewPicArr,
    clearSearch,
    getDialogs,
    getDialogData,
    getDialogsListData
}), withRouter)(SidebarContainer);
