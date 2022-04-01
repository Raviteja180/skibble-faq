const questions = [
    {
        id : 1,
        question : "What is the Capital city of India ?",
        answer : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est dolore illo dolores quia nemo doloribus quaerat, magni numquam repellat reprehenderit.",
        isClicked :  false

    },
    {
        id : 2,
        question : "Who is the captain of Indian cricket ?",
        answer : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est dolore illo dolores quia nemo doloribus quaerat, magni numquam repellat reprehenderit.",
        isClicked :  false

    },
    {
        id : 3,
        question : "Who are you?",
        answer : "Web Developer",
        isClicked : false
    },
    {
        id : 4,
        question : "Who is the best batsman ?",
        answer : "Shikar Dhawan",
        isClicked : false
    }

];
function allItems(){
    let arr = questions.map((q) => {
        return `<div class = "parentBlock">
                        <div id = 'block${q.id}' class = 'questionBlock'>
                            <p >${q.question}</p>
                            <button id = ${q.id} onclick = "show(${q.id},${q.isClicked})">+</button>
                        </div>
                        <div id = "answerBlock${q.id}" class = "answerBlock">

                        </div>
                </div>`;
    })
    a.innerHTML = arr.join("");
}
let a  = document.getElementById("questionContainer");
window.addEventListener("DOMContentLoaded",allItems);
function show(val,isClicked){
    if(!questions[val-1].isClicked){
    let v = document.getElementById(`answerBlock${val}`);
    v.innerHTML = `<hr>
    <p>${questions[val-1].answer}</p>`
    questions[val-1].isClicked = !questions[val-1].isClicked;
    document.getElementById(val).innerText = '-';
    document.getElementById(val).style.fontSize = '30px';
    document.getElementById('questionBlock').style.marginBottom = '10px';

    }
    else{
        document.getElementById(`answerBlock${val}`).innerHTML = '';
        document.getElementById(val).innerText = '+';
        questions[val-1].isClicked = !questions[val-1].isClicked;
    }
}