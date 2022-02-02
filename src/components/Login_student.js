import {React} from 'react';
import { useState } from "react";
import TextField from '@mui/material/TextField';
import { Grid, FormControlLabel, Checkbox } from '@material-ui/core';
import Button from '@mui/material/Button';
import '../css/login.css';


const Login = () => {

  // const [FirstName, setFirstName] = useState(false);
  // const [LastName, setLastName] = useState(false);
  // const [EmpId, setEmpId] = useState(false);
  // const [Email, setEmail] = useState(false);
  // const [Phone, setPhone] = useState(false);
   const [Password, setPassword] = useState(false);


  // const validateFName = (e) => {
  //   const FNregex = /^[a-z ,.'-]+$/i;
  //   if(!FNregex.test(e.target.value)){
  //     setFirstName(true);
  //   }
  //   if(e.target.value =="" || FNregex.test(e.target.value)){
  //     setFirstName(false);
  //   }
  // }

  // const validateLName = (e) => {
  //   const LNregex =  /^[a-z ,.'-]+$/i;
  //   if(!LNregex.test(e.target.value)){
  //     setLastName(true);
  //   }
  //   if(e.target.value =="" || LNregex.test(e.target.value)){
  //     setLastName(false);
  //   }
  // }

  // const validateID = (e) => {
  //   const IDregex = /^[0-9]*$/;
  //   if(!IDregex.test(e.target.value)){
  //     setEmpId(true);
  //   }
  //   if(e.target.value =="" || IDregex.test(e.target.value)){
  //     setEmpId(false);
  //   }
  // }

  // onSubmitHandler = (e) => {
  //   e.preventDefault();
  //  this.props.history.push('/tpoDashboard')
  // }

  return (

    <div className='whole-page' style={{height:'100%'}}>
    
      <div className='page2'>
        <div className="title">
         
        <h1>Student  Login</h1>
        </div>
      
          <br />
          
        <div className="register-block">
      
        
          <TextField
            className="textFields"
            id="username"
            label="username"
          
             autoFocus required /><br />
         
     
          <TextField
            className="textFields"
            id="password"
            label="Password"
            type="password"
            onChange={e => setPassword(e.target.value)}
            required
           
          />

                   <p>&nbsp;</p>
                    <Grid container alignItems="center" justify="space-between" className='grid2' >
                        <Grid item style={{marginLeft:'35%'}}>
                            <FormControlLabel control={
                                <Checkbox
                                    color="primary"
                                />
                            } label="Remember me" />
                        </Grid>
                        <Grid item style={{marginRight:'35%'}}>
                            <Button disableFocusRipple disableRipple style={{ textTransform: "none" }} variant="text" color="primary">Forgot password ?</Button>
                        </Grid>
                    </Grid>
        
          <br />
          <Button style={{backgroundColor:'#1976d2', borderRadius:'6px', padding:'6px 16px', minWidth:'64px' , color:'white', fontWeight:'500'}} variant="contained" type="submit" color='success'>Login</Button>
      
        </div>
     
      </div>
  
    </div>
  )
}

export default Login;