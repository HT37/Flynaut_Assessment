import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ReportHandler } from 'web-vitals';

const handleWebVitals: ReportHandler = (onPerfEntry) => {
  // You can handle the performance data here
 
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals(handleWebVitals);
