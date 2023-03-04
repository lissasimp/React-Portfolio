import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import ReactDOM from 'react-dom';
import App from './App';
import { HashRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

//https://www.youtube.com/watch?v=SLfhMt5OUPI

const rootElement = document.getElementById('root');
const root = createRoot(rootElement)
root.render(
<StrictMode>
<HashRouter>
<App /> 
</HashRouter>
</StrictMode>
)