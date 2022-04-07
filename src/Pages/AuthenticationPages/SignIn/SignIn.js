import React, { useState } from 'react';
import { Container, Typography, TextField, Button, CircularProgress, Alert } from '@mui/material';
import { Grid } from '@mui/material';
import { NavLink, useLocation } from 'react-router-dom'; 
import useAuth from '../../../Hooks/UseAuth';
import Navigations from '../../Shared/Navigations/Navigations';
const SignIn = () => {
  const { signUsingGoogle, loginUser, user, isLoading, authError } = useAuth()
  const [loginData, setLoginData] = useState({});
  const handleOnBlur = e => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  }
  const location = useLocation();
  // const history = useNavigate();

  const handleLoginSubmit = e => {
    console.log(loginData);
    loginUser(loginData.email, loginData.password, location)
    e.preventDefault();
  }

  const handleGoogleLogin = () => {
    signUsingGoogle(location)
  }
  return (
    <>  
    <Navigations></Navigations>
      <Container>
        <Grid container spacing={2}>
          <Grid item sx={{ mt: 8 }} xs={12} md={12}>
            <Typography variant="body1" style={{ fontSize: "3rem", color: "#33383b", }}  >Login</Typography>
            <form onSubmit={handleLoginSubmit}>
              <TextField
                sx={{ width: '75%', m: 1 }}
                label="Your Email"
                name="email"
                onBlur={handleOnBlur}
                variant="standard" />
              <TextField
                sx={{ width: '75%', m: 1 }}

                label="Your Password"
                type="password"
                name="password"
                onBlur={handleOnBlur}
                variant="standard" />

              <Button sx={{ width: '75%', m: 1 }} type="submit" style={{ backgroundColor: "#1BBF72" }} variant="contained">Login</Button>
              <NavLink
                style={{ textDecoration: 'none', display: "block" }}
                to="/signUp">
                <Button variant="text">New User? Please Register</Button>
              </NavLink>
              {isLoading && <CircularProgress />}
              {user?.email && <Alert severity="success">Login successfully!</Alert>}
              {authError && <Alert severity="error">{authError}</Alert>}
            </form>
            <Typography>
              <Button onClick={handleGoogleLogin} variant="contained" style={{ margin: "50px", backgroundColor: "#1BBF72" }} >Google SignIn</Button>
            </Typography>
          </Grid>

        </Grid>
      </Container> 
    </>
  );
};

export default SignIn;