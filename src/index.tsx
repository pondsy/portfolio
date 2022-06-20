import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ActiveSectionProvider} from "./Hooks/useActiveSection";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    // <React>
        <ActiveSectionProvider>
            <App/>
            <div id="menu"/>
        </ActiveSectionProvider>
    // </React>
);

reportWebVitals();
