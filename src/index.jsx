import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/generic/global.scss';
import './styles/settings/colors.css';
import './assets/fonts/GandhiSans-Regular.otf';
import './assets/fonts/GandhiSans-Bold.otf';
import App from './App.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
