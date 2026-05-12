import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api/authApi";

const LoginPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value
    }));
  };

  const validateForm = () => {
    if (!formData.email.trim()) return "Email is required";
    if (!formData.password.trim()) return "Password is required";

    return "";
  };

  const redirectByRole = (role) => {
    if (role === "ADMIN") {
      navigate("/admin/dashboard");
    } else if (role === "MANAGER") {
      navigate("/manager/dashboard");
    } else if (role === "RECRUITER") {
      navigate("/recruiter/dashboard");
    } else if (role === "HR_OPERATIONS") {
      navigate("/hr/consultants");
    } else {
      navigate("/login");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setError("");

    const validationError = validateForm();

    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      setLoading(true);

      const response = await loginUser(formData);

      localStorage.setItem("userId", response.userId || "");
      localStorage.setItem("firstName", response.firstName || "");
      localStorage.setItem("lastName", response.lastName || "");
      localStorage.setItem("fullName", response.fullName || "");
      localStorage.setItem("email", response.email || "");
      localStorage.setItem("role", response.role || "");

      if (response.redirectUrl) {
        navigate(response.redirectUrl);
      } else {
        redirectByRole(response.role);
      }
    } catch (err) {
      const errorMessage =
        err.response?.data?.message ||
        err.response?.data?.error ||
        "Invalid email or password";

      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
  <div className="login-page">
    <div className="login-wrapper">
      <div className="login-left-panel">
        <h1>Consultant Recruiter Management System</h1>

        <p>
          Manage consultants, recruiters, submissions, placements, and reports
          from one secure platform.
        </p>
      </div>

      <div className="login-card">
        <div className="login-header">
          <h2>Welcome Back</h2>
          <p>Login to continue to your CRM dashboard</p>
        </div>

        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>
              Email Address <span className="required">*</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="example@crm.com"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>
              Password <span className="required">*</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div className="login-options">
            <label className="remember-me">
              <input type="checkbox" />
              <span>Remember me</span>
            </label>

            <button type="button" className="forgot-link">
            <span onClick={() => navigate("/forgot-password")}>Forgot password?</span>
            </button>
          </div>

          <button type="submit" className="login-button" disabled={loading}>
            {loading ? "Logging in..." : "Login to Dashboard"}
          </button>
        </form>

        <p className="login-footer">
          Do not have an account?{" "}
          <span onClick={() => navigate("/register")}>Create account</span>
        </p>
      </div>
    </div>
  </div>
);
};

export default LoginPage;
