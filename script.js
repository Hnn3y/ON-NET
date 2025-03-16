function login() {
    // Retrieve username and password from the form
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Validate inputs
    if (!username || !password) {
        alert('Please enter both username and password.');
        return;
    }

    // Simulate server-side authentication (replace this with actual backend logic)
    var isAuthentic = authenticateUser(username, password);

    if (isAuthentic) {
        alert('Login successful. Redirecting to the intranet.');
        // Redirect to the intranet page
        window.location.href = '/intranet';
    } else {
        alert('Invalid username or password. Please try again.');
    }
}

// Simulated server-side authentication function
function authenticateUser(username, password) {
    // In a real scenario, this is where you would communicate with your server to validate credentials
    // For simplicity, we are using hardcoded values
    var validUsername = 'user123';
    var validPassword = 'password123';

    // Simulate password hashing (replace this with a secure hashing algorithm)
    var hashedPassword = hashPassword(password);

    // Compare the provided credentials with the valid ones
    return username === validUsername && hashedPassword === validPassword;
}

// Simulated password hashing function (replace this with a secure hashing algorithm)
function hashPassword(password) {
    // This is a basic example and not secure for production use
    return btoa(password);
}

function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "admin" && password === "admin") {
        alert("Login successful");
        window.location = "home.html";
    } else {
        alert("Login failed. Please try again.");
    }
}