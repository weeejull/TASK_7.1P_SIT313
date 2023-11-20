import React, { useState } from 'react';
import { auth } from './firebase'; // Import the 'auth' object from your Firebase configuration

const Login = () => {
  const [selectedNavItem, setSelectedNavItem] = useState('');
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showSignupForm, setShowSignupForm] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleNavItemChange = (item) => {
    setSelectedNavItem(item);
    setShowLoginForm(item === 'Login');
    setShowSignupForm(item === 'Signup');
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
      console.log('Login successful');
      // Additional logic if needed after successful login
    } catch (error) {
      console.error('Authentication error:', error.message);
    }
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    try {
      await auth.createUserWithEmailAndPassword(email, password);
      console.log('Sign up successful');
      // Additional logic if needed after successful signup
    } catch (error) {
      console.error('Signup error:', error.message);
    }
  };

  const handleSignupClick = () => {
    handleNavItemChange('Signup');
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            DEV@Deakin
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex" role="search" style={{ flex: 1 }}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className={`nav-link ${selectedNavItem === 'Post' ? 'active' : ''}`}
                aria-current="page"
                href="#"
                onClick={() => handleNavItemChange('Post')}
              >
                Post
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${selectedNavItem === 'Login' ? 'active' : ''}`}
                aria-current="page"
                href="#"
                onClick={() => handleNavItemChange('Login')}
              >
                Login
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {showLoginForm && (
        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-md-6">
              {/* Login Form */}
              <form>
                <table className="table">
                  <tbody>
                    <tr>
                      <td>Email address</td>
                      <td>
                        <input
                          type="email"
                          className="form-control"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Password</td>
                      <td>
                        <input
                          type="password"
                          className="form-control"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="d-grid gap-2">
                  <button type="submit" className="btn btn-primary" onClick={handleLoginSubmit}>
                    Login
                  </button>
                </div>
                <div className="mt-3">
                  <p>
                    Don't have an account? <span className="link" onClick={handleSignupClick}>Sign Up</span>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {showSignupForm && (
        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-md-6">
              {/* Signup Form */}
              <form>
                <table className="table">
                  <tbody>
                    <tr>
                      <td>Name</td>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Email address</td>
                      <td>
                        <input
                          type="email"
                          className="form-control"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Password</td>
                      <td>
                        <input
                          type="password"
                          className="form-control"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Confirm Password</td>
                      <td>
                        <input
                          type="password"
                          className="form-control"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="d-grid gap-2">
                  <button type="submit" className="btn btn-primary" onClick={handleSignupSubmit}>
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
