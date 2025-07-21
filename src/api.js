import axios from 'axios';
export const API = axios.create({
  baseURL: 'https://threew-backend-task.onrender.com/api'
});
