import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/Global.scss';
import App from './App';
import Header from './Pages/Header/Header';
import Footer from './Pages/Footer/Footer'

ReactDOM.render(
  <React.StrictMode>
    <Header/>
    <App />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);