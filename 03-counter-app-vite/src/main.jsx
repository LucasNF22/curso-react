import React from 'react';
import reactDOM from 'react-dom/client';    
import { HelloWorldApp } from './HelloWorldApp';
import { FirstApp } from './FirstApp';


reactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        {/* //<HelloWorldApp/> */}
        <FirstApp/>
    </React.StrictMode>
);
