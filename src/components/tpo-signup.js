import React, { Component } from 'react';
import { useState } from "react";
// import MuiAlert from "@material-ui/lab/Alert";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import '../css/tpo-signup.css';
import { passwordStrength } from 'check-password-strength';

const TPOsignup = () => {

  const [FirstName, setFirstName] = useState(false);
  const [LastName, setLastName] = useState(false);
  const [EmpId, setEmpId] = useState(false);
  const [Email, setEmail] = useState(false);
  const [Phone, setPhone] = useState(false);
  const [Password, setPassword] = useState(false);

  // if (registerFirstName === "" && registerLastName === "" && registerEmail === "" && registerPhone === "" && registerPassword === "" && registerEmpId === "") {

  // }

  // let errorVal=false;

  const validateFName = (e) => {
    const FNregex = /^[a-z ,.'-]+$/i;
    if(!FNregex.test(e.target.value)){
      setFirstName(true);
    }
    if(e.target.value =="" || FNregex.test(e.target.value)){
      setFirstName(false);
    }
  }

  const validateLName = (e) => {
    const LNregex =  /^[a-z ,.'-]+$/i;
    if(!LNregex.test(e.target.value)){
      setLastName(true);
    }
    if(e.target.value =="" || LNregex.test(e.target.value)){
      setLastName(false);
    }
  }

  const validateID = (e) => {
    const IDregex = /^[0-9]*$/;
    if(!IDregex.test(e.target.value)){
      setEmpId(true);
    }
    if(e.target.value =="" || IDregex.test(e.target.value)){
      setEmpId(false);
    }
  }

  const validateEmail = (e) => {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!emailRegex.test(e.target.value)){
      setEmail(true);
    }
    if(e.target.value =="" || emailRegex.test(e.target.value)){
      setEmail(false);
    }
  }

  const validatePhone = (e) => {
    const phoneRegex = /^\d{10}$/;
    if(!phoneRegex.test(e.target.value)){
      setPhone(true);
    }
    if(e.target.value =="" || phoneRegex.test(e.target.value)){
      setPhone(false);
    }
  }

  // onSubmitHandler = (e) => {
  //   e.preventDefault();
  //  this.props.history.push('/tpoDashboard')
  // }

  return (
    <div className="whole-page">
      <div>
        <div className="title">
          <h1> TRAINING PLACEMENT CELL</h1>
          <h2 style={{ marginTop: "0.5em"}}> SIGN-UP </h2>
        </div>
        <div className="register-block">
          <TextField
            className="textFields"
            id="firstName"
            label="First Name"
            variant="filled" required autoFocus
            helperText={FirstName ? "Letters only": ""}
            onChange={validateFName}
            error={FirstName}
          /><br />
          <TextField
            className="textFields"
            id="lastName"
            label="Last Name"
            variant="filled" 
            helperText={LastName ? "Letters only": ""}
            onChange={validateLName}
            error={LastName}
          /><br />
          <TextField
            className="textFields"
            id="empId"
            label="Employee ID"
            variant="filled" required
            helperText={EmpId ? "Numbers only": ""}
            onChange={validateID}
            error={EmpId}
          /><br />
          <TextField
            className="textFields"
            id="email"
            label="Email"
            variant="filled" required
            helperText={Email ? "Enter proper email ID": ""}
            onChange={validateEmail}
            error={Email}
          /><br />
          <TextField
            className="textFields"
            id="phone"
            label="Phone"
            variant="filled" required
            helperText={Phone ? "Enter ten digits": ""}
            onChange={validatePhone}
            error={Phone}
          /><br />
          <TextField
            className="textFields"
            id="password"
            label="Password"
            type="password"
            variant="filled" required
            onChange={e => setPassword(e.target.value)}
          />
          <small className = "passMsg">
              Your password strength:{" "}
              <span style={{ color : "#1565C0" }}>{Password ? (passwordStrength(Password).value) : <span>EMPTY</span>}</span>
          </small>
          <br />
          <Button variant="contained" type="submit">Register</Button>
        </div>
      </div>
      <br></br>
    </div>
  )
}

export default TPOsignup;