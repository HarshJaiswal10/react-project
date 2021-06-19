import React from 'react';
import ReactDOM from 'react-dom';
import add from './Calculator';
import {sub, div, mult} from './Calculator';

ReactDOM.render(
  <>
    <ul>
      <li> Sum of two no is {add(40, 4)} </li>
      <li> Sub of two no is{sub(40,4)}</li>
      <li> Div of two no is{div(40,4)}</li>
      <li> Mult of two no is{mult(40,4)}</li>
    </ul>
  </>,
  document.getElementById("root")
);