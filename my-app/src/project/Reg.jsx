import React, { useState } from "react";
import "./Reg.module.css";
import axios from "axios";

const Reg = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    password: "",
  });
  
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};
    
    if (!/^[A-Za-z\s]+$/.test(formData.fullname)) {
      newErrors.fullname = "Full name must contain only letters and spaces.";
    }
    
    if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    
    if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid 10-digit phone number.";
    }
    
    const hasUppercase = /[A-Z]/.test(formData.password);
    const hasNumber = /\d/.test(formData.password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(formData.password);
    
    if (!hasUppercase || !hasNumber || !hasSpecialChar) {
      newErrors.password = "Password must contain at least one uppercase letter, one number, and one special character.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit =async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/register", {
          fullname:formData.fullname,
          email:formData.email,
          phone:formData.phone,
          password:formData.password,
      });
      alert(response.data.message);

  } catch (error) {
      alert(error.response?.data?.message || "Login failed");
  }

    // if (validate()) {
    //   console.log("Form submitted", formData);
    //   // Redirect or perform API call
    // }
  };

  return (
    <div className="container">
      <h2>Create an Account</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label><b>Full Name</b></label>
          <input type="text" name="fullname" value={formData.fullname} onChange={handleChange} required />
          {errors.fullname && <div className="error">{errors.fullname}</div>}
        </div>

        <div className="form-group">
          <label><b>Email Address</b></label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          {errors.email && <div className="error">{errors.email}</div>}
        </div>

        <div className="form-group">
          <label><b>Phone Number</b></label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
          {errors.phone && <div className="error">{errors.phone}</div>}
        </div>

        <div className="form-group">
          <label><b>Password</b></label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
          {errors.password && <div className="error">{errors.password}</div>}
        </div>

        <button type="submit" className="btn">Register</button>
      </form>

      <p className="login-link">
        Already have an account? <a href="/login">Login here</a>
      </p>
    </div>
  );
};

export default Reg;
