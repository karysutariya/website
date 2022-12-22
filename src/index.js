import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Footer from './Footer';
import reportWebVitals from './reportWebVitals';
import Contact from './Contact';
import Info from './Info';
import Work from './Work';
import Portfolio from './Portfolio';
import Testimonial from './Testimonial'
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <div>
    <title>SK- Python Developer</title>
    <App />
    <Info />
    <Work />
    <Portfolio />
    <Testimonial />
    <Contact />
    <Footer />
    </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
