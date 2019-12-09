import React from "react";
import './SidebarContainer.scss'
import {connect} from "react-redux";

const SidebarContainer = (props) => {
    return (
        <>
            <input type="text" placeholder="Search ..."/>
            <div className="dialogs">
                {props.dialogs.map(d => <div className="dialogItem">
                    {d.userName}

                </div>)}
            </div>
        </>
    )
};

const mapStateToProps = (state) => ({
    msg: state.chatReducer.msg,
    dialogs: state.chatReducer.dialogs
});

export default connect(mapStateToProps, {})(SidebarContainer);
