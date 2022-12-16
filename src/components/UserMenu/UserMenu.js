import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AuthOperations, AuthSelector } from 'redux/auth';
import styles from './UserMenu.module.css';

export default function UserMenu() {
   const email = useSelector(AuthSelector.getEmail);
   const dispatch = useDispatch();

   return (
      <div className={styles.container}>
         <span className={styles.text}>Welcome {email}</span>
         <button className={styles.btn}
               type="button"
               onClick={() => dispatch(AuthOperations.logOut())}
         >
            <b>LOGOUT</b>
         </button>
      </div>
   );
}