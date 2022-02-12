const quizData = [

    {
        question: 'How old was Florin?',
        a: '10',
        b: '15',
        c: '19',
        d: '26',

        correct: 'c'
    },
    {
        question: 'What is the most used language in 2022?',
        a: 'Java',
        b: 'C sharp',
        c: 'Python',
        d: 'JavaScript',

        correct: 'a'
    },
    {
        question: 'Who is the president of United States of America?',
        a: 'George Bush',
        b: 'Donald Trump',
        c: 'Barrack Obama',
        d: 'Joe Biden',

        correct: 'd'
    },
    {
        question: 'What does HTML stand for?',
        a: 'HyperText Marked Latent',
        b: 'HyperText Markedup Language',
        c: 'HyperingText Marking Language',
        d: 'HyperText Moving Language',

        correct: 'b',
    },
    {
        question: 'What year was JavaScript launched?',
        a: '1922',
        b: '2003',
        c: '1995',
        d: '2018',

        correct: 'c',
    }

];

const  answerEls= document.querySelectorAll('.answer');

const quiz= document.getElementById('quiz');
const questionEl= document.getElementById('question');
const a_text= document.getElementById('a_text');
const b_text= document.getElementById('b_text');
const c_text= document.getElementById('c_text');
const d_text= document.getElementById('d_text');
const submitBtn= document.getElementById('submit');


let currentQuiz= 0;
let score = 0;
//let answer=undefined; 

loadQuiz();

function loadQuiz(){
    deselectAnswers();
    const currentQuizData = quizData [currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d; 

}
 
function getSelected(){
        let answer = undefined;
    
        answerEls.forEach((answerEl) => {
        if(answerEl.checked){
           answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers(){
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
       });
}

submitBtn.addEventListener("click", ()=>{
 //   currentQuiz++;
    const answer = getSelected();
    if (answer){
        if (answer === quizData[currentQuiz].correct){ 
        score++;
        } 
        
    currentQuiz++
    if (currentQuiz < quizData.length){
        loadQuiz();
        } else{
            quiz.innerHTML = `<h2>You Scored ${score}/${quizData.length} questions</h2>. 
            <button onClick="location.reload()"> Go Back </button>`;
    }

    }

});