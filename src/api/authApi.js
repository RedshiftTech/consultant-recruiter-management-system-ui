import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api/user";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json"
  }
});

export const getApiErrorMessage = (error, fallbackMessage) => {
  const responseData = error.response?.data;
  const validationErrors = responseData?.validationErrors;

  if (validationErrors && Object.keys(validationErrors).length > 0) {
    return Object.values(validationErrors)[0];
  }

  return responseData?.message || responseData?.error || fallbackMessage;
};

export const registerUser = async (registerData) => {
  const response = await api.post("/register", registerData);
  return response.data;
};

export const loginUser = async (loginData) => {
  const response = await api.post("/login", loginData);
  return response.data;
};

export const forgotPassword = async (forgotPasswordData) => {
  const response = await api.post("/forgot-password", forgotPasswordData);
  return response.data;
};

export const sendOtp = async (email) => {
  const response = await api.post("/otp", { email });
  return response.data;
};
