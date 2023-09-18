import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import imgOne from './images/0.webp'
import imgTwo from './images/2.webp'
import imgIThree from './images/3.webp'
import imgIFour from './images/4.webp'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <div className="page-container">
    <App cardImg={imgOne} Title={"Hoodie"} Price={"$121"}/>
    <App cardImg={imgTwo} Title={"Sweatshirt"} Price={"$161"}/>
    <App cardImg={imgIThree} Title={"T-shirt"} Price={"$151"}/>
    <App cardImg={imgIFour} Title={"Hoodie"} Price={"$191"}/>
  </div>
  </>
);


