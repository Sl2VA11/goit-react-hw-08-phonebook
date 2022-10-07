import Container from 'components/container/Container';
import { useState } from 'react';

// import { useSelector } from 'react-redux';
// import css from './Login.module.css'
import css from './Login.module.css'
export default function Login( {onSubmit} ) {
  const [contact, setContact] = useState({
    name: '',
    email: '',
  });
  // const loginError = useSelector(state => state.auth.error);
  
  const handleChange = e => {
    const { name, value } = e.target;

    setContact(prev => ({ ...prev, [name]: value }));

  };

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit(contact);

    e.target.reset();
  };

  return (
    <div className={css.loginSection}>
      <Container>
        <div className='text-wrapper'>
          <h1 className='title'>Welcome back</h1>
          <p className='text'>
            Start a productive journey <br /> starts right here
          </p>
        </div>
        <form onSubmit={handleSubmit} className='form'>
          <div className='input-wrapper'>
            <input
              type="email"
              name="email"
              placeholder="Enter your email "
              onChange={handleChange}
              className='input'
            />
          </div>

          <div className='input-wrapper'>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              placeholder="Password"
              className='input'
            />
            <button type="submit" className='btn'>
              Login
            </button>
          </div>

          {/* {loginError !== null && (
            <div className="">
              <p style={{ color: 'red', fontSize: 25 }}>
                {loginError.statusText}
              </p>
            </div>
          )} */}
        </form>
      </Container>
    </div>
  );
}
