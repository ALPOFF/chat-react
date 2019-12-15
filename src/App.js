import React from 'react';
import './App.scss';
import SidebarContainer from "./containers/SidebarContainer/SidebarContainer";
import {Route} from "react-router-dom";
import ChatMessagesContainer from "./containers/ChatMessagesContainer/ChatMessagesContainer";
import InputMessageCOntainer from "./containers/InputMessageContainer/InputMessageContainer";

const App = (props) => (
    <div className="appWrapper">
            <div className="chatWrapper">
                    <div className="sidebar">
                        <SidebarContainer/>
                    </div>
                <div className='chatWindowWrapper'>
                    <Route path='/dialog/:UID' render={() =>
                        <ChatMessagesContainer />
                    }/>
                    <InputMessageCOntainer/>
                </div>
            </div>
    </div>
);

export default App;
