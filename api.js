// API service for communicating with Google Apps Script backend
// Following CORS bypass rules

// Replace with your deployed Google Apps Script web app URL
const API_URL = 'https://script.google.com/macros/s/AKfycby8zyPv6Ji3z-QNCthG_OHc-HLsCjhFEqkU0rDF4GbS-MwcBeW-Cz52RepKKqLbbfArWg/exec';

// Generic API function for making requests to the GAS backend
async function callApi(action, params = {}) {
  try {
    // Combine action with other parameters
    const data = {
      action,
      ...params
    };
    
    // Create URLSearchParams object (produces application/x-www-form-urlencoded format)
    const formData = new URLSearchParams(data);
    
    // Make fetch request following the CORS rules
    const response = await fetch(API_URL, {
      method: 'POST',
      body: formData
      // Note: No custom headers, no Content-Type set explicitly
    });
    
    // Parse the JSON response
    const result = await response.json();
    
    return result;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
}

// Example API functions
async function login(username, password) {
  return callApi('login', { username, password });
}

async function getInventaris() {
  return callApi('getInventaris');
}

async function getSiswa() {
  return callApi('getSiswa');
}

async function getKelas() {
  return callApi('getKelas');
}

// Add more API functions as needed 