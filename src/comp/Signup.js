import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

const Signup = (props) => {
const[login,setLogin]=useState(false)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
      });
     
      const navigate = useNavigate();
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.password) {
          alert("Please fill out all fields.");
          return;
        }
        console.log("Signup successful:", formData);
        setLogin(true)
        console.log("signup login:",login)
        
    // Navigate to Profile page with formData
     navigate('/profile', { state: { formData,login } });
     
        setFormData({
          name: "",
          email: "",
          password: "",
        });
      };

  return (
    <>
     <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit} className="signup-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
          />
        </div>
        <button type="submit" className="signup-button">Sign Up</button>
      </form>
    </div>
    
    </>
  )
}

export default Signup
