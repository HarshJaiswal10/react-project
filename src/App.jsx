import React, { useState } from 'react';

const App = () => {
  
  const[name, setName] = useState();
  const[fullName, setFullName] = useState();

  const InputEvent = (event) => {
    setName(event.target.value);
  };
  const onSubmit = () => {
    setFullName(name);
  };

  return(
  <>
    <div>
      <h1>hello {fullName}</h1>
      <input type='text' placeholder='Enter Your Name' onChange={InputEvent} value={name} />
      <button onClick={onSubmit}>Submit</button>
    </div>
  </>
  );
};

export default App;