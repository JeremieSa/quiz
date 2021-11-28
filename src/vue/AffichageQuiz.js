function header() {
    // Affiche le titre du quizz, le temps restant et score (question répondu sur question total)
    const startingText = document.createElement('h1');
    startingText.appendChild(document.createTextNode('Bienvenue dans le quizz des Libellules !'));
    document.body.appendChild(startingText);
}

function question() {
    // Affiche une question (fait appel au controleur pour savoir quoi afficher)

    // Numero de question
    // Question

    // Espace pour ecrire la reponse

    // Bouton submit (fait appel au controleur pour savoir si la reponse est bonne)
}

function passageProchaineQuestion() {
    // (appel constructeur)

    // Question precedente :
    // Desactive l'input et supprime le bouton submit de la derniere question
    // Affiche vraie ou faux (si faux : affiche la reonse attendue)

    // Nouvelle question :
    // Fait appel a question();
}

function finQuiz() {
    // Message de fin de quiz avec le score et un text du style "Excellent !" ou "Vous etes une merde" selon le score
}

function tempsRestant() {
    // Affichage du temps restant
    const time = document.createElement('p');
    time.appendChild(document.createTextNode('Temps restant pour la question: '));
    let compteur = document.createElement('span');
    compteur.setAttribute('id', 'cmpt');
    time.appendChild(compteur);
    document.body.appendChild(time);
}

/* Doit fonctionner etre dans Controlleur

function quiz() {
    header();
    tempsRestant();
    //document.getElementById('cmpt').innerText = "Test";
    question();
}

function setup() {
    quiz();
}
*/

window.addEventListener('DOMContentLoaded', setup);