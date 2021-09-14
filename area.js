const sides = document.querySelectorAll(".side-input");
const areaBtn = document.querySelector("#area-btn");
const outputEl = document.querySelector("#output");

function calculateSidesMultiplication(base, height) {
    const sidesMultiplication = base * height;
    // console.log(sidesMultiplication);
    return sidesMultiplication;
}

function calculateArea() {
    const sidesMultiplication = calculateSidesMultiplication(Number(sides[0].value), Number(sides[1].value));
    const areaOfTriangle = 1 / 2 * (sidesMultiplication);
    outputEl.innerText = "The area of triangle is " + areaOfTriangle;
}

areaBtn.addEventListener("click", calculateArea);
