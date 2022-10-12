import { useState } from 'react';

import { useSelector } from 'react-redux';
import css from './Register.module.css';
import Notiflix from 'notiflix';
export default function Register({ onSubmit }) {
  const [contact, setContact] = useState({
    name: '',
    email: '',
    password: '',
  });

  const registerError = useSelector(state => state.auth.error);

  const onChange = e => {
    const { name, value } = e.target;

    setContact(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit(contact);
    e.target.reset();
  };

  if (registerError !== null) {
    if (registerError.status === 400) {
      Notiflix.Notify.failure(registerError.statusText);
    }
  }

  return (
    <div className={css.registerSection}>
      <div className="container">
        <div className="text-wrapper">
          <h1 className="title">We welcome you</h1>
          <p className="text">
            Enter your personal details and <br /> get started right away
          </p>
        </div>

        <form action="" className="form" onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <input
              type="name"
              placeholder="Enter your name"
              name="name"
              onChange={onChange}
              className="input"
            />
          </div>
          <div className="input-wrapper">
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              onChange={onChange}
              className="input"
            />
          </div>
          <div className="input-wrapper">
            <input
              type="password"
              placeholder="Enter your password"
              name="password"
              onChange={onChange}
              className="input"
            />
            <button type="submit" className="btn">
              Register
            </button>
          </div>
        </form>
        {/* {registerError !== null && registerError.status !== 401 ? (
          <div>
            <p style={{ color: 'red', fontSize: 25 }}>
              {registerError.statusText}
            </p>
          </div>
        ) : null}

        {registerError !== null && registerError.status === 401 ? (
          <div>
            <p style={{ color: 'red', fontSize: 25 }}>Authorisate please</p>
          </div>
        ) : null} */}
      </div>
    </div>
  );
}
