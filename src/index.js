import React from 'react';
import ReactDOM from 'react-dom';
 
const fname = 'Harsha';
const lname = 'Jaiswal';
const d = new Date().toLocaleDateString();
const t = new Date().toLocaleTimeString();

ReactDOM.render(
  <>
  <h1>{`My name is ${fname} ${lname}`}</h1>
  {/* <p>{`Todays date is ${d.getDate()} / ${d.getMonth()} / ${d.getFullYear()}`}</p> */}
  <p>{`Todays date is ${d}`}</p>
  <p>{`Current Time is ${t}`}</p>
  </>,
  document.getElementById("root")
  );