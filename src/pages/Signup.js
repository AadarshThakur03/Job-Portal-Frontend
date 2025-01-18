import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const SignUp = () => {
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    mobile: "",
    password: "",
    userType: "user",
    secretKey: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(formValues.userType=="admin" && formValues.secretKey!="Adarsh"){
      toast.error("Invalid Secret Key for Admin!!");
      return;
    }


    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/register-user",
        formValues
      );
      if (response.data.success) {
        toast.success(response.data.message || "Registration successful!");
        setFormValues({ username: "", email: "", mobile: "", password: "" });
      } else {
        toast.error(response.data.message || "Registration failed!");
      }
    } catch (error) {
      console.error("Error during registration:", error);
      toast.error(
        error.response.data.message ||
          "Something went wrong. Please try again later."
      );
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <div className="login-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>User Type</label>
          <div className="radio-div">
            <label className="radio-label">
              <input
                type="radio"
                name="userType"
                value="user"
                checked={formValues.userType == "user"}
                onChange={handleInputChange}
              />
              User
            </label>
            <label className="radio-label">
              <input
                type="radio"
                name="userType"
                value="admin"
                checked={formValues.userType == "admin"}
                onChange={handleInputChange}
              />
              Admin
            </label>
          </div>
        </div>
        {formValues.userType == "admin" ? (
          <div className="form-group">
            <label>Secret Key (Admin Only)</label>
            <input
              type="text"
              name="secretKey"
              placeholder="Enter Secret Key"
              value={formValues.secretKey}
              onChange={handleInputChange}
            />
          </div>
        ) : (
          ""
        )}

        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            placeholder="Enter your username"
            name="username"
            value={formValues.username}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formValues.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Mobile No</label>
          <input
            type="tel"
            name="mobile"
            placeholder="Enter your mobile number"
            value={formValues.mobile}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formValues.password}
            onChange={handleInputChange}
          />
        </div>

        <button type="submit" className="login-btn">
          Sign Up
        </button>
      </form>
      <p style={{ textAlign: "center" }}>
        Already have an account?{" "}
        <Link
          to="/login"
          className="toggle-link"
          style={{ color: "#007BFF", textDecoration: "underline" }}
        >
          Login
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
