import axios, { type AxiosInstance } from 'axios'

/**
 * Centralized Axios instance. Every endpoint module imports this instead of
 * creating its own client, so base URL, headers, and interceptors stay
 * consistent across the app.
 */
export const apiClient: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:8000/api',
  timeout: 10_000,
  headers: {
    'Content-Type': 'application/json',
  },
})

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // Centralized place to normalize/log errors before they reach callers.
    return Promise.reject(error)
  },
)
