const quizData = [
    {
        question:"texto de prueba",
        a:"respuesta 1",
        b:"respuesta 2",
        c:"respuesta 3",
        d:"respuesta 4",
        correct: 'c'
    },{
        question: "texto de prueba 2",
        a:"respuesta 1",
        b:"respuesta 2",
        c:"respuesta 3",
        d:"respuesta 4",
        correct: 'b'
    },{
        question: "texto de prueba 3",
        a:"respuesta 1",
        b:"respuesta 2",
        c:"respuesta 3",
        d:"respuesta 4",
        correct: 'd'
    },{
        question: "texto de prueba 4",
        a:"respuesta 1",
        b:"respuesta 2",
        c:"respuesta 3",
        d:"respuesta 4",
        correct:'a'
    }
];
const questionEl = document.getElementById('question');
const a_texto = document.getElementById('a_texto');
const b_texto = document.getElementById('b_texto');
const c_texto = document.getElementById('c_texto');
const d_texto = document.getElementById('d_texto');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;

    a_texto.innerText = currentQuizData.a;
    b_texto.innerText = currentQuizData.b;
    c_texto.innerText = currentQuizData.c;
    d_texto.innerText = currentQuizData.d;

    
}
function deselect(){
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    })
}
function getSelected(){
    const answerEls = document.querySelectorAll(".answer");

    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });
    return answer;
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if(answer){

        if(answer === quizData[currentQuiz].correct){
            score ++;
        }
        currentQuiz ++;
            if(currentQuiz < quizData.length){
                loadQuiz();
            }else {
            alert("Haz terminado todo el Quiz grandioso!")
            }
    }else{
        alert("no se ha seleccionado respuesta")
    }

})