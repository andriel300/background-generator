let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");
let randomButton = document.getElementById("random");

function setGradient() {
    body.style.background =
        "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

    css.textContent = body.style.background + ";";
}

// generating random Color in hex
function getRandomColor() {
    let hexColor = Math.random().toString(16);
    hexColor = "#" + hexColor.slice(2, 8);
    return hexColor;
}

// setting background color after button click
function randomColors() {
    color1.value = getRandomColor();
    color2.value = getRandomColor();

    setGradient();
}
// default background gradient displayed on load
setGradient();

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
randomButton.addEventListener("click", randomColors);
