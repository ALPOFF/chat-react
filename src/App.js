import React from 'react';
import './App.scss';
import ChatWindowContainer from "./containers/ChatWindowContainer/ChatWindowContainer";
import SidebarContainer from "./containers/SidebarContainer/SidebarContainer";

const App = (props) => (
    <div className="appWrapper">
        <div className="chatWrapper">
            <div className="sidebar">
                <SidebarContainer/>
            </div>
            <ChatWindowContainer/>
        </div>
    </div>
);

export default App;
