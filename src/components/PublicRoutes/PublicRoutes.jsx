import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
export default function PublicRoutes() {
  const isLogged = useSelector(state => state.auth.isLogged);
  console.log(isLogged);
  if (isLogged) {
    return <Navigate to="/contacts" />;
  }

  return <Outlet />;
}
