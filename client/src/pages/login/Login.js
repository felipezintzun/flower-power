import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations.js';
import Auth from '../../utils/auth.js';
import "./login.css";

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async event => {
    event.preventDefault();

    try {
      const { data } = await login({
        variables: { ...formState }
      });
    
      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main className="login">
      <div className="login-wrapper">
      <div className="lwrapper-left">
        <img src="https://media.istockphoto.com/photos/everyday-should-be-earth-day-picture-id869262278?k=20&m=869262278&s=612x612&w=0&h=X7D1hW44LxOroe8HJ90V8iiNlOKriWrkeuayLoHzLiU="></img>
      </div>

        <div className='lwrapper-right'>
        <h1 className="login-title">Login</h1>
        <p className='login-description'>
          Login for full access to our community of plant lovers!
          </p>
          <div className="login-form">
            <form onSubmit={handleFormSubmit}>
              <input
                className='form-input'
                placeholder='Your email'
                name='email'
                type='email'
                id='email'
                value={formState.email}
                onChange={handleChange}
              />
              <input
                className='form-input'
                placeholder='******'
                name='password'
                type='password'
                id='password'
                value={formState.password}
                onChange={handleChange}
              />
              <button className="submit-btn" type='submit'>
                Submit
              </button>
            </form>
            {error && <div>Login failed</div>}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;