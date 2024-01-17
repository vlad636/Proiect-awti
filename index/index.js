// Function to update the displayed age value
function updateAgeValue() {
    var ageInput = document.getElementById('varsta');
    var outputSpan = document.getElementById('ageOutput');

    // Update the displayed value
    outputSpan.textContent = ageInput.value;
}




//se preia elementul de canvas
var canvas = document.getElementById('myCanvas');

//facem un context pe care o sa l folosim mai departe pt diferite actiuni
var ctx = canvas.getContext('2d');
var ctx2 = canvas.getContext('2d');
var ctx3 = canvas.getContext('2d');

ctx3.rect(0, 0, canvas.width, canvas.height);

// add linear gradient
var grd = ctx3.createLinearGradient(0, 0, canvas.width, canvas.height);
// light blue
grd.addColorStop(0, '#8ED6FF');
// dark blue
grd.addColorStop(1, '#004CB3');
ctx3.fillStyle = grd;
ctx3.fill();


//incepem trasarea liniilor pt un triunghi
ctx.beginPath();
ctx.moveTo(150, 150);
ctx.lineTo(100, 300);
ctx.lineTo(300, 300);
ctx.closePath();

//linia exterioara a triunghiului
ctx.lineWidth = 10;
ctx.strokeStyle = 'black';
ctx.stroke();

//culoarea din triunghi
ctx.fillStyle = "red";
ctx.fill();

//desenam un dreptunghi
ctx2.fillStyle = 'blue';
ctx2.fillRect(50, 40, 200, 100); // Draw a rectangle at (50, 50) with a width of 200 and height of 100

//adaugam scris in interiorul dreptunghiului
ctx2.font = '20px Arial';
ctx2.fillStyle = '#fff'; // Set the fill color to white
ctx2.fillText('Hello, Canvas!', 75, 100); // Draw the text at (75, 100)


//Geolocatia
//preia data de azi si o transforma in string
function getCurrentDateTime() {
    var now = new Date();
    return now.toLocaleString();
}

//preia locatia userului, iar in cazul in care geolocatia nu e suportata de browser trimite un mesaj pe elementul cu id ul locationDateTime
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        document.getElementById("locationDateTime").innerHTML = "Geolocation is not supported by this browser.";
    }
}

//preia datele din cele doua functii anterioare si le pune in pagina, coordonatele cu fix 4 zecimale
function showPosition(position) {
    var locationDateTimeDiv = document.getElementById("locationDateTime");
    var locationInfo = "Your location: Latitude " + position.coords.latitude.toFixed(4) + ", Longitude " + position.coords.longitude.toFixed(4);
    var dateTimeInfo = "Current Date/Time: " + getCurrentDateTime();

    locationDateTimeDiv.innerHTML = "<p>" + locationInfo + "</p><p>" + dateTimeInfo + "</p>";
}
//se apeleaza functia de getLocation
getLocation();


// Create a new Web Worker
const myWorker = new Worker('worker.js');

// Listen for messages from the Web Worker
myWorker.onmessage = function (e) {
    // Update the displayed seconds counter
    document.getElementById('secondsCounter').textContent = e.data;
};

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}
