// Add 3 different buttons, with each one adding up a global number by 1, 5, and 10 that increases the count and updates the display.

let count = 0;

function updateDisplay() {
    document.getElementById("count").innerText = count;
}

document.getElementById("add1").addEventListener("click", function() {
    count += 1;
    updateDisplay();
});

document.getElementById("add5").addEventListener("click", function() {
    count += 5;
    updateDisplay();
});

document.getElementById("add10").addEventListener("click", function() {
    count += 10;
    updateDisplay();
});

//Add a  button that toggles a dark class on the page to switch between light and dark themes. Make sure to add some CSS for the dark class to change the background and text colors appropriately.

document.getElementById("darkTheme").addEventListener("click", function() {
    document.body.style.backgroundColor = document.body.style.backgroundColor === "black" ? "white" : "black";
    document.body.style.color = document.body.style.color === "white" ? "black" : "white";
});


document.getElementById("reset").addEventListener("click", function() {
    count = 0;
    updateDisplay();
});


//Have 3 squares. When I hover over a square, it cycles through changing 3 different colors (red, yellow, blue, then back to red). Each square should be its own cycle.

const colors = ["red", "yellow", "blue"];

function setupSquare(canvasId, startingColor) {
    const canvas = document.getElementById(canvasId);
    const ctx = canvas.getContext("2d");
    let colorIndex = colors.indexOf(startingColor);

    canvas.width = 300;
    canvas.height = 100;

    function drawSquare() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = colors[colorIndex];
        ctx.fillRect(10, 10, 80, 80);
    }

    canvas.addEventListener("mouseover", function() {
        colorIndex = (colorIndex + 1) % colors.length;
        drawSquare();
    });

    drawSquare();
}

setupSquare("canvas", "red");
setupSquare("canvas2", "yellow");
setupSquare("canvas3", "blue");
