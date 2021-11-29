// Gestion des questions en utilisant la classe "Question" et le modele associe

import * as AffichageQuiz from '../vue/AffichageQuiz.js';
import * as QuestionParser from '../modele/QuestionParser.js';
import * as Sauvegarde from '../modele/Sauvegardes.js';

let currentQuestion = 0;
let tempsMax = 30;
let tpsRest, timer;

window.addEventListener('DOMContentLoaded', setup);


async function setup() {
    AffichageQuiz.header(tempsMax);
    tpsRest = tempsMax;
    Sauvegarde.initLocalStorage(await QuestionParser.getAllQuestions());
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
        let score = 0;
        let listeState = Sauvegarde.getAllQuestionsState(await QuestionParser.getAllQuestions());
        listeState.forEach(element => {
            console.log(localStorage.getItem(element));
            if (element == "Completed") {
                score++;
            }
        });
        AffichageQuiz.finQuiz(score, nbQ);
    }
}


export async function processAnswer(answer){
    let rightAnswer = await QuestionParser.getAnswer(currentQuestion);
    if(answer.trim().toLowerCase() == rightAnswer.trim().toLowerCase()) {
        console.log("Right answer !");
        Sauvegarde.addOrModifyQuestionState(await QuestionParser.getQuestion(currentQuestion), 2);
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
        Sauvegarde.addOrModifyQuestionState(await QuestionParser.getQuestion(currentQuestion), 1);
        await goToNextQuestion();
    }
}