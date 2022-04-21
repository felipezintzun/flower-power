import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations.js';
import Auth from '../../utils/auth.js';
import "./signup.css";


const Signup = () => {
  const [formState, setFormState] = useState({ username: '', email: '', password: '' });
  const [addUser, { error }] = useMutation(ADD_USER);

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
      const { data } = await addUser({
        variables: { ...formState }
      });
    
      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main className="signup">
      {/* <div className='col-12 col-md-6'> */}
        <div className="signup-wrapper">
        <div className="swrapper-left">
          <img src="https://images.unsplash.com/photo-1613378690701-63c26ac1fb29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"></img>
        </div>

        <div className="swrapper-right">
        <h1 className="signup-title">Sign Up</h1>
          <p className='signup-description'>
          Sign up to join our community of plant enthusiast!
          </p>
            <form className="signup-form" onSubmit={handleFormSubmit}>
              <input
                placeholder="Your username"
                name="username"
                type="username"
                id="username"
                value={formState.username}
                onChange={handleChange}
              />
              <input
                placeholder='Your email'
                name='email'
                type='email'
                id='email'
                value={formState.email}
                onChange={handleChange}
              />
              <input
                placeholder='******'
                name='password'
                type='password'
                id='password'
                value={formState.password}
                onChange={handleChange}
              />
              <button className="submit-btn" type="submit">
                Submit
              </button>
            </form>
            {error && <div>Sign up failed</div>}
          </div>
          
        </div>
      {/* </div> */}
    </main>
  );
};

export default Signup;