import { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import PropTypes from 'prop-types';
import './login.css';

const Login = ({ setShowLogin }) => {
  const [curr, setCurr] = useState('Sign-up');

  return (
    <div className="login">
      <form className="login-wrapper">
        <div className="login-title">
          <h2>{curr}</h2>
          <IoClose onClick={() => setShowLogin(false)} className="cross" />
        </div>
        <div className="login-input">
          {curr === 'Login' ? (
            <></>
          ) : (
            <input type="name" placeholder="Enter your Name" required />
          )}

          <input type="email" placeholder="Enter your Email" required />
          <input type="confirm-email" placeholder="Confirm Email" required />
          <input type="password" placeholder="Password" required />
        </div>
        <button className="submit">
          {curr === 'Sign-up' ? 'Create an account' : 'Login'}
        </button>
        <div className="terms">
          {curr === 'Sign-up' ? (
            <div>
              <input type="checkbox" required />
              <p>I agree to the terms of use & privacy policy.</p>
            </div>
          ) : (
            ''
          )}

          {curr === 'Login' ? (
            <p>
              Create a new account?{' '}
              <span onClick={() => setCurr('Sign-up')}> Click here</span>
            </p>
          ) : (
            <p>
              Already have an account?
              <span onClick={() => setCurr('Login')}> Login here</span>{' '}
            </p>
          )}
        </div>
      </form>
    </div>
  );
};
Login.propTypes = {
  setShowLogin: PropTypes.func.isRequired,
};

export default Login;
