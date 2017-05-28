import React from 'react';
import { render } from 'react-snapshot';
import Routes from './routes';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

render(
    <Routes />,
    document.getElementById('root'));

registerServiceWorker();