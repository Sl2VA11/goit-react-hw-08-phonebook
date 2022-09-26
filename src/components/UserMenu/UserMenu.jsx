import { useSelector } from 'react-redux';
import css from './UserMenu.module.css';
import { Link } from 'react-router-dom';
import { logout } from 'redux/auth/auth-operations';
import { useDispatch } from 'react-redux';
export default function UserMenu() {
  const userName = useSelector(state => state.auth.user.name);
  console.log(userName);

  const dispatch = useDispatch();

  
  return (
    <div className={css.UserMenu}>
      <div className={css.userWrapper}>
        <p className={css.userName}>
          Hello <span className={css.userName}>{userName} !</span>
        </p>
      </div>

      <Link to="/">
        <button className={css.logoutBtn} onClick={() => dispatch(logout())}>
          Logout
        </button>
      </Link>
    </div>
  );
  
}
