import Login from "./Login";
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
// import { Navigate } from 'react-router-dom';
import { login } from 'redux/auth/auth-operations';
export default function LoginPage() {
     
   const dispatch = useDispatch();
   const isLoggedIn = useSelector(state => state.auth.isLogged);
   
   const onSubmit = (email, password) => {
     
     dispatch(login({ email, password }));
   };
  
   if (isLoggedIn === true) {
       console.log(isLoggedIn);
      return <Navigate to='/contacts'/>;
    }
   return (
      <Login onSubmit={onSubmit} />
   );
}