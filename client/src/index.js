import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Index from './pages/Index';
import ControlPanel from './pages/ControlPanel'
import Modal from 'react-modal'
import "regenerator-runtime/runtime";


Modal.setAppElement('#root');

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
            <ControlPanel/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
