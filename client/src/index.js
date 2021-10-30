import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Index from './pages/Index';
import Modal from 'react-modal'


Modal.setAppElement('#root');

window.renderIndexPage = () => {
    ReactDOM.render(
        <React.StrictMode>
            <Index/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

window.renderChangeInfoPage = () => {
    ReactDOM.render(
        <React.StrictMode>
            <Index/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
