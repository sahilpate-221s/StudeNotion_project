import axios from "axios";

export const axiosInstance = axios.create({});

// Add a request interceptor to include Authorization header with token from localStorage
axiosInstance.interceptors.request.use(
  (config) => {
    const token = JSON.parse(localStorage.getItem("token"));
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const apiConnector = (method, url, bodyData, headers, params) => {
  // Merge headers passed explicitly with Authorization header set by interceptor
  const mergedHeaders = { ...headers };
  return axiosInstance({
    method: `${method}`,
    url: `${url}`,
    data: bodyData ? bodyData : null,
    headers: Object.keys(mergedHeaders).length ? mergedHeaders : undefined,
    params: params ? params : null,
  });
};
