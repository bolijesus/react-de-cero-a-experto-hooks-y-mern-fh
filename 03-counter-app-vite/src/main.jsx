import React from 'react';
import ReactDOM from 'react-dom/client';

// import { HelloWorldApp as App } from './HelloWorldApp'
// import { FirstApp } from './FirstApp';
import { CounterApp } from './CounterApp';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <App /> */}
        {/* <FirstApp title='GOKUUUU!!'/> */}
        <CounterApp value={25}></CounterApp>
    </React.StrictMode>
)