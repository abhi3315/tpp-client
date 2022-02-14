import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import './Authentication/css/login.css';
import { Link } from 'react-router-dom';


export default function Home() {
  return (
    <>
    <h1 style={{textAlign:'center'}}>Home Page</h1>
    <List className='list' style={{margin:'10% 40%'}}>
      <ListItem>
      <Link to='/signup' color="inherit">
          <ListItemText primary="Sign-UP"  />
        </Link>
      </ListItem>
      <ListItem>
      <Link to='/student/login' color="inherit">
        <ListItemText primary="Student Login  "  />
      </Link>
      </ListItem>
      <ListItem>
      <Link to='/tpo/login' color="inherit">
        <ListItemText primary="TPO Login"  />
       </Link>
      </ListItem>
    </List>
    </>
  );
}
