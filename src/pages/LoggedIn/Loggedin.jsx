import React, { useState } from 'react'
import './Loggedin.css'
import { Link, useNavigate } from 'react-router-dom'

const Loggedin = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const logInAdmin = async (e) => {
    e.preventDefault();
    if (password === "1111" && email === "sk@gmail.com") {
      navigate('/');
    } else {
      alert('Invalid admin credentials');
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    // Implement normal user login logic here
    alert(`Logged in with email: ${email}`);
  };

  return (
    <div className='loggedin'>
      <h1>Welcome to Blog</h1>

      <form className='signup-form' onSubmit={handleLogin}>
        <h2>Log In</h2>
        <div className="mb-3">
          <input 
            onChange={(e) => setEmail(e.target.value)} 
            type="email" 
            className="form-control" 
            placeholder="Enter Email" 
            required
          />
        </div>
        <div className="mb-3">
          <input 
            onChange={(e) => setPassword(e.target.value)} 
            type="password" 
            className="form-control" 
            placeholder="Enter password" 
            required
          />
        </div>
        <div className="mb-3">
          <input 
            type="submit" 
            className="form-control btn btn-success" 
            value="Log In" 
          />
        </div>
        <div className="mb-1">
          <button 
            onClick={logInAdmin} 
            className="form-control btn btn-success"
          >
            Login as Admin
          </button>
        </div>
        <p>Don't have an account? <Link to='/signUp'>Sign Up</Link></p>
      </form>
    </div>
  );
};

export default Loggedin;
