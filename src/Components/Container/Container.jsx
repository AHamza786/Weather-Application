import React from 'react'
import "./Container.css"
import Header from '../Header/Header.jsx';
import Main from '../Main/Main.jsx';
import Footer from '../Footer/Footer.jsx';

function Container() {
  return (
    <div className='container'>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default Container;