import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { AuthOperations, AuthSelector } from 'redux/auth';
import Home from './Home/Home';
import Login from './LogIn/Login';
import Register from './Register/Register';
import Loader from './Loader/Loader';
import NotFound from './NotFound/NotFound';

import PrivateRoute from './PrivateRoute/PrivateRoute';
import PablicRoute from './PablicRoute/PablicRoute';

export default function App() {
   const dispatch = useDispatch();
   const isRefreshing = useSelector(AuthSelector.getIsRefreshing);

   useEffect(() => {
      dispatch(AuthOperations.fetchCurrentUser());
   }, [dispatch]);

   return isRefreshing ? (
      <Loader />
   ) : (
      <Routes>
         <Route
            exact
            path="/"
            element={
               <PrivateRoute>
                  <Home />
               </PrivateRoute>
            }
         />
         <Route
            path="login"
            element={
               <PablicRoute restricted>
                  <Login />
               </PablicRoute>
            }
         />
         <Route
            path="register"
            element={
               <PablicRoute restricted>
                  <Register />
               </PablicRoute>
            }
         />
         <Route path="*" element={<NotFound />} />
      </Routes>
   );
}