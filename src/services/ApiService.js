import axios from 'axios';

class ApiService {
  constructor() {
    // Create an axios instance with default settings
    this.api = axios.create({
      baseURL: import.meta.env.VITE_BASEURL, // Replace with your .NET Web API base URL
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Add request interceptor to include JWT token
    this.api.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem('jwtToken'); // Retrieve the JWT token
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    // Add response interceptor to handle errors globally
    this.api.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response && error.response.status === 401) {
          // Handle unauthorized access (e.g., token expired)
          console.error('Unauthorized! Redirect to login.');
        }
        return Promise.reject(error);
      }
    );
  }

  // GET method
  async get(url, params = {}) {
    return this.api.get(url, { params });
  }

  // POST method
  async post(url, data) {
    return this.api.post(url, data);
  }

  // PUT method
  async put(url, data) {
    return this.api.put(url, data);
  }

  // DELETE method
  async delete(url) {
    return this.api.delete(url);
  }
}

const apiService = new ApiService();
export default apiService;