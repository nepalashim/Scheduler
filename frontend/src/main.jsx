import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import "./dist/css/main.css"

import 'bootstrap/dist/css/bootstrap.min.css';


import{BrowserRoouter} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRoouter>
    <App />
    
    </BrowserRoouter>
    
  </React.StrictMode>,
)
