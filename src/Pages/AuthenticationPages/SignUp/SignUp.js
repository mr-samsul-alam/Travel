import React from 'react';
import { Container, Typography, TextField, Button, CircularProgress, Alert, } from '@mui/material';
import { useState } from 'react';
import { Grid } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { NavLink, useNavigate } from 'react-router-dom';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import useAuth from '../../../Hooks/UseAuth';
const SignUp = () => {
  const { user, registerUser, isLoading, authError } = useAuth();
  const [regData, setRegData] = useState({});

  const history = useNavigate();

  const handleOnBlur = e => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...regData };
    newLoginData[field] = value;
    console.log(newLoginData);
    setRegData(newLoginData);
  }
  const handleLoginSubmit = e => {
    if (regData.password !== regData.password2) {
      alert('Your password did not match');
      return
    }
    registerUser(regData.email, regData.password, regData.name, history);
    console.log(regData.name);

    e.preventDefault();
  }
  return (
    <>
      <Container>
        <Grid container spacing={2}>
          <Grid item sx={{ mt: 8 }} xs={12} md={12} >
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Typography component="h1" variant="h5" sx={{
              marginTop: 3,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
              <Avatar Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
              </Avatar>
            </Typography>

            {!isLoading && <form onSubmit={handleLoginSubmit}>
              <TextField
                sx={{ width: '75%', m: 1 }}

                label="Your Name"
                name="name"
                type="name"
                onBlur={handleOnBlur}
                variant="standard" />
              <TextField
                sx={{ width: '75%', m: 1 }}

                label="Your Email"
                name="email"
                type="email"
                onBlur={handleOnBlur}
                variant="standard" />
              <TextField
                sx={{ width: '75%', m: 1 }}

                label="Your Password"
                type="password"
                name="password"
                onBlur={handleOnBlur}
                variant="standard" />
              <TextField
                sx={{ width: '75%', m: 1 }}

                label="ReType Your Password"
                type="password"
                name="password2"
                onBlur={handleOnBlur}
                variant="standard" />

              <Button sx={{ width: '75%', m: 1 }} type="submit" style={{ margin: "50px", backgroundColor: "#1BBF72" }} variant="contained">Register</Button>
              <NavLink
                style={{ textDecoration: 'none' }}
                to="/signIn">
                <Button variant="text">Already Registered? Please Login</Button>
              </NavLink>
            </form>}
            {isLoading && <CircularProgress />}
            {user?.email && <Alert severity="success">User Created successfully!</Alert>}
            {authError && <Alert severity="error">{authError}</Alert>}

          </Grid>
        </Grid>

      </Container>
    </>

  );
};

export default SignUp;