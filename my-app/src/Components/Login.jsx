import './login.css';
import { useDispatch } from 'react-redux';
import { setEmail } from '../store/userActions';  // Import Redux action
import { useState } from 'react';

export default function Example() {
  const dispatch = useDispatch();
  const [email, setEmailState] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(setEmail(email));  // Store email in Redux
    console.log("Email stored in Redux:", email);
  };

  return (
    <>
      <div className="container">
        <div className="logo-section">
          <img
            alt="Your Company"
            src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
            className="logo"
          />
          <h2 className="header">Sign in to your account</h2>
        </div>

        <div className="form-section">
          <form className="form" onSubmit={handleLogin}>
            <div>
              <label htmlFor="email" className="label">
                Email address
              </label>
              <div className="input-container">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="input"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmailState(e.target.value)}
                />
              </div>
            </div>

            <div>
              <div className="password-container">
                <label htmlFor="password" className="label">
                  Password
                </label>
              </div>
              <div className="input-container">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="input"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="flex justify-center space-x-4 px-4">
              <button type="submit" className="submit-button">
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
