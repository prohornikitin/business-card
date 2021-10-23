import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Index from './pages/Index';
import ChangeInfo from './pages/controlPanel'

window.renderIndexPage = () => {
    ReactDOM.render(
        <React.StrictMode>
            <Index/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

window.renderControlPanelPage = () => {
    ReactDOM.render(
        <React.StrictMode>
            <ChangeInfo/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
