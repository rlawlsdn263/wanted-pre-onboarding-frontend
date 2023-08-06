import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: "https://www.pre-onboarding-selection-task.shop"
});

export default axiosInstance;