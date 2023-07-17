import React, { useState } from 'react';
import './login.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from './Redux/usersslice';
const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  dispatch(login({name:email, password:password,loggedIn:true}));
  const handleSubmit = (e) => {
    e.preventDefault();
    window.alert('Login successfully!');
    // Add your authentication logic here
    // For simplicity, let's just log the email and password
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className='box'>
        <div className='login-content'>
      <div className='login-heading'><h1>Login</h1></div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
         
        </div>
        <button type="submit" class='bt' ><Link to="/home" className='logbut'>Login</Link></button>
      </form>
        <div className="reg">
            <Link to="/register"><p className="reg1">
               Don't have an account?Register</p></Link>
            
        </div>
        </div>
    </div>
  );
};

export default LoginPage;

