import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/Global.scss';
import App from './App';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Logo from './Components/Logo/Logo';

ReactDOM.render(
  <React.StrictMode>
    <Header/>
    {/* <Logo/> */}
    <App />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);