const angleInput = document.querySelectorAll(".user-input");
const isTriangleBtn = document.querySelector("#click-btn");
const outputEl = document.querySelector("#output");

function calculateSumOfAngles(angle1,angle2,angle3){
const sumOfAngles = angle1 + angle2 + angle3;
if(sumOfAngles === 180){
    outputEl.innerText=("The Angles Form A Triangle!!!");
}else{
    outputEl.innerText=("Sorry The Angles Don't Form A Triangle");
}
}

function isTriangle(){
calculateSumOfAngles(Number(angleInput[0].value),Number(angleInput[1].value),Number(angleInput[2].value));
}

isTriangleBtn.addEventListener("click",isTriangle);