const sideInputs = document.querySelectorAll(".side-input");
const submitButton = document.querySelector("#submit-btn");
const outputEl = document.querySelector("#output");

function sumOfSides(sideA,sideB){
let sum = sideA * sideA + sideB * sideB;
return sum;
}

function calculateHypotenuse(){
let sum = sumOfSides(Number(sideInputs[0].value),Number(sideInputs[1].value));
let hypotenuse = Math.sqrt(sum);
outputEl.innerText = `Length of Hypotenuse is: ${hypotenuse.toFixed(2)}`;
}

submitButton.addEventListener("click",calculateHypotenuse);