import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import * as React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';
export default function Register() {
  const [name,setName]=useState();
  const [pass,setpass]=useState();
  const handleSubmit = async (e) => {
    await axios.post('http://localhost:3001/users',{"name":name,"pass":pass});
    console.log("skdkdkdkkkdkd");
  }

  return (
    <body>
      <div className='REG'>
    <Box className='aa'
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '35ch' },
      }}
      noValidate
      autoComplete="off"
    >
      
        <div className='icon'>
        <h1>Register Now!</h1>
        </div>
      <div id="a">
        <TextField
        required
        id="outlined-required"
        label="Username"
        onChange={(e)=>{setName(e.target.value)}}
        />
        <br/>
        <TextField
        required
        id="outlined-required"
        label="Email Id"
        />
        <br/>
        <TextField
        required
        id="outlined-password-input"
        label="Password"
        onChange={(e)=>{setpass(e.target.value)}}
        type="password"
          autoComplete="current-password"
          />
          <br/>
        <TextField
        required
          id="outlined-password-input"
          label="Confirm Password"
          type="Confirm password"
          autoComplete="current-password"
          />
          <br/>
          <br/>
          
          {/* <Link to='/ho'> */}
            
          <Button onClick={handleSubmit} variant='contained' color='inherit' className='abc'>Register</Button>
          {/* </Link> */}
          <br></br><br></br>
            <h4>Already have an Account?  
            <Link to='/Login'>Sign In</Link>
            
            </h4>
       
      </div>
    </Box>
    </div>
          </body>
  );
}