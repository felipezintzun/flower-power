import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations.js';
import Auth from '../../utils/auth.js';
import "./signup.css";
import Man from "../../img/man-watering.jpg";



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

        <div className="i-right">
                <div className="i-card bg"></div>
                    <div className="i-card">
                        <img src={Man} alt="" className="i-image" />
                    </div>
      </div>

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