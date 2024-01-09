function getRange() {
    // Valoare range
    const value = document.querySelector("#value");
    const input = document.querySelector("#pi_input");
    value.textContent = input.value;
    input.addEventListener("input", (event) => {
        value.textContent = event.target.value;
    });
}


//drag&drop
const draggableElement = document.getElementById('draggableElement');

draggableElement.addEventListener('dragstart', (event) => {
    event.dataTransfer.setData('text/plain', 'Dragged Element');
});



// Get the canvas element using its id
var canvas = document.getElementById('myCanvas');

// Get the 2D rendering context
var ctx = canvas.getContext('2d');
var ctx2 = canvas.getContext('2d');

//Draw a triangle
ctx.beginPath();
ctx.moveTo(150, 150);
ctx.lineTo(100, 300);
ctx.lineTo(300, 300);
ctx.closePath();

// the outline
ctx.lineWidth = 10;
ctx.strokeStyle = '#666666';
ctx.stroke();

// the fill color
ctx.fillStyle = "#FFCC00";
ctx.fill();

// Draw a rectangle on the canvas
ctx2.fillStyle = '#3498db'; // Set the fill color to a blue shade
ctx2.fillRect(50, 40, 200, 100); // Draw a rectangle at (50, 50) with a width of 200 and height of 100

// Draw text on the canvas
ctx2.font = '20px Arial';
ctx2.fillStyle = '#fff'; // Set the fill color to white
ctx2.fillText('Hello, Canvas!', 75, 100); // Draw the text at (70, 100)



//Geolocatia
// Function to get the current date and time
function getCurrentDateTime() {
    var now = new Date();
    return now.toLocaleString();
}

// Function to get the user's location
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        document.getElementById("locationDateTime").innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    var locationDateTimeDiv = document.getElementById("locationDateTime");
    var locationInfo = "Your location: Latitude " + position.coords.latitude.toFixed(4) + ", Longitude " + position.coords.longitude.toFixed(4);
    var dateTimeInfo = "Current Date/Time: " + getCurrentDateTime();

    locationDateTimeDiv.innerHTML = "<p>" + locationInfo + "</p><p>" + dateTimeInfo + "</p>";
}
// Call the function to get the user's location
getLocation();