import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getApiErrorMessage, registerUser } from "../api/authApi";

const RegisterPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    address: "",
    password: "",
    role: ""
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const roles = [
    { label: "Admin", value: "ADMIN" },
    { label: "Manager", value: "MANAGER" },
    { label: "Recruiter", value: "RECRUITER" },
    { label: "HR/Operations", value: "HR_OPERATIONS" }
  ];

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value
    }));
  };

  const validateForm = () => {
    if (!formData.firstName.trim()) return "First name is required";
    if (!formData.lastName.trim()) return "Last name is required";
    if (!formData.email.trim()) return "Email is required";

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      return "Enter a valid email address";
    }

    if (!formData.mobileNumber.trim()) return "Mobile number is required";

    if (!/^[0-9]{10}$/.test(formData.mobileNumber)) {
      return "Mobile number must be 10 digits";
    }

    if (!formData.address.trim()) return "Address is required";
    if (!formData.password.trim()) return "Password is required";
    if (!formData.role) return "Role is required";

    return "";
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setMessage("");
    setError("");

    const validationError = validateForm();

    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      setLoading(true);

      const response = await registerUser(formData);

      setMessage(response.message || "User registered successfully");

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        mobileNumber: "",
        address: "",
        password: "",
        role: ""
      });

      setTimeout(() => {
        navigate("/login");
      }, 1000);
    } catch (err) {
      setError(
        getApiErrorMessage(
          err,
          "Registration failed. Please check your connection and try again."
        )
      );
    } finally {
      setLoading(false);
    }
  };
  return (
  <div className="register-page">
    <div className="register-wrapper">
      <div className="register-card">
        <div className="register-header">

          <div>
            <h2>Create User Account</h2>
            <p>Fill in the details below to create a new account</p>
          </div>
        </div>

        {message && <div className="success-message" role="status">{message}</div>}
        {error && <div className="error-message" role="alert">{error}</div>}

        <form onSubmit={handleSubmit} aria-busy={loading} noValidate>

          <div className="register-form-row">
            <div className="register-form-group">
              <label>
                First Name <span className="required">*</span>
              </label>
              <input
                type="text"
                name="firstName"
                placeholder="Enter first name"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>

            <div className="register-form-group">
              <label>
                Last Name <span className="required">*</span>
              </label>
              <input
                type="text"
                name="lastName"
                placeholder="Enter last name"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="register-form-row">
            <div className="register-form-group">
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

            <div className="register-form-group">
              <label>
                Mobile Number <span className="required">*</span>
              </label>
              <input
                type="text"
                name="mobileNumber"
                placeholder="10 digit mobile number"
                value={formData.mobileNumber}
                onChange={handleChange}
                maxLength="10"
              />
            </div>
          </div>

          <div className="register-form-group">
            <label>
              Address <span className="required">*</span>
            </label>
            <input
                type="text"
                name="address"
                placeholder="Enter address"
                value={formData.address}
                onChange={handleChange}
              />
          </div>

          <div className="register-form-row">
            <div className="register-form-group">
              <label>
                Password <span className="required">*</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Create password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            <div className="register-form-group">
              <label>
                User Role <span className="required">*</span>
              </label>
              <select name="role" value={formData.role} onChange={handleChange}>
                <option value="">Select user role</option>
                {roles.map((role) => (
                  <option key={role.value} value={role.value}>
                    {role.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <button type="submit" className="register-button" disabled={loading}>
            {loading ? "Creating Account..." : "Create Account"}
          </button>
        </form>

        <p className="register-footer">
          Already have an account?{" "}
          <span onClick={() => navigate("/login")}>Login here</span>
        </p>
      </div>

      <div className="register-side-card">
        <h1>CRM Portal Account Registration</h1>
        <p>
          Create role-based login accounts for your CRM team and redirect users
          to their correct dashboard after login.
        </p>
      </div>
    </div>
  </div>
);
};

export default RegisterPage;
