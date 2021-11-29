// Gestion des questions en utilisant la classe "Question" et le modele associe

import * as AffichageQuiz from '../vue/AffichageQuiz.js';
import * as QuestionParser from '../modele/QuestionParser.js';

let score = 0;
let currentQuestion = 0;
let tempsMax = 20;
let tpsRest, timer;

window.addEventListener('DOMContentLoaded', setup);


async function setup() {
    AffichageQuiz.header(tempsMax);
    tpsRest = tempsMax;
    await quiz();
}

async function quiz() {
    let nbQ = await QuestionParser.getNbQuestions();
    if(currentQuestion < await QuestionParser.getNbQuestions()){
        let quest = await QuestionParser.getQuestion(currentQuestion);
        AffichageQuiz.question(quest);
        timer = window.setInterval(setTimer, 1000);
    }
    else{
        AffichageQuiz.finQuiz(score, nbQ);
    }
}


export async function processAnswer(answer){
    let rightAnswer = await QuestionParser.getAnswer(currentQuestion);
    if(answer.trim().toLowerCase() == rightAnswer.trim().toLowerCase()) {
        console.log("Right answer !");
        score++;
        await goToNextQuestion();
    } else {
        console.log("Nope !");
        document.getElementById('answerInput').value = "";
    }
}

async function goToNextQuestion() {
    window.clearInterval(timer);
    tpsRest = tempsMax;
    AffichageQuiz.makeLastQuestionInactive();
    currentQuestion++;
    await quiz();
}

async function setTimer() {
    tpsRest--;
    AffichageQuiz.majTimer(tpsRest);
    if (tpsRest <= 0){
        await goToNextQuestion();
    }
}