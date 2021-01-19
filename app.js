const questions = document.querySelectorAll(".question");
const q1  = document.querySelector("#q1");
const q2 = document.querySelector("#q2");
const q3  = document.querySelector("#q3");
function clickHandler1(){
    const answer = document.querySelector("#answer1");
    console.log(answer);
    answer.style.display="block";
}
// for(let i=0;i< questions.length;i++){
    
//     questions[i].addEventListener("click",clickHandler(i))
// }
q1.addEventListener("click",clickHandler1())