import React, { useState } from 'react';

const App = () => {
  
  const[name, setName] = useState("");
  const[fullName, setFullName] = useState("");
  const[lastName, setLastName] = useState("");
  const[lastNameNew, setLastNameNew] = useState("");

  const InputEvent = (event) => {
    setName(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    setFullName(name);
    setLastNameNew(lastName)
  };
  const InputEventTwo = (event) =>{
    setLastName(event.target.value);
  };

  return(
  <>
    <form onSubmit={onSubmit}>
    <div>
      <h1>hello {fullName} {lastNameNew}</h1>
      <input type='text' placeholder='Enter Your Name' onChange={InputEvent} value={name} />
      <br />
      <input type='text' placeholder='Enter Your Last Name' onChange={InputEventTwo} value={lastName} />
      <button type="submit">Submit</button>
    </div>
    </form>
  </>
  );
};

export default App;