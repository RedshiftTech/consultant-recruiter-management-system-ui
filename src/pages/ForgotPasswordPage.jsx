import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { forgotPassword } from "../api/authApi";
import { sendOtp } from "../api/authApi";

const ForgotPasswordPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    newPassword: "",
    confirmPassword: "",
    otp: ""
  });

  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [otpLoading, setOtpLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value
    }));
  };

  const validateForm = () => {
    if (!formData.email.trim()) return "Email is required";
    if (!formData.otp.trim()) return "OTP is required";
    if (!formData.newPassword.trim()) return "New password is required";
    if (!formData.confirmPassword.trim()) return "Confirm password is required";

    if (formData.newPassword.length < 6) {
      return "Password must be at least 6 characters";
    }

    if (formData.newPassword !== formData.confirmPassword) {
      return "New password and confirm password do not match";
    }

    return "";
  };

  const handleSendOtp = async () => {
    setError("");
    setMessage("");

    if (!formData.email.trim()) {
      setError("Email is required to generate OTP");
      return;
    }

    try {
      setOtpLoading(true);

      const response = await sendOtp(formData.email);

      setMessage(response.message || "OTP sent successfully to your registered email");
    } catch (err) {
      const errorMessage =
        err.response?.data?.message ||
        err.response?.data?.error ||
        "Unable to send OTP";

      setError(errorMessage);
    } finally {
      setOtpLoading(false);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setError("");
    setMessage("");

    const validationError = validateForm();

    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      setLoading(true);

      const requestData = {
        email: formData.email,
        otp: formData.otp,
        newPassword: formData.newPassword
      };

      const response = await forgotPassword(requestData);

      setMessage(response.message || "Password reset successfully");

      setFormData({
        email: "",
        newPassword: "",
        confirmPassword: "",
        otp: ""
      });

      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } catch (err) {
      const errorMessage =
        err.response?.data?.message ||
        err.response?.data?.error ||
        "Unable to reset password";

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
            Reset your password securely using OTP verification and continue accessing your CRM
            dashboard.
          </p>
        </div>

        <div className="login-card">
          <div className="login-header">
            <h2>Forgot Password</h2>
            <p>Enter your registered email and new password</p>
          </div>

          {error && <div className="error-message">{error}</div>}
          {message && <div className="success-message">{message}</div>}

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
                New Password <span className="required">*</span>
              </label>
              <input
                type="password"
                name="newPassword"
                placeholder="Enter new password"
                value={formData.newPassword}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>
                Confirm Password <span className="required">*</span>
              </label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm new password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>
                Enter OTP <span className="required">*</span>{" "}
                <button
                  type="button"
                  className="generate-otp-btn"
                  onClick={handleSendOtp}
                  disabled={otpLoading}
                >
                  {otpLoading ? "Sending OTP..." : "Generate OTP"}
                </button>
              </label>
              <input
                type="text"
                name="otp"
                placeholder="Enter OTP"
                value={formData.otp}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="login-button" disabled={loading}>
              {loading ? "Resetting Password..." : "Reset Password"}
            </button>
          </form>

          <p className="login-footer">
            Remember your password?{" "}
            <span onClick={() => navigate("/login")}>Back to Login</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;