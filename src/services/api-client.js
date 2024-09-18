// src/services/api-client.js

const BASE_URL = `${process.env.REACT_APP_API_URL}`; // Replace with your API base URL

// Helper function to make HTTP requests
const request = async (endpoint, options = {}) => {
  const response = await fetch(`${BASE_URL}${endpoint}`, options);

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Something went wrong');
  }

  return response.json();
};

// Function to get data from an endpoint
export const get = (endpoint) => request(endpoint, { method: 'GET' });

// Function to post data to an endpoint
export const post = (endpoint, data) =>
  request(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

// Function to put (update) data at an endpoint
export const put = (endpoint, data) =>
  request(endpoint, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

// Function to delete data from an endpoint
export const del = (endpoint) => request(endpoint, { method: 'DELETE' });


