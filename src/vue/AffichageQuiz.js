import { processAnswer } from '../controleur/Controleur.js';

function header(timer) {
    // Affiche le titre du quizz, le temps restant et score (question répondu sur question total)
    const startingText = document.createElement('h1');
    startingText.appendChild(document.createTextNode('Bienvenue dans le quizz des Libellules !'));
    document.body.appendChild(startingText);

    
    // Affichage du temps restant
    const time = document.createElement('p');
    time.appendChild(document.createTextNode('Temps restant pour répondre a la question actuel: '));
    let compteur = document.createElement('span');
    compteur.setAttribute('id', 'cmpt');
    compteur.innerText = timer;
    time.appendChild(compteur);
    document.body.appendChild(time);
}

function question(question) {
    // Affiche une question (fait appel au controleur pour savoir quoi afficher)
    const quest = document.createElement('p');
    // Numero de question
    // Question
    quest.appendChild(document.createTextNode(question));
    document.body.appendChild(quest);
    // Espace pour ecrire la reponse
    const answerInput = document.createElement('input');
    answerInput.setAttribute('type', 'text');
    answerInput.setAttribute('id', 'answerInput');
    answerInput.setAttribute('placeholder', 'Answer Input');
    document.body.appendChild(answerInput);

    const submitAnswer = document.createElement('button');
    submitAnswer.setAttribute('id', 'submitAnswer');
    submitAnswer.appendChild(document.createTextNode('Submit answer'));
    submitAnswer.addEventListener('click', () => processAnswer(document.getElementById('answerInput').value));
    document.body.appendChild(submitAnswer);


    // Bouton submit (fait appel au controleur pour savoir si la reponse est bonne)
}

function makeLastQuestionInactive() {
    // (appel constructeur)
    //window.clearTimeout(idTime);
    // Question precedente :
    // Desactive l'input et supprime le bouton submit de la derniere question
    document.getElementById('answerInput').disabled = true;
    document.getElementById('answerInput').setAttribute('id', '');
    document.getElementById('submitAnswer').remove();
}

function finQuiz(score, nbQ) {
    // Message de fin de quiz avec le score et un text du style "Excellent !" ou "Vous etes une merde" selon le score
    const fin = document.createElement('p');
    fin.appendChild(document.createTextNode('Le quiz est fini! Vous avez obtenu '+ score +' bonnes réponses sur '+ nbQ));
    document.body.appendChild(fin);
}


export {header, question, finQuiz, makeLastQuestionInactive}

export function majTimer(tpsRest) {
   document.getElementById('cmpt').innerText = tpsRest;
}
