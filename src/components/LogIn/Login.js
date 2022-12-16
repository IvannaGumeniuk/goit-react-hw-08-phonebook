import * as React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { AuthOperations, AuthSelector } from 'redux/auth';
// import Container from '../Container/Container';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// версія без використання бібліотеки стилізації
// export default function Login() {
//    const dispatch = useDispatch();
//    const isError = useSelector(AuthSelector.getError);
//    const isLoading = useSelector(AuthSelector.getIsLoading);

//    const [email, setEmail] = useState('');
//    const [password, setPassword] = useState('');

//    const onSubmitForm = async event => {
//       event.preventDefault();
//       dispatch(AuthOperations.logIn({ email, password }));

//       if (!isError) {
//          setEmail('');
//          setPassword('');
//       }
//    };

//    return (
//       <Container>
//          <h1>Login page</h1>
//          <form onSubmit={onSubmitForm}>
//             <label>
//                Email
               // <input
               //    onChange={event => setEmail(event.target.value)}
               //    type="email"
               //    name="email"
               //    value={email}
               //    placeholder="Email"
               //    required
               // />
//             </label>
//             <label>
//                Password
//                <input
                  // onChange={event => setPassword(event.target.value)}
                  // type="password"
                  // name="password"
                  // value={password}
                  // placeholder="XXXXXXX"
                  // minLength={7}
                  // required
//                />
//             </label>
//             <div>
            //    <button type="submit" disabled={isLoading}>
            //       {isLoading ? 'Login...' : 'Login'}
            //    </button>
            // </div>
//             <NavLink to="/register">Sign up</NavLink>
//          </form>
//       </Container>
//    );
// }
// ========================================================

// версія з використанням бібліотеки стилізації Material UI
const theme = createTheme();

export default function Login() {
   const dispatch = useDispatch();
   const isError = useSelector(AuthSelector.getError);
   const isLoading = useSelector(AuthSelector.getIsLoading);

   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   const onSubmitForm = async event => {
      event.preventDefault();
      dispatch(AuthOperations.logIn({ email, password }));

      if (!isError) {
         setEmail('');
         setPassword('');
      }
   };

   return (
      <ThemeProvider theme={theme}>
         <Grid container component="main" sx={{ height: '100vh' }}>
            <CssBaseline />
            <Grid
               item
               xs={false}
               sm={4}
               md={7}
               sx={{
                  backgroundImage: 'url(https://www.back40design.com/wp-content/uploads/2020/11/Phone_Book_Advertising_1.jpg)',
                  backgroundRepeat: 'no-repeat',
                  backgroundColor: (t) =>
                     t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
               }}
            />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
               <Box
                  sx={{
                     my: 8,
                     mx: 4,
                     display: 'flex',
                     flexDirection: 'column',
                     alignItems: 'center',
                  }}
               >
                  <Avatar sx={{ m: 1, bgcolor: '#eec21b' }}>
                     <LockOutlinedIcon />
                  </Avatar>
                  <Typography component="h1" variant="h5">
                     Sign in
                  </Typography>
                  <Box component="form" noValidate onSubmit={onSubmitForm} sx={{ mt: 1 }}>
                     <TextField
                        margin="normal"
                        fullWidth
                        onChange={event => setEmail(event.target.value)}
                        type="email"
                        name="email"
                        value={email}
                        placeholder="Email"
                        autoFocus
                        required
                     />
                     <TextField
                        margin="normal"
                        fullWidth
                        onChange={event => setPassword(event.target.value)}
                        type="password"
                        name="password"
                        value={password}
                        placeholder="XXXXXXX"
                        minLength={7}
                        required
                     />
                     <Button
                        type="submit"
                        disabled={isLoading}
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2, bgcolor: '#eec21b' }}
                     >
                        {isLoading ? 'Login...' : 'Login'}
                     </Button>

                     <Button
                        // type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 0, mb: 2, bgcolor: '#eec21b' }}
                     >
                        <NavLink to="/register">Sign up</NavLink>
                     </Button>
                  </Box>
               </Box>
            </Grid>
         </Grid>
      </ThemeProvider>
   );
}