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
          <IoClose onClick={()=>setShowLogin(false)} />
        </div>
      </form>
    </div>
  );
};
Login.propTypes = {
  setShowLogin: PropTypes.func.isRequired,
};

export default Login;
