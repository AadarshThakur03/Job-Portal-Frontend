import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
          />
        </div>
        <button type="submit" className="login-btn">Login</button>
      </form>
      
      <p style={{textAlign:'center'}}>
      Don't have an account?{' '}
        <Link to="/signUp" className="toggle-link" style={{ color: '#007BFF', textDecoration: 'underline' }}>
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default Login;
