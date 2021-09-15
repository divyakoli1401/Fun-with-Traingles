const baseInput = document.querySelector("#base-input");
const heightInput = document.querySelector("#height-input");
const submitButton = document.querySelector("#submit-btn");
const outputEl = document.querySelector("#output");

function areaOfTriangle(base,height){
 let area = (base * height)/2;
 return area;
}

function calculateArea(){
let area = areaOfTriangle(46,55);
outputEl.innerText = `Area of Triangle: ${area}`;
}

submitButton.addEventListener( "click",calculateArea);