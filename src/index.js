import React from 'react';
import ReactDOM from 'react-dom';

const name = "Harsh jaiswal";
const img1 = "https://picsum.photos/200/300";
const img2 = "https://picsum.photos/300/300";
const img3 = "https://picsum.photos/400/300";
const link = "https://www.google.co.in/";
ReactDOM.render(
  <>
      <h1 contentEditable = "true">My name is {name}</h1>
      <img src = {img1} alt="randomImages" />
      <img src = {img2} alt="randomImages" />
      <a href = {link} target="_harsh" >
       <img src = {img3} alt="randomImages" />
       </a>
  </>,
  document.getElementById("root")
);