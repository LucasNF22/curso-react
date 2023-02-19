import React from 'react';
import reactDOM from 'react-dom/client';    

import { HelloWorldApp } from './HelloWorldApp';
import { CounterApp } from './CounterApp';
import './styles.css';


reactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        < HelloWorldApp />
        < CounterApp value={ 1000 } />
    </React.StrictMode>
);


