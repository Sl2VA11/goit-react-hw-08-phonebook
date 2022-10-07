import { React, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Contacts from './contacts/Contacts';
import NavBar from './NavBar/NavBar';
import Home from 'pages/Home/Home';
import RegisterPage from 'pages/Register/RegisterPage';
import { useDispatch, useSelector } from 'react-redux';
import LoginPage from 'pages/Login/LoginPage';
import Loader from './Loader/Loader';
import PrivateRoutes from './PrivateRoutes/PrivateRoutes';
import PublicRoutes from './PublicRoutes/PublicRoutes';
import { current } from 'redux/auth/auth-operations';
import Footer from './Footer/Footer';
// import ModalFindOut from './ModalFindOut/ModalFindOut';
export function App() {
  const loadingContacts = useSelector(store => store.contacts.loading);
  const authLoading = useSelector(state => state.auth.loading);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  return (
    <>
      <NavBar />
      {loadingContacts || authLoading ? <Loader /> : null}
      <Routes>
        <Route path="/" element={<Home />} />

        <Route element={<PrivateRoutes />}>
          <Route path="/contacts" element={<Contacts />} />
        </Route>

        <Route element={<PublicRoutes />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>
      </Routes>
      <Footer />    
    </>
  );
}
