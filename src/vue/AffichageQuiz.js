function header() {
    // Affiche le titre du quizz, le temps restant et score (question répondu sur question total)
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
}

function quiz() {
    header();
    tempsRestant();
    question();
}

function setup() {
    quiz();
}

window.addEventListener('DOMContentLoaded', setup);