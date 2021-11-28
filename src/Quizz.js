/*
Créer un Quizz avec une série de question stockée en dur
*/

// VARIABLE GLOBALE
let currentQuestion = 0;
let score = 0;
let idTime;

function GetQuestionAndAnswer(questionIndex) {
    let questionList = ["Vitesse max libellule ? (km/h)", "Quel est le nombre d'ailes des libellule ?",
    "Le type des yeux des libellules ?", "Les libellules ont-elles 3 yeux ? (Oui / Non)"];
    let answer = ["100", "4", "Facette", "Oui"];

    if(questionIndex > questionList.length-1) {
        return null;
    }

    return [questionList[questionIndex], answer[questionIndex]];
}

function Quizz() {
    if(currentQuestion == 0) {
        startQuizz();
    }

    const questionAnswer = GetQuestionAndAnswer(currentQuestion);

    if(questionAnswer == null) {
        // Fin du quizz
        if(score == 4) {
            alert("Quizz fini, bravo ! Vous êtes un pro des libellules !\nScore : " + score);
            return;
        }
        alert("Quizz fini! Vous pouvez encore vous améliorer!\nScore : " + score);
        return;
    }

    printQuestion(questionAnswer);
}

function startQuizz() {
    const startingText = document.createElement('h1');
    startingText.appendChild(document.createTextNode('Bienvenue dans le quizz des Libellules !'));
    document.body.appendChild(startingText);
}

function printQuestion(questionAnswer) {
    const question = document.createElement('p');
    question.appendChild(document.createTextNode(questionAnswer[0]));
    document.body.appendChild(question);

    const answerInput = document.createElement('input');
    answerInput.setAttribute('type', 'text');
    answerInput.setAttribute('id', 'answerInput');
    answerInput.setAttribute('placeholder', 'Answer Input');
    document.body.appendChild(answerInput);

    const sumbitAnswer = document.createElement('button');
    sumbitAnswer.setAttribute('id', 'sumbitAnswer');
    sumbitAnswer.appendChild(document.createTextNode('Submit answer'));
    sumbitAnswer.addEventListener('click', () => processAnswer(document.getElementById('answerInput').value, questionAnswer[1]));
    document.body.appendChild(sumbitAnswer);

    setTimer();
}

//////////////////////////////////////////////// PROCESS ////////////////////////////////////////////////

function processAnswer(answer, rightAnswer) {
    if(answer.trim().toLowerCase() == rightAnswer.trim().toLowerCase()) {
        console.log("Right answer !");
        score++;
        goToNextQuestion();
    } else {
        console.log("Nope !");
        alert('Mauvaise réponse !');
    }
}

function goToNextQuestion() {
    window.clearTimeout(idTime);
    makeLastQuestionInactive();
    currentQuestion++;
    Quizz();
}

function makeLastQuestionInactive() {
    document.getElementById('answerInput').disabled = true;
    document.getElementById('answerInput').setAttribute('id', '');
    document.getElementById('sumbitAnswer').remove();
}

function setTimer() {
    idTime = window.setTimeout(goToNextQuestion, 5000);
}

function setup() {
    Quizz();
}

window.addEventListener('DOMContentLoaded', setup);