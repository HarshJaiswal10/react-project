import React from 'react'
import ReactDOM from 'react-dom'
import Card from './Card';

ReactDOM.render(
  <>
    <Card 
      imgsrc="https://wallpapercave.com/wp/wp4056410.jpg"
      title="A Netflix Original Series"
      sname="Dark"
      link="https://www.netflix.com/in/tittle/80990668?source=35"
     />
    <Card 
      imgsrc="https://m.media-amazon.com/images/M/MV5BNGQxMDcyOTEtZWZkNi00NzgwLWEzNjQtZmFhMGY5ZGRlMTdiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
      title="A Netflix Original Series"
      sname="Extra curricular"
      link="https://www.netflix.com/in/title/80990668"
     />
    <Card 
      imgsrc="https://m.media-amazon.com/images/M/MV5BN2ZmYjg1YmItNWQ4OC00YWM0LWE0ZDktYThjOTZiZjhhN2Q2XkEyXkFqcGdeQXVyNjgxNTQ3Mjk@._V1_.jpg"
      title="A Netflix Original Series"
      sname="Stranger things"
      link="https://www.netflix.com/in/title/80057281"
     />
  </>,
  document.getElementById("root")
);