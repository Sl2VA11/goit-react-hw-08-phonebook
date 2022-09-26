import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
export default function PrivateRoutes() {
   const isLogged = useSelector(state => state.auth.isLogged);
   console.log(isLogged);
   if (!isLogged) { 
     return <Navigate to="/" />;
   }
   

   return <Outlet/>
}