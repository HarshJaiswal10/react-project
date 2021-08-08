import React, { useState } from 'react';

const App = () => {
  
  const[fullName, setFullName] = useState({
    fname : '',
    lname : '',
    email : '',
    phone : '',
  });

  const InputEvent = (event) => {
    // setFullName(event.target.value);
    console.log(event.target.value);
    console.log(event.target.name);

    // const value = event.target.value;
    // const name = event.target.name;

    const {value, name} = event.target;

    setFullName((preValue) => {
      console.log(preValue); 

      return{
        ...preValue,
        [name] : value,
      }

      // if(name === 'fname'){
      //  return{
      //     fname : value,
      //     lname : preValue.lname,
      //     email : preValue.email,
      //     phone : preValue.phone,
      //  };
      // } else if(name === 'lname'){
      //   return{
      //      fname : preValue.fname,
      //      lname : value,
      //      email : preValue.email,
      //      phone : preValue.phone,
      //   };
      //  } else if(name === 'email'){
      //   return{
      //      fname : preValue.fname,
      //      lname : preValue.lname,
      //      email : value,
      //      phone : preValue.phone,
      //   };
      //  } else if(name === 'phone'){
      //   return{
      //      fname : preValue.fname,
      //      lname : preValue.lname,
      //      email : preValue.email,
      //      phone : value,
      //   };
      //  }
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
      <p>{fullName.email}</p>
      <p>{fullName.phone}</p>
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
      <br />
      <input 
        type='email' 
        placeholder='Enter Your email' 
        name="email"
        onChange={InputEvent} 
        value={fullName.email} 
      />
      <br />
      <input 
        type='number' 
        placeholder='Enter Your Phone Number' 
        name="phone"
        onChange={InputEvent} 
        value={fullName.phone} 
      />
      <button type="submit">Submit</button>
    </div>
    </form>
  </>
  );
};

export default App;