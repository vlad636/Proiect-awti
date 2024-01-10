let seconds = 0;

function countSeconds() {
    setInterval(function () {
        seconds++;
        postMessage(seconds);
    }, 1000);
}

countSeconds();