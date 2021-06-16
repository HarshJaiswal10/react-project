import React from 'react';
import reactDom from 'react-dom';
import './index.css';

let curDate = new Date(2020, 6, 6, 7);
curDate = curDate.getHours();
let greeting ='';
const cssStyle ={};

if(curDate>= 6 && curDate <12){
  greeting = 'Good Morning';
  cssStyle.color = 'blue';
} else if(curDate>=12 && curDate <19){
  greeting = 'Good Afternoon';
  cssStyle.color = 'orange';
}else{
  greeting = 'Good Night';
  cssStyle.color = 'black';
}

reactDom.render(
  <>
  <div>
  <h1>Hello Sir, <span style={cssStyle}>{greeting}</span></h1>,
  </div>
  </>,
  document.getElementById("root")
);