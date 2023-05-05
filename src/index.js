import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from './GlobalStyles';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    <GlobalStyle />
    <App />
    </>,
    document.getElementById('root')
);
