import { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import PropTypes from 'prop-types';

const Login = ({ setShowLogin }) => {
  const [curr, setCurr] = useState('Sign-up');

  return (
    <div className="Login">
      <form className="login-wrapper">
        <div className="login-title">
          <h2>{curr}</h2>
          <IoClose onClick={() => setShowLogin(false)} />
        </div>
        <div className="input">
          {curr === 'Login' ? (
            <></>
          ) : (
            <input type="name" placeholder="Enter your Name" required />
          )}

          <input type="email" placeholder="Enter your Email" required />
          <input type="Confirm email" placeholder="Confirm email" required />
          <input type="password" placeholder="Password" required />
        </div>
        <button className="submit">
          {curr === 'Sign-up' ? 'Create an account' : 'Login'}
        </button>
        <div className="terms">
          <input type="checkbox" required />
          <p>I agree to the terms of use & privacy policy.</p>
        </div>
      </form>
    </div>
  );
};
Login.propTypes = {
  setShowLogin: PropTypes.func.isRequired,
};

export default Login;
