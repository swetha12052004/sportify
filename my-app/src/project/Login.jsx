import React, { useState } from "react";
import "./Login.css"; // Ensure Login.css is inside src/project or src/
import timeImage from "../images/gre.jpg"; // Import image correctly
import googleIcon from "../images/goo.png";
import facebookIcon from "../images/face.png";
import appleIcon from "../images/app.png";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
//import Swal from 'sweetalert2';
// import Swal from 'sweetalert2';
// import withReactContent from '@sweetalert2/react-content';

// const ReactSwal = withReactContent(Swal);

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/login", {
          email,
          password
      });
      alert(response.data.message);
      // if(response.data.success)
      //   {
      //     Swal.fire({
      //       title: 'Success!',
      //       text: (response.data.message),
      //       icon: 'success',
      //       confirmButtonText: 'OK'
      //     });
      //     navigate('/Reg');
      //   }
      //   else if(!(response.data.success))
      //   {
      //     Swal.fire({
      //       title: 'Error!',
      //       text: 'User name or password is incorrect.',
      //       icon: 'error',
      //       confirmButtonText: 'OK'
      //     });
      //   }
      // // ReactSwal.fire({
      //   title: 'Login Successful',
      //   text: 'Welcome to the app!',
      //   icon: 'success',
      //   confirmButtonText: 'OK'
      // });
      // navigate('/register');


  } catch (error) {
      alert(error.response?.data?.message || "Login failed");
  }

    // if (!email || !password) {
    //   setError("Both fields are required");
    //   return;
    // }
    // setError("");
    // console.log("Logged in with", email, password);
  };

  return (
    
    <div className="login-container">
      {/* Left Image Section */}
      <div className="left-section">
        <img src={timeImage} alt="Login Background" />
      </div>

      {/* Right Login Section */}
      <button className="back-button">Back</button>
          <h1 className="logo">SPORTIFY</h1>
      <div className="right-section">
        {/* Header Section */}
    
        
        <div className="login-card">
          <h2 className="login-title">Login</h2>
          {error && <p className="error-message">{error}</p>}

          {/* Login Form */}
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter an email address"
              className="input-field"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="input-field"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="login-button">Login</button>
          </form>

          {/* Social Login */}
          <div className="social-buttons">
            <img src={googleIcon} alt="Google" />
            <img src={facebookIcon} alt="Facebook" />
            <img src={appleIcon} alt="Apple" />
          </div>

          {/* Links */}
          <p className="account-links">
            No account? <a href="#" className="text-blue-600">Forget password</a>
          </p>

          <button className="create-account">Create Your Account</button>

          {/* Benefits Section */}
          <div className="benefits">
            <p>It's better when you're signed in</p>
            <ul>
              <li>Exclusive Deals and Sporty Rewards</li>
              <li>Personalized Experiences</li>
              <li>Faster Checkout</li>
              <li>Easy Returns/Exchange</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
