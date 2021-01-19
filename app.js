const questions = document.querySelectorAll(".question");
const q1  = document.querySelector("#q1");
const q2 = document.querySelector("#q2");
const q3  = document.querySelector("#q3");
const q4  = document.querySelector("#q4");

const answer1 = document.querySelector("#answer1");
const answer2 = document.querySelector("#answer2");
const answer3 = document.querySelector("#answer3");
const answer4 = document.querySelector("#answer4");

var answer="answer";
function clickHandler1(){
    
//    console.log(answer);
answer2.style.display="none";
answer3.style.display="none";
answer4.style.display="none";
    answer1.style.display="block";
    
}
function clickHandler2(){
    // const answer = document.querySelector("#answer2");
 //   console.log(answer);
 answer1.style.display="none";
 answer3.style.display="none";
 answer4.style.display="none";
    
    answer2.style.display="block";
}
function clickHandler3(){
   // console.log(answer);
   answer2.style.display="none";
   answer1.style.display="none";
   answer4.style.display="none";
    answer3.style.display="block";
}
function clickHandler4(){
    // const answer = document.querySelector("#answer4");
   // console.log(answer);
   answer1.style.display="none";
   answer3.style.display="none";
   answer2.style.display="none";
    answer4.style.display="block";
}
// for(let i=0;i< questions.length;i++){
    
//     questions[i].addEventListener("click",clickHandler(i))
// }
q1.addEventListener("click",clickHandler1);
q2.addEventListener("click",clickHandler2);
q3.addEventListener("click",clickHandler3);
q4.addEventListener("click",clickHandler4);