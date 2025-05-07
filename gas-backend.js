// Google Apps Script Backend for Teacher Administration Dashboard
// This code should be copied to a new Google Apps Script project

// Mock database (in a real app, you would use Google Sheets or another database)
// You can replace this with actual Google Sheets integration
const MOCK_DB = {
  users: [
    { username: 'teacher1', password: 'password1', name: 'Sarah Johnson', role: 'Guru Matematika' }
  ],
  inventaris: [
    { id: 1, nama: 'Laptop', merk: 'Lenovo', tahun: 2022, kondisi: 'Baik' },
    { id: 2, nama: 'Proyektor', merk: 'Epson', tahun: 2021, kondisi: 'Baik' },
    { id: 3, nama: 'Printer', merk: 'HP', tahun: 2020, kondisi: 'Rusak Ringan' }
  ],
  siswa: [
    { id: 1, nama: 'Budi Santoso', kelas: 'XI IPA 1', nilai: 85 },
    { id: 2, nama: 'Ani Wijaya', kelas: 'XI IPA 1', nilai: 90 },
    { id: 3, nama: 'Dedi Kurniawan', kelas: 'XI IPA 2', nilai: 78 }
  ],
  kelas: [
    { id: 1, nama: 'XI IPA 1', wali_kelas: 'Sarah Johnson', jumlah_siswa: 30 },
    { id: 2, nama: 'XI IPA 2', wali_kelas: 'John Smith', jumlah_siswa: 28 },
    { id: 3, nama: 'XI IPS 1', wali_kelas: 'David Wilson', jumlah_siswa: 32 }
  ]
};

// Main function to handle POST requests
function doPost(e) {
  try {
    // Get parameters from the request
    const action = e.parameter.action;
    const username = e.parameter.username;
    const password = e.parameter.password;
    
    // Log the request details (for debugging)
    Logger.log('Request action: ' + action);
    
    // Process the request based on the action
    let result;
    
    switch (action) {
      case 'login':
        result = handleLogin(username, password);
        break;
      case 'getInventaris':
        result = getInventaris();
        break;
      case 'getSiswa':
        result = getSiswa();
        break;
      case 'getKelas':
        result = getKelas();
        break;
      default:
        result = { success: false, message: 'Invalid action' };
    }
    
    // Return the result as JSON
    return ContentService.createTextOutput(JSON.stringify(result))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Handle errors
    Logger.log('Error: ' + error.message);
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      message: 'Error: ' + error.message
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

// Handle login requests
function handleLogin(username, password) {
  // Find the user
  const user = MOCK_DB.users.find(u => u.username === username && u.password === password);
  
  if (user) {
    return {
      success: true,
      user: {
        name: user.name,
        role: user.role
      }
    };
  } else {
    return {
      success: false,
      message: 'Invalid username or password'
    };
  }
}

// Get inventory data
function getInventaris() {
  return {
    success: true,
    data: MOCK_DB.inventaris
  };
}

// Get student data
function getSiswa() {
  return {
    success: true,
    data: MOCK_DB.siswa
  };
}

// Get class data
function getKelas() {
  return {
    success: true,
    data: MOCK_DB.kelas
  };
}

// Optional: Add a doGet function for testing
function doGet() {
  return ContentService.createTextOutput(
    'This is a Google Apps Script Web App for the Teacher Administration Dashboard. ' +
    'Please use POST requests to interact with the API.'
  );
} 