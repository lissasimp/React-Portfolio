import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import ReactDOM from 'react-dom';
import App from './App';
import { HashRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

//Error in inspect panel
//'You are importing createRoot from 'react-dom' which is not supported'
//Fixed - https://bobbyhadz.com/blog/react-you-are-importing-createroot-from-react-dom

const rootElement = document.getElementById('root');
const root = createRoot(rootElement)
root.render(
<StrictMode>
<HashRouter>
<App /> 
</HashRouter>
</StrictMode>
)