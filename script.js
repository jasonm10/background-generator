var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

console.log(css);
console.log(color1);
console.log(color2);

color1.addEventListent("input", funciton(){
    body.style.background =
        "linear-gradient(to right, "
        + color1.value
        + ", "
        + color2.value
        + ")";
})

color1.addEventListener("input", function () {
    console.log(color2.value);
})