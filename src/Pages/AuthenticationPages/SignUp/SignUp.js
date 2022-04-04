// import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import { NavLink, useLocation } from 'react-router-dom';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import useFireBase from '../../../Hooks/UseFireBase';

// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <NavLink color="inherit" to="/home">
//         Your Website
//       </NavLink>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// const theme = createTheme();

// export default function SignUp() {
//   const [signInData, setSignInData] = React.useState({});
//   const { signUsingGoogle, registerUser } = useFireBase()

//   const location = useLocation();

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     setSignInData({
//       email: data.get('email'),
//       password: data.get('password'),
//       name: data.get('name')
//     });
//   };
//   const handleGoogleLogin = () => {
//     signUsingGoogle(location)
//   }
//   const handleEmailLogIn = () => {
//     alert(signInData.email)
//     alert(signInData.name)
//     alert(signInData.password)
//   }

//   return (
//     <ThemeProvider theme={theme}>
//       <Container component="main" maxWidth="xs">
//         <CssBaseline />
//         <Box
//           sx={{
//             marginTop: 8,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//           }}
//         >
//           <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//             <LockOutlinedIcon />
//           </Avatar>
//           <Typography component="h1" variant="h5">
//             Sign up
//           </Typography>
//           <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
//             <Grid container spacing={2}>
//               <Grid item xs={12} sm={12}>
//                 <TextField
//                   autoComplete="given-name"
//                   name="name"
//                   required
//                   fullWidth
//                   id="name"
//                   label="First Name"
//                   autoFocus
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   id="email"
//                   label="Email Address"
//                   name="email"
//                   autoComplete="email"
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   name="password"
//                   label="Password"
//                   type="password"
//                   id="password"
//                   autoComplete="new-password"
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <FormControlLabel
//                   control={<Checkbox value="allowExtraEmails" color="primary" />}
//                   label="I want to receive inspiration, marketing promotions and updates via email."
//                 />
//               </Grid>
//             </Grid>
//             <Button
//               onClick={handleEmailLogIn}
//               type="submit"
//               fullWidth
//               variant="contained"
//               sx={{ mt: 3, mb: 2 }}
//             >
//               Sign Up
//             </Button>
//             <Grid container justifyContent="flex-end">
//               <Typography>
//                 <Button onClick={handleGoogleLogin} variant="contained" style={{ margin: "50px", backgroundColor: "#1BBF72" }} >Google SignIn</Button>
//               </Typography>
//               <Grid item>
//                 <NavLink to='/signIn' variant="body2">
//                   Already have an account? Sign in
//                 </NavLink>
//               </Grid>
//             </Grid>
//           </Box>
//         </Box>
//         <Copyright sx={{ mt: 5 }} />
//       </Container>
//     </ThemeProvider>
//   );
// }

import React from 'react';
import { Container, Typography, TextField, Button, CircularProgress, Alert, } from '@mui/material';
import { useState } from 'react';
import { Grid } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import { NavLink, useNavigate } from 'react-router-dom';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Navigations from '../../Shared/Navigations/Navigations';
import useFireBase from '../../../Hooks/UseFireBase';
import Footer from '../../Shared/Footer/Footer';
const SignUp = () => {
  const { user, registerUser, isLoading, authError } = useFireBase();
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