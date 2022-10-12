import Container from 'components/Container/Container';
import { useState } from 'react';
import Notiflix from 'notiflix';
import { useSelector } from 'react-redux';
// import css from './Login.module.css'
import css from './Login.module.css';
export default function Login({ onSubmit }) {
  const [contact, setContact] = useState({
    name: '',
    email: '',
  });
  const loginError = useSelector(state => state.auth.error);
  // console.log(loginError.status);

  const handleChange = e => {
    const { name, value } = e.target;

    setContact(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit(contact);

    e.target.reset();
  };

  if (loginError !== null) {
    if (loginError.status === 400) {
       Notiflix.Notify.failure(loginError.statusText);
    }
  }
    return (
      <div className={css.loginSection}>
        <Container>
          <div className="text-wrapper">
            <h1 className="title">Welcome back</h1>
            <p className="text">
              Start a productive journey <br /> starts right here
            </p>
          </div>
          <form onSubmit={handleSubmit} className="form">
            <div className="input-wrapper">
              <input
                type="email"
                name="email"
                placeholder="Enter your email "
                onChange={handleChange}
                className="input"
              />
            </div>

            <div className="input-wrapper">
              <input
                type="password"
                name="password"
                onChange={handleChange}
                placeholder="Password"
                className="input"
              />
              <button type="submit" className="btn">
                Login
              </button>
            </div>

            {/* {loginError.status !== null && loginError.status === 400
            ? Notiflix.Notify.warning(loginError.statusText)
            : null} */}
          </form>
        </Container>
      </div>
    );
}
