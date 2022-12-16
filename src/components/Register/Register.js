import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { AuthOperations, AuthSelector } from 'redux/auth';
// import Container from '../Container/Container';

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// версія без використання бібліотеки стилізації
// export default function RegisterView() {
//    const dispath = useDispatch();
//    const isLoading = useSelector(AuthSelector.getIsLoading);
//    const isError = useSelector(AuthSelector.getError);

//    const [name, setName] = useState('');
//    const [email, setEmail] = useState('');
//    const [password, setPassword] = useState('');

//    const onSubmitForm = async event => {
//       event.preventDefault();
//       dispath(AuthOperations.register({ name, email, password }));
//       if (!isError) {
//          setName('');
//          setEmail('');
//          setPassword('');
//       }
//    };

//    return (
//       <Container>
//          <h1>Register Page</h1>
//          <form onSubmit={onSubmitForm}>
//             <label>
//                Name
//                <input
//                   onChange={event => setName(event.target.value)}
//                   type="name"
//                   name="name"
//                   value={name}
//                   placeholder="Name"
//                   required
//                />
//             </label>
//             <label>
//                Email
//                <input
//                   onChange={event => setEmail(event.target.value)}
//                   type="email"
//                   name="email"
//                   value={email}
//                   placeholder="Email"
//                   required
//                />
//             </label>
//             <label>
//                Password
//                <input
//                   onChange={event => setPassword(event.target.value)}
//                   type="password"
//                   name="password"
//                   value={password}
//                   placeholder="XXXXXXX"
//                   minLength={7}
//                   required
//                />
//             </label>
//             <div>
               // <button type="submit" disabled={isLoading}>
               //    Sign up
               // </button>
//             </div>
//             <NavLink to="/login">← Back</NavLink>
//          </form>
//       </Container>
//    );
// }
// ========================================================

// версія з використанням бібліотеки стилізації Material UI
const theme = createTheme();

export default function Register() {
   const dispath = useDispatch();
   const isLoading = useSelector(AuthSelector.getIsLoading);
   const isError = useSelector(AuthSelector.getError);

   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   const onSubmitForm = async event => {
      event.preventDefault();
      dispath(AuthOperations.register({ name, email, password }));
      if (!isError) {
         setName('');
         setEmail('');
         setPassword('');
      }
   };

return (
   <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
         sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
         }}
      >
      <Avatar sx={{ m: 1, bgcolor: '#eec21b' }}>
         <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
         Sign up
      </Typography>
         <Box component="form" noValidate onSubmit={onSubmitForm} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
            <Grid item xs={12}>
               <TextField
                  required
                  fullWidth
                  onChange={event => setName(event.target.value)}
                  type="name"
                  name="name"
                  label="First Name"
                  value={name}
                  required
                  autoFocus
               />
            </Grid>
            <Grid item xs={12}>
               <TextField
                  required
                  fullWidth
                  onChange={event => setEmail(event.target.value)}
                  type="email"
                  name="email"
                  label="Email Address"
                  value={email}
                  required
               />
            </Grid>
            <Grid item xs={12}>
               <TextField
                  required
                  fullWidth
                  onChange={event => setPassword(event.target.value)}
                  type="password"
                  name="password"
                  label="Password"
                  value={password}
                  placeholder="XXXXXXX"
                  minLength={7}
                  required
               />
            </Grid>
            </Grid>
            <Button
               type="submit"
               disabled={isLoading}
               fullWidth
               variant="contained"
               sx={{ mt: 3, mb: 2, bgcolor: '#eec21b' }}
            >
               Sign Up
            </Button>
            <Button
               type="submit"
               fullWidth
               variant="contained"
               sx={{ mt: 0, mb: 2, bgcolor: '#eec21b' }}
            >
               <NavLink to="/login">← Back</NavLink>
            </Button>
         </Box>
      </Box>
      </Container>
   </ThemeProvider>
);
}