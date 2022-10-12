import UserMenu from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import css from './NavBar.module.css';
import Container from 'components/Container/Container';

export default function NavBar() {
  const isLoggedIn = useSelector(state => state.auth.isLogged);

  return (
    <header>
      <nav className={css.navbar}>
        <Container>
          <div className={css.navbarLinkWrapper}>
            <NavLink to="/" className="navbar-link">
              Home
            </NavLink>

            {isLoggedIn === true ? (
              <>
                <NavLink to="/contacts" className="navbar-link">
                  Contacts
                </NavLink>

                <UserMenu />
              </>
            ) : (
              <div className={css.authMenu}>
                <NavLink to="/login" className="navbar-link">
                  Login
                </NavLink>
                <NavLink to="/register" className="navbar-link">
                  Register
                </NavLink>
              </div>
            )}
          </div>
        </Container>
      </nav>
    </header>
  );
}
