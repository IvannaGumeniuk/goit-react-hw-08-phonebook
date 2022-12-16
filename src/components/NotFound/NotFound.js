import { NavLink } from 'react-router-dom';
import Container from 'components/Container/Container';

export default function NotFoundView() {
   return (
      <Container>
         <h1>404</h1>
         <h2> not found 😭</h2>
         <img src= 
         "https://img.freepik.com/free-vector/oops-404-error-with-a-broken-robot-concept-illustration_114360-5529.jpg" alt="not found page" width="500px" height="500px"/>
         <NavLink to="/">← Go home</NavLink>
      </Container>
   );
}
