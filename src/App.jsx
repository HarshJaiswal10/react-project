import React, { useState } from 'react';

const App = () => {
  
  const[fullName, setFullName] = useState({
    fname : '',
    lname : '',
  });

  const InputEvent = (event) => {
    // setFullName(event.target.value);
    console.log(event.target.value);
    console.log(event.target.name);

    // const value = event.target.value;
    // const name = event.target.name;

    const {value, name} = event.target;

    setFullName((preValue) => {
      // console.log(preValue); 
      if(name === 'fname'){
       return{
          fname : value,
          lname : preValue.lname,
       };
      } else if(name === 'lname'){
        return{
           fname : preValue.fname,
           lname : value,
        };
       }
    });
  };
  const onSubmit = (event) => {
    event.preventDefault();
    alert('Form Submitted'); 
  };

  return(
  <>
    <form onSubmit={onSubmit}>
    <div>
      <h1>hello {fullName.fname} {fullName.lname}</h1>
      <input 
        type='text' 
        placeholder='Enter Your Name' 
        name="fname"
        onChange={InputEvent} 
        value={fullName.fname} 
      />
      <br />
      <input 
        type='text' 
        placeholder='Enter Your Last Name' 
        name="lname"
        onChange={InputEvent} 
        value={fullName.lname} 
      />
      <button type="submit">Submit</button>
    </div>
    </form>
  </>
  );
};

export default App;