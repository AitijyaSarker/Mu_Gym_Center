import axios from 'axios'

// Point to backend folder, not directly to api.php
const API_URL = 'http://localhost/gym-management/backend/api'

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // ensures PHP session cookies are sent/stored
})

export default api
