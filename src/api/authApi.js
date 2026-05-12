import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api/user";

export const registerUser = async (registerData) => {
  const response = await axios.post(`${API_BASE_URL}/register`, registerData);
  return response.data;
};

export const loginUser = async (loginData) => {
  const response = await axios.post(`${API_BASE_URL}/login`, loginData);
  return response.data;
};

export const forgotPassword = async (forgotPasswordData) => {
  const response = await axios.post(`${API_BASE_URL}/forgot-password`, forgotPasswordData);
  return response.data;
};

export const sendOtp = async (email) => {
  const response = await axios.post(`${API_BASE_URL}/otp`, { email });
  return response.data;
};