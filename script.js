document.getElementById('pickupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Pickup request submitted!');
});

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        document.getElementById('location-status').innerText = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    document.getElementById('location-status').innerText = 
        "Latitude: " + position.coords.latitude + ", Longitude: " + position.coords.longitude;
}

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            document.getElementById('location-status').innerText = "User denied the request for Geolocation.";
            break;
        case error.POSITION_UNAVAILABLE:
            document.getElementById('location-status').innerText = "Location information is unavailable.";
            break;
        case error.TIMEOUT:
            document.getElementById('location-status').innerText = "The request to get user location timed out.";
            break;
        case error.UNKNOWN_ERROR:
            document.getElementById('location-status').innerText = "An unknown error occurred.";
            break;
    }
}

// Dark and Light Mode Toggle
const toggleThemeButton = document.createElement('button');
toggleThemeButton.innerText = "Toggle Theme";
toggleThemeButton.style.position = "absolute";
toggleThemeButton.style.top = "10px";
toggleThemeButton.style.right = "10px";
toggleThemeButton.style.padding = "10px";
toggleThemeButton.style.backgroundColor = "#6c5ce7";
toggleThemeButton.style.color = "white";
toggleThemeButton.style.border = "none";
toggleThemeButton.style.cursor = "pointer";
toggleThemeButton.style.borderRadius = "8px";
toggleThemeButton.onclick = toggleTheme;
document.body.appendChild(toggleThemeButton);

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        toggleThemeButton.innerText = "Light Mode";
        toggleThemeButton.style.backgroundColor = "#9b59b6";
    } else {
        toggleThemeButton.innerText = "Dark Mode";
        toggleThemeButton.style.backgroundColor = "#6c5ce7";
    }
}
  