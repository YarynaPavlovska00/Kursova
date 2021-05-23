import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/app/app";

import './assets/style/scss/index/index.css'

ReactDOM.render(
  <React.StrictMode>
    <App style={{background: "rgba(250,250,250,0.45)",}}/>
  </React.StrictMode>,
  document.getElementById('root')
);
