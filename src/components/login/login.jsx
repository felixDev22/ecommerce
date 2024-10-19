import { useState } from 'react';
import { IoClose } from 'react-icons/io5';

const Login = ({setShowLogin}) => {
  const [curr, setCurr] = useState('Sign-up');

  return (
    <div className="Login">
      <form className="login-wrapper">
        <div className="login-title">
          <h2>{curr}</h2>
          <IoClose onClick={setShowLogin} />
        </div>
      </form>
    </div>
  );
};

export default Login;
