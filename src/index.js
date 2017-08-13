import React from 'react';
import {render} from 'react-snapshot';
import Routes from './routes';
import registerServiceWorker from './registerServiceWorker';
import "antd/dist/antd.css";
import './index.css';
window.matchMedia = window.matchMedia || function() {
        return {
            matches : false,
            addListener : function() {},
            removeListener: function() {}
        };
    };
global.matchMedia = window.matchMedia;
render(
    <Routes />,
    document.getElementById('root')
);

registerServiceWorker();
