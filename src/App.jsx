import React, { useState } from 'react';

const App = () => {
  const state = useState();
  const [count, setCount] = useState(0);

  const IncNum = () => {
    setCount(count + 1); 
  };

  return(
    <>
      <h1> {count} </h1>
      <button onClick={IncNum}> Click Me</button>
    </>
  ); 
};

export default App;

// import React, { useState } from 'react';

// const App = () => {
//   let newTime = new Date().toLocaleTimeString();
//   const [ctime, setCTime] = useState(newTime);

//   const IncNum = () => {
//     let newcTime = new Date().toLocaleTimeString();
//     setCTime(newcTime); 
//   };

//   return(
//     <>
//       <h1> {ctime} </h1>
//       <button onClick={IncNum}> Click Me</button>
//     </>
//   ); 
// };

export default App;