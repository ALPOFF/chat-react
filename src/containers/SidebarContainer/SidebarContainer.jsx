import React from "react";
import './SidebarContainer.scss'
import {connect} from "react-redux";
import {clearSearch, getNewPicArr, postTest, update_new_pic_value} from "../../state/chat-reducer";
import clearSearch_icon from './../../assets/images/clearSearch_icon.png'
import {NavLink, withRouter} from "react-router-dom";
import {compose} from "redux";

const SidebarContainer = (props) => {
    const onNewSearchValue = (e) => {
        let new_search_value = e.target.value;
        props.update_new_pic_value(new_search_value);
        props.getNewPicArr()
    };

    const clearInputSearch = () => {
        props.clearSearch()
    };

    let ggg =() => {
        let a =5
        props.postTest(a)
    }

    return (
        <>
            <div className="search">
                <button onClick={ggg}>dfdf</button>
                <input value={props.new_search_value} onChange={onNewSearchValue} placeholder="Search user..."
                       type="text"/>
                {props.new_search_value !== '' && <button className="clearSearch" onClick={clearInputSearch}>
                    <img src={clearSearch_icon} alt="" height={20}/>
                </button>
                }
            </div>
            {props.new_search_value !== ''
                ? <div className="dialogs">{props.searchResult.map(u => <NavLink to={'/dialog/' + u.id}><div className="dialogItem">
                    {u.userName}
                    <br/>
                    {u.msgData}
                </div></NavLink>)}</div>
                :
                <div className="dialogs">
                    {props.dialogs.map(d => <NavLink to={'/dialog/' + d.id}><div className="dialogItem">
                        {d.userName}
                        <br/>
                        {d.msgData}
                    </div></NavLink>)}
                </div>

            }
        </>
    )
};

const mapStateToProps = (state) => ({
    dialogs: state.chatReducer.dialogs,
    new_search_value: state.chatReducer.new_search_value,
    searchResult: state.chatReducer.searchResult
});

export default compose(connect(mapStateToProps, {update_new_pic_value, getNewPicArr, clearSearch, postTest}), withRouter)(SidebarContainer);
