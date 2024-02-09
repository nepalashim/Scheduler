import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import ScrollToTop from './Components/ScrollToTop.jsx';

import "./dist/css/main.css";


import 'bootstrap/dist/css/bootstrap.min.css';
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";



import{BrowserRoouter} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRoouter>
    <ScrollToTop/>
    <App />
    
    </BrowserRoouter>
    
  </React.StrictMode>,
)
