const quizData = [
    {
        question:"¿Que equipo de lol fue el ganador de worlds en la s1?",
        a:"Fnatic",
        b:"Skt t1",
        c:"Origen",
        d:"Elements",
        correct: 'a'
    },{
        question: "¿Cual es el jugador profesional de lol activo mas antigüo?",
        a:"CoreJJ",
        b:"Faker",
        c:"Ambition",
        d:"Bengi",
        correct: 'a'
    },{
        question: "¿Quien es sjockz?",
        a:"La novia de sneaky",
        b:"Caster profesional de lol",
        c:"Diseñadora de annie",
        d:"Voz de irelia",
        correct: 'b'
    },{
        question: "Cual es el equipo con mas titulos de la historia de lol?",
        a:"T1",
        b:"SKT T1",
        c:"FNATIC",
        d:"KT",
        correct:'b'
    }
];
const quiz = document.getElementById("quiz");
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
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;

    a_texto.innerText = currentQuizData.a;
    b_texto.innerText = currentQuizData.b;
    c_texto.innerText = currentQuizData.c;
    d_texto.innerText = currentQuizData.d;

    
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

function deselectAnswers(){
    const answerEls = document.querySelectorAll(".answer");
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
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
                quiz.innerHTML = `<h2>Has respondido correctamente ${score}/${quizData.length}</h2>
                <button onclick="location.reload()">Reiniciar</button>`
            }
    }else{
        alert("elija una respuesta para continuar")
    }

})