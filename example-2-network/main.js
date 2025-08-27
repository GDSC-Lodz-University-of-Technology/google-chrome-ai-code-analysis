const API_BASE_URL = 'http://localhost:3000/api';

const statusPara = document.querySelector('#status-area p');
const responseOutput = document.getElementById('response-output');

// Helper function to make requests and update UI
async function makeRequest(endpoint, options = {}) {
    statusPara.textContent = `Status: Sending request to ${endpoint}...`;
    responseOutput.textContent = '';
    try {
        const response = await fetch(`${API_BASE_URL}${endpoint}`, options);

        statusPara.textContent = `Status: Received response! Status Code: ${response.status} (${response.statusText})`;

        // Handle 304 Not Modified, which has no body
        if (response.status === 304) {
            responseOutput.textContent = "Data loaded from browser cache. The server sent a 304 Not Modified response.";
            return;
        }

        const data = await response.json();
        responseOutput.textContent = JSON.stringify(data, null, 2);

    } catch (error) {
        statusPara.textContent = 'Status: Error!';
        responseOutput.textContent = `An error occurred: ${error.message}. Is the Node.js server running?`;
        console.error('Request failed:', error);
    }
}

// Event Listeners for buttons
document.getElementById('btn-success').addEventListener('click', () => {
    makeRequest('/data');
});

document.getElementById('btn-unauthorized').addEventListener('click', () => {
    makeRequest('/secure-data');
});

document.getElementById('btn-cached').addEventListener('click', () => {
    // For the caching demo, we explicitly add the 'If-None-Match' header
    // The browser would normally do this automatically for subsequent requests
    // but we do it manually here to make the demo explicit.
    makeRequest('/cached-data', {
        headers: {
            'If-None-Match': '"v1.0"'
        }
    });
});

document.getElementById('btn-slow').addEventListener('click', () => {
    makeRequest('/slow-data');
});
