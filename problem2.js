const quizForm = document.querySelector(".quiz-form");
const submitBtn = document.querySelector("#quiz-btn");
const outputEl = document.querySelector("#output");
const correctAnswers = ['90°','right angled'];

function calculateScore(){
let score=0;
let index=0;
const data = new FormData(quizForm);
for(let value of data.values()){
if(value === correctAnswers[index]){
score = score + 1;
}
index = index + 1;
}
outputEl.innerText = `Your Final Score is: ${score}`;
}

submitBtn.addEventListener("click",calculateScore);

