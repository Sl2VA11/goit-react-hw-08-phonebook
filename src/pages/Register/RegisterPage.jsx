import Register from "./Register"
import { useDispatch, useSelector } from 'react-redux';
import { register } from 'redux/auth/auth-operations';
import { Navigate } from 'react-router-dom';
export default function RegisterPage() {
   const dispatch = useDispatch();
   const isLoggedIn = useSelector(state => state.auth.isLogged);
   
    const onSubmit = (name, email, password) => {
      dispatch(register({ name, email, password }));
    };
   
   if (isLoggedIn === true) {
     console.log(isLoggedIn);
     return <Navigate to="/contacts" />;
   }
   return <Register onSubmit={onSubmit}/>
}