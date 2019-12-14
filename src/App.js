import React from 'react';
import './App.scss';
import ChatWindowContainer from "./containers/ChatWindowContainer/ChatWindowContainer";
import SidebarContainer from "./containers/SidebarContainer/SidebarContainer";
import {Route} from "react-router-dom";

const App = (props) => (
    <div className="appWrapper">
        <Route path='/profile/:UID' render={() =>
            <div className="chatWrapper">
                <div className="sidebar">
                    <SidebarContainer/>
                </div>
                <ChatWindowContainer/>
            </div>
        }/>
    </div>
);

export default App;
